#!/bin/bash

# SSL Certificate Setup Script for sentinelkarma.space
# This script obtains SSL certificates from Let's Encrypt

set -e

CONTAINER_NAME="sentinelkarma-container"
DOMAIN="sentinelkarma.space"
EMAIL="admin@sentinelkarma.space"  # Change this to your email

echo "=========================================="
echo "  SSL Certificate Setup"
echo "=========================================="
echo ""

# Check if container is running
if ! docker ps | grep -q $CONTAINER_NAME; then
    echo "Error: Container $CONTAINER_NAME is not running"
    echo "Please run ./launch.sh first"
    exit 1
fi

echo "Setting up SSL certificates for $DOMAIN..."
echo ""

# Create temporary nginx config without SSL for initial certificate
echo "Step 1: Creating temporary nginx config for certificate challenge..."
docker exec $CONTAINER_NAME sh -c 'cat > /etc/nginx/conf.d/default.conf << "EOF"
server {
    listen 80;
    listen [::]:80;
    server_name sentinelkarma.space www.sentinelkarma.space;

    root /usr/share/nginx/html;
    index index.html;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF'

# Reload nginx
echo "Step 2: Reloading nginx..."
docker exec $CONTAINER_NAME nginx -s reload

echo ""
echo "Step 3: Obtaining SSL certificate from Let's Encrypt..."
echo "This may take a minute..."
echo ""

# Obtain certificate
docker exec $CONTAINER_NAME certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

# Restore full nginx config with SSL
echo ""
echo "Step 4: Updating nginx config with SSL..."
docker cp presentation-site/nginx.conf $CONTAINER_NAME:/etc/nginx/conf.d/default.conf

# Test nginx config
echo "Step 5: Testing nginx configuration..."
docker exec $CONTAINER_NAME nginx -t

# Reload nginx with SSL
echo "Step 6: Reloading nginx with SSL enabled..."
docker exec $CONTAINER_NAME nginx -s reload

echo ""
echo "=========================================="
echo "  SSL Certificate Setup Complete!"
echo "=========================================="
echo ""
echo "Your site is now available at:"
echo "  https://sentinelkarma.space"
echo "  https://www.sentinelkarma.space"
echo ""
echo "Certificate will auto-renew before expiration."
echo ""
echo "To manually renew:"
echo "  docker exec $CONTAINER_NAME certbot renew"
echo ""
