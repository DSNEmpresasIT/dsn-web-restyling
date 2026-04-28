#!/bin/bash
set -e

DOCKER_USER="devteamdsn"
IMAGE_NAME="dsnweb"
TAG="latest"

# Load NEXT_PUBLIC_* vars from .env if not already set in the environment
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# 1) Build — pass NEXT_PUBLIC vars as build args (baked into the Next.js bundle)
docker build \
  --build-arg NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION="${NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION}" \
  --build-arg NEXT_PUBLIC_EMAILTOSEND="${NEXT_PUBLIC_EMAILTOSEND}" \
  -t "$DOCKER_USER/$IMAGE_NAME:$TAG" .

# 2) Push
docker push "$DOCKER_USER/$IMAGE_NAME:$TAG"

# 3) Cleanup dangling images and stopped containers left by the multi-stage build
docker image prune -f
docker container prune -f

echo "Deploy complete: $DOCKER_USER/$IMAGE_NAME:$TAG"
