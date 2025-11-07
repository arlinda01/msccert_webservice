#!/usr/bin/env bash
# exit on error
set -o errexit

# Start script for Render deployment
echo "Starting Django application..."
echo "PORT environment variable: $PORT"

# Default to port 8000 if PORT is not set
PORT=${PORT:-8000}
echo "Using port: $PORT"

# Start Gunicorn with proper port binding
echo "Starting Gunicorn..."
exec gunicorn --bind 0.0.0.0:$PORT --workers 2 --timeout 120 --log-level info backend.wsgi:application
