#!/bin/bash

# init .env file 

touch .env

cat > .env << EOF
PORT=3000
REACT_APP_API_URL=http://localhost:5000
EOF

cat > server/.env << EOF
# Local variables
MONGO_HOSTNAME=db
MONGO_PORT=27017 
MONGO_DB=leaderboard
REDIS_HOST=app_cache
NODE_ENV=local
EOF
