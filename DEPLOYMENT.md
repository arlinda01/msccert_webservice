# MSC Certificate System - Deployment Guide

Complete deployment guide for Hostinger VPS at **msc-cert.com**.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Server Setup](#server-setup)
3. [Docker Installation](#docker-installation)
4. [SSL Certificate Setup](#ssl-certificate-setup)
5. [Application Deployment](#application-deployment)
6. [Database Setup](#database-setup)
7. [Nginx Configuration](#nginx-configuration)
8. [Environment Configuration](#environment-configuration)
9. [Running the Application](#running-the-application)
10. [Maintenance & Updates](#maintenance--updates)
11. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Hostinger VPS with Ubuntu 20.04+ or Debian 11+
- Root or sudo access
- Domain name: **msc-cert.com** pointing to your VPS IP
- Minimum 2GB RAM, 2 CPU cores, 20GB disk space

---

## Server Setup

### 1. Connect to Your VPS

```bash
ssh root@your-vps-ip
```

### 2. Update System Packages

```bash
apt update && apt upgrade -y
```

### 3. Install Required Packages

```bash
apt install -y git curl wget nano ufw
```

### 4. Configure Firewall

```bash
# Allow SSH
ufw allow 22/tcp

# Allow HTTP and HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Enable firewall
ufw enable
ufw status
```

### 5. Create Application User

```bash
# Create user for running the application
adduser msccert
usermod -aG sudo msccert

# Switch to the new user
su - msccert
```

---

## Docker Installation

### 1. Install Docker

```bash
# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### 2. Configure Docker Permissions

```bash
# Add current user to docker group
sudo usermod -aG docker $USER

# Log out and back in for group changes to take effect
exit
su - msccert
```

### 3. Verify Docker Installation

```bash
docker --version
docker compose version
```

---

## SSL Certificate Setup

### 1. Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Obtain SSL Certificate

```bash
# Stop any web server running on port 80
sudo systemctl stop nginx 2>/dev/null || true

# Get SSL certificate
sudo certbot certonly --standalone -d msc-cert.com -d www.msc-cert.com

# Your certificates will be saved at:
# /etc/letsencrypt/live/msc-cert.com/fullchain.pem
# /etc/letsencrypt/live/msc-cert.com/privkey.pem
```

### 3. Set Up Auto-Renewal

```bash
# Test renewal
sudo certbot renew --dry-run

# Certbot automatically sets up a cron job for renewal
```

---

## Application Deployment

### 1. Clone Repository

```bash
cd /home/msccert
git clone <your-repository-url> msccert_app
cd msccert_app
```

### 2. Generate Django Secret Key

```bash
# Generate a secure secret key
python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Copy the generated key for use in the `.env` file.

---

## Environment Configuration

### 1. Create Production Environment File

```bash
cp .env.example .env
nano .env
```

### 2. Configure Environment Variables

Update `.env` with your production values:

```bash
# Django Settings
DJANGO_SECRET_KEY=<paste-generated-secret-key-here>
DEBUG=False
ALLOWED_HOSTS=msc-cert.com,www.msc-cert.com,localhost,127.0.0.1

# Database Configuration
DB_NAME=msccert_db
DB_USER=msccert_user
DB_PASSWORD=<generate-strong-password>

# Frontend URLs
FRONTEND_URL=https://msc-cert.com
REACT_APP_API_URL=https://msc-cert.com/api

# CORS Settings
CORS_ALLOWED_ORIGINS=https://msc-cert.com,https://www.msc-cert.com
CSRF_TRUSTED_ORIGINS=https://msc-cert.com,https://www.msc-cert.com

# Email Configuration (Optional)
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=noreply@msc-cert.com

# Security Settings
SECURE_SSL_REDIRECT=True
```

**Important:** Save the `.env` file securely. Never commit it to git!

---

## Nginx Configuration

### 1. Install Nginx

```bash
sudo apt install -y nginx
```

### 2. Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/msccert
```

Add the following configuration:

```nginx
# HTTP - Redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name msc-cert.com www.msc-cert.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$server_name$request_uri;
    }
}

# HTTPS - Main Application
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name msc-cert.com www.msc-cert.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/msc-cert.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/msc-cert.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Client body size limit (for file uploads)
    client_max_body_size 20M;

    # Logging
    access_log /var/log/nginx/msccert_access.log;
    error_log /var/log/nginx/msccert_error.log;

    # Backend API
    location /api/ {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Admin panel
    location /admin/ {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Media files (uploaded content)
    location /media/ {
        alias /home/msccert/msccert_app/backend/media/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Static files (CSS, JS, etc.)
    location /static/ {
        alias /home/msccert/msccert_app/backend/staticfiles/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Frontend (React App)
    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 3. Enable Site Configuration

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/msccert /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## Database Setup

The database will be automatically created by Docker, but you'll need to run migrations and create a superuser.

---

## Running the Application

### 1. Build Docker Images

```bash
cd /home/msccert/msccert_app

# Build images (this may take 5-10 minutes)
docker compose build
```

### 2. Start Services

```bash
# Start all services in detached mode
docker compose up -d

# Check if containers are running
docker compose ps

# View logs
docker compose logs -f
```

### 3. Run Database Migrations

```bash
# Run migrations
docker compose exec backend python manage.py migrate

# Create superuser
docker compose exec backend python manage.py createsuperuser
```

Follow the prompts to create your admin account.

### 4. Verify Installation

Open your browser and visit:
- **https://msc-cert.com** - Frontend
- **https://msc-cert.com/admin** - Django Admin Panel
- **https://msc-cert.com/api/health/** - API Health Check

---

## Maintenance & Updates

### Viewing Logs

```bash
# View all logs
docker compose logs

# View specific service logs
docker compose logs backend
docker compose logs frontend
docker compose logs db

# Follow logs in real-time
docker compose logs -f backend
```

### Updating the Application

```bash
cd /home/msccert/msccert_app

# Pull latest changes
git pull origin main

# Rebuild and restart
docker compose down
docker compose build
docker compose up -d

# Run migrations if needed
docker compose exec backend python manage.py migrate
```

### Database Backup

```bash
# Create backup directory
mkdir -p /home/msccert/backups

# Backup database
docker compose exec db pg_dump -U msccert_user msccert_db > /home/msccert/backups/backup_$(date +%Y%m%d_%H%M%S).sql

# Restore from backup
docker compose exec -T db psql -U msccert_user msccert_db < /home/msccert/backups/backup_YYYYMMDD_HHMMSS.sql
```

### Stopping the Application

```bash
# Stop all services
docker compose down

# Stop and remove volumes (WARNING: This deletes the database!)
docker compose down -v
```

---

## Troubleshooting

### Container Won't Start

```bash
# Check container status
docker compose ps

# View logs for errors
docker compose logs backend

# Restart specific service
docker compose restart backend
```

### Database Connection Issues

```bash
# Check if database is running
docker compose ps db

# Check database logs
docker compose logs db

# Verify environment variables
docker compose config
```

### Permission Issues

```bash
# Fix media and static file permissions
sudo chown -R msccert:msccert /home/msccert/msccert_app/backend/media
sudo chown -R msccert:msccert /home/msccert/msccert_app/backend/staticfiles
```

### SSL Certificate Issues

```bash
# Check certificate expiry
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Restart Nginx after renewal
sudo systemctl restart nginx
```

### Clear Docker Cache

```bash
# Remove unused images and containers
docker system prune -a

# Rebuild from scratch
docker compose down
docker compose build --no-cache
docker compose up -d
```

---

## Security Checklist

- [x] SSL certificate installed and auto-renewal configured
- [x] Firewall configured (UFW)
- [x] Debug mode disabled (`DEBUG=False`)
- [x] Strong Django secret key generated
- [x] Secure database password
- [x] CORS and CSRF properly configured
- [x] Nginx security headers configured
- [x] Running as non-root user
- [x] Regular backups scheduled
- [x] `.env` file secured (not in git)

---

## Support

For issues or questions:
1. Check logs: `docker compose logs`
2. Review this documentation
3. Check Django admin at https://msc-cert.com/admin

---

**Last Updated:** 2025-01-13