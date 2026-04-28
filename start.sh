#!/bin/sh
set -e

# Start Next.js standalone server on port 3000
node /app/server.js &

# Wait until Next.js is accepting connections before starting nginx
until nc -z 127.0.0.1 3000; do
  sleep 0.1
done

# Start nginx in foreground (keeps container alive)
exec nginx -g 'daemon off;'
