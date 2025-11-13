"""
Health Check Endpoint

This module provides a health check endpoint for monitoring
the application status in production environments (Docker, Kubernetes, load balancers).
"""

from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
import sys


def health_check(request):
    """
    Health check endpoint for monitoring services

    GET /api/health/

    Returns:
        200 OK - Service is healthy
        503 Service Unavailable - Service has issues

    Response format:
    {
        "status": "healthy" | "unhealthy",
        "database": "connected" | "disconnected",
        "python_version": "3.11.x"
    }
    """
    health_status = {
        "status": "healthy",
        "python_version": f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
    }

    # Check database connection
    try:
        db_conn = connections['default']
        db_conn.cursor()
        health_status["database"] = "connected"
    except OperationalError:
        health_status["status"] = "unhealthy"
        health_status["database"] = "disconnected"
        return JsonResponse(health_status, status=503)

    # All checks passed
    return JsonResponse(health_status, status=200)