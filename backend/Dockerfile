FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies including dos2unix for line ending conversion
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    dos2unix \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create media directory
RUN mkdir -p media

# Convert line endings and make scripts executable
RUN dos2unix build.sh start.sh || true
RUN chmod +x build.sh start.sh

# Collect static files (don't fail if it doesn't work during build)
RUN python manage.py collectstatic --no-input || true

# Expose port (Render will override with $PORT)
EXPOSE 8000

# Start the application
CMD ["/bin/bash", "./start.sh"]
