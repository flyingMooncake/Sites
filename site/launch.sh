#!/bin/bash

# Docker Launch Script for Presentation Site
# This script builds and runs the presentation site in a Docker container

set -e

# Configuration
IMAGE_NAME="presentation-site"
CONTAINER_NAME="presentation-site-container"
PORT=8080

echo "=========================================="
echo "  Presentation Site Docker Launcher"
echo "=========================================="
echo ""

# Check if running on Ubuntu/Debian
if [ -f /etc/os-release ]; then
    . /etc/os-release
    if [[ "$ID" == "ubuntu" ]] || [[ "$ID" == "debian" ]] || [[ "$ID_LIKE" == *"ubuntu"* ]] || [[ "$ID_LIKE" == *"debian"* ]]; then
        echo "Checking Ubuntu/Debian dependencies..."

        MISSING_DEPS=()

        # Check for Docker
        if ! command -v docker &> /dev/null; then
            MISSING_DEPS+=("docker.io")
        fi

        # Check for curl (useful for health checks)
        if ! command -v curl &> /dev/null; then
            MISSING_DEPS+=("curl")
        fi

        # Check for ca-certificates (needed for HTTPS)
        if ! dpkg -l | grep -q ca-certificates; then
            MISSING_DEPS+=("ca-certificates")
        fi

        if [ ${#MISSING_DEPS[@]} -gt 0 ]; then
            echo ""
            echo "Missing dependencies detected: ${MISSING_DEPS[*]}"
            echo ""
            echo "To install missing dependencies, run:"
            echo "  sudo apt update && sudo apt install -y ${MISSING_DEPS[*]}"
            echo ""
            read -p "Would you like to install them now? (y/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                sudo apt update && sudo apt install -y "${MISSING_DEPS[@]}"
                echo ""
                echo "Dependencies installed successfully!"
                echo ""
            else
                echo "Please install dependencies manually before continuing."
                exit 1
            fi
        else
            echo "All dependencies are installed."
        fi
        echo ""
    fi
fi

# Check if Docker is installed (final check)
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed or not in PATH"
    exit 1
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    echo "Error: Docker daemon is not running"
    echo "Start it with: sudo systemctl start docker"
    exit 1
fi

# Navigate to the presentation-site directory
cd "$(dirname "$0")/presentation-site"

echo "Step 1: Building Docker image..."
docker build -t $IMAGE_NAME .

echo ""
echo "Step 2: Stopping and removing existing container (if any)..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

echo ""
echo "Step 3: Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  --network host \
  $IMAGE_NAME

# Get local IP address
LOCAL_IP=$(hostname -I | awk '{print $1}')

# Try to detect if running on AWS
AWS_PUBLIC_IP=""
AWS_TOKEN=$(curl -s -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" --connect-timeout 1 2>/dev/null)
if [ -n "$AWS_TOKEN" ]; then
    AWS_PUBLIC_IP=$(curl -s -H "X-aws-ec2-metadata-token: $AWS_TOKEN" http://169.254.169.254/latest/meta-data/public-ipv4 --connect-timeout 2 2>/dev/null)
fi

echo ""
echo "=========================================="
echo "  Container started successfully!"
echo "=========================================="
echo ""
echo "Access the site at:"
echo "  Local:            http://localhost:80"

if [ -n "$AWS_PUBLIC_IP" ]; then
    echo "  Public (AWS):     http://$AWS_PUBLIC_IP"
    echo ""
    echo "⚠️  IMPORTANT: Make sure ports 80 and 443 are open in your Security Group!"
    echo "   AWS Console → EC2 → Security Groups → Inbound Rules"
    echo "   Required rules:"
    echo "     - HTTP (port 80) from 0.0.0.0/0"
    echo "     - HTTPS (port 443) from 0.0.0.0/0"
else
    echo "  Internal IP:      http://$LOCAL_IP"
    echo ""
    echo "If on AWS/Cloud: Make sure ports 80 and 443 are open in firewall/security groups"
fi

echo ""
echo "Note: Using host network mode (ports 80 and 443)"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Next Steps for HTTPS:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Ensure your domain DNS is pointing to this server"
echo "2. Open port 443 in AWS Security Group (for HTTPS)"
echo "3. Run the SSL setup script:"
echo "   ./setup-ssl.sh"
echo ""
echo "This will obtain free SSL certificates from Let's Encrypt"
echo "and enable HTTPS for your domain."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Useful commands:"
echo "  View logs:        docker logs $CONTAINER_NAME"
echo "  Stop container:   docker stop $CONTAINER_NAME"
echo "  Remove container: docker rm $CONTAINER_NAME"
echo "  Remove image:     docker rmi $IMAGE_NAME"
echo ""
