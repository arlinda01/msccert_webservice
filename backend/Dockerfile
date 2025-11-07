FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create media directory
RUN mkdir -p media

# Make scripts executable
RUN chmod +x build.sh start.sh

# Collect static files and run migrations
RUN python manage.py collectstatic --no-input || true

# Expose port (Render will override with $PORT)
EXPOSE 8000

# Start the application
CMD ["./start.sh"]
