# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Install certbot and dependencies
RUN apk add --no-cache certbot certbot-nginx

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (HTTP only initially)
COPY nginx-http.conf /etc/nginx/conf.d/default.conf

# Create directory for certbot challenges
RUN mkdir -p /var/www/certbot

# Expose ports 80 and 443
EXPOSE 80 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
