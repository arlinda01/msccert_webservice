#!/usr/bin/env bash
# Start script for Render deployment

# Start Gunicorn with proper port binding
# Render provides the PORT environment variable
gunicorn --bind 0.0.0.0:$PORT --workers 2 --timeout 120 backend.wsgi:application
