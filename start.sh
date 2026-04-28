#!/bin/sh

# Start Next.js standalone server bound to localhost
HOSTNAME=127.0.0.1 PORT=3000 node /app/server.js &

# Give Next.js time to initialize before nginx starts proxying
sleep 2

# Validate nginx config — if this prints an error, it shows in docker logs
nginx -t

# Start nginx in foreground — keeps the container alive
exec nginx -g 'daemon off;'
