from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.contrib.auth import authenticate, get_user_model
from django.contrib.admin.models import LogEntry, CHANGE
from django.contrib.contenttypes.models import ContentType
from axes.helpers import get_client_ip_address
from axes.handlers.proxy import AxesProxyHandler
import logging
from .serializers import (
    UserSerializer,
    UserCreateSerializer,
    UserUpdateSerializer,
    PasswordChangeSerializer,
    LoginSerializer
)

User = get_user_model()
logger = logging.getLogger(__name__)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    """
    Admin login endpoint with brute force protection

    POST /api/auth/login/
    Body: { "username": "admin", "password": "password" }

    Returns: { "token": "...", "user": {...} }

    Security: After 5 failed attempts, the account is locked for 30 minutes
    """
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    username = serializer.validated_data['username']
    password = serializer.validated_data['password']

    # Check if the user/IP is locked out due to too many failed attempts
    if AxesProxyHandler.is_locked(request, credentials={'username': username}):
        logger.warning(f"Locked out login attempt for username: {username} from IP: {get_client_ip_address(request)}")
        return Response(
            {
                'error': 'Too many failed login attempts. Account is temporarily locked.',
                'locked': True,
                'lockout_duration': '30 minutes'
            },
            status=status.HTTP_403_FORBIDDEN
        )

    # Authenticate user (axes will automatically track this)
    user = authenticate(request=request, username=username, password=password)

    if user is None:
        # Log failed attempt
        logger.warning(f"Failed login attempt for username: {username} from IP: {get_client_ip_address(request)}")
        return Response(
            {'error': 'Invalid credentials'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    # Check if user is admin/staff
    if not user.is_staff:
        logger.warning(f"Non-staff login attempt for username: {username} from IP: {get_client_ip_address(request)}")
        return Response(
            {'error': 'Access denied. Admin privileges required.'},
            status=status.HTTP_403_FORBIDDEN
        )

    # Check if user is active
    if not user.is_active:
        return Response(
            {'error': 'Account is disabled'},
            status=status.HTTP_403_FORBIDDEN
        )

    # Get or create token
    token, created = Token.objects.get_or_create(user=user)

    # Log successful login
    logger.info(f"Successful login for user: {username} from IP: {get_client_ip_address(request)}")

    return Response({
        'token': token.key,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'is_staff': user.is_staff,
            'is_superuser': user.is_superuser,
        }
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    """
    Admin logout endpoint

    POST /api/auth/logout/
    Headers: Authorization: Token <token>

    Returns: { "message": "Successfully logged out" }
    """
    try:
        # Delete the user's token
        request.user.auth_token.delete()
        return Response(
            {'message': 'Successfully logged out'},
            status=status.HTTP_200_OK
        )
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def verify_token(request):
    """
    Verify token validity

    GET /api/auth/verify/
    Headers: Authorization: Token <token>

    Returns: { "valid": true, "user": {...} }
    """
    serializer = UserSerializer(request.user)
    return Response({
        'valid': True,
        'user': serializer.data
    }, status=status.HTTP_200_OK)


class UserViewSet(viewsets.ModelViewSet):
    """
    ViewSet for User CRUD operations (Admin only)

    List, Create, Retrieve, Update users
    Only superusers can delete users
    """
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]

    def get_serializer_class(self):
        """Use different serializers for different actions"""
        if self.action == 'create':
            return UserCreateSerializer
        elif self.action in ['update', 'partial_update']:
            return UserUpdateSerializer
        return UserSerializer

    def get_serializer_context(self):
        """Pass request context to serializer for permission checks"""
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def destroy(self, request, *args, **kwargs):
        """Only superusers can delete users"""
        if not request.user.is_superuser:
            return Response(
                {'error': 'Only superusers can delete users'},
                status=status.HTTP_403_FORBIDDEN
            )
        return super().destroy(request, *args, **kwargs)

    @action(detail=True, methods=['post'])
    def change_password(self, request, pk=None):
        """
        Change user password

        POST /api/users/{id}/change_password/
        Headers: Authorization: Token <admin_token>
        Body: {
            "old_password": "current_password",
            "new_password": "new_password",
            "new_password_confirm": "new_password"
        }
        """
        user = self.get_object()

        # Only allow users to change their own password or superusers to change anyone's
        if request.user.id != user.id and not request.user.is_superuser:
            return Response(
                {'error': 'You can only change your own password'},
                status=status.HTTP_403_FORBIDDEN
            )

        serializer = PasswordChangeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Check old password only if user is changing their own password
        if request.user.id == user.id:
            if not user.check_password(serializer.validated_data['old_password']):
                return Response(
                    {'error': 'Old password is incorrect'},
                    status=status.HTTP_400_BAD_REQUEST
                )

        # Set new password
        user.set_password(serializer.validated_data['new_password'])
        user.save()

        # Audit log: Record password change
        is_self_change = request.user.id == user.id
        change_message = f"Password changed by {'self' if is_self_change else f'superuser {request.user.username}'}"

        # Log to Django admin log
        LogEntry.objects.create(
            user_id=request.user.id,
            content_type_id=ContentType.objects.get_for_model(user).pk,
            object_id=user.pk,
            object_repr=str(user),
            action_flag=CHANGE,
            change_message=change_message
        )

        # Log to application logger
        logger.info(
            f"Password changed for user {user.username} (ID: {user.id}) by "
            f"{'themselves' if is_self_change else f'superuser {request.user.username} (ID: {request.user.id})'}"
        )

        return Response({
            'message': 'Password changed successfully'
        }, status=status.HTTP_200_OK)
