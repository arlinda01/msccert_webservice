"""
Shared anti-spam helpers for the public form endpoints (contact form,
apply-online form, quote/assessment forms): a honeypot field check and
server-side Cloudflare Turnstile verification.
"""
import json
import logging
import urllib.error
import urllib.parse
import urllib.request

from django.conf import settings

logger = logging.getLogger(__name__)

HONEYPOT_FIELD = 'website'
TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'


def get_client_ip(request):
    """Best-effort client IP, honoring a reverse proxy's X-Forwarded-For."""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        return x_forwarded_for.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR')


def is_honeypot_triggered(data):
    """True if the hidden trap field was filled in - a strong bot signal."""
    return bool(str(data.get(HONEYPOT_FIELD, '')).strip())


def verify_turnstile(token, remote_ip=None):
    """
    Verify a Cloudflare Turnstile token server-side.

    If TURNSTILE_SECRET_KEY isn't configured, verification is skipped and
    passes through, so local/dev environments keep working without needing
    Cloudflare credentials.

    Returns (is_valid: bool, error_message: str | None).
    """
    secret = getattr(settings, 'TURNSTILE_SECRET_KEY', '')
    if not secret:
        return True, None

    if not token:
        return False, 'Verification challenge is missing. Please refresh the page and try again.'

    payload = urllib.parse.urlencode({
        'secret': secret,
        'response': token,
        **({'remoteip': remote_ip} if remote_ip else {}),
    }).encode('utf-8')

    try:
        req = urllib.request.Request(TURNSTILE_VERIFY_URL, data=payload, method='POST')
        with urllib.request.urlopen(req, timeout=5) as resp:
            result = json.loads(resp.read().decode('utf-8'))
    except (urllib.error.URLError, TimeoutError, ValueError) as exc:
        logger.error(f"Turnstile verification request failed: {exc}")
        return False, 'Could not verify you are human. Please try again.'

    if not result.get('success'):
        logger.warning(f"Turnstile verification failed: {result.get('error-codes')}")
        return False, 'Verification failed. Please refresh the page and try again.'

    return True, None
