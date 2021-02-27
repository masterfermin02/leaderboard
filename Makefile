
help:
	@echo ""
	@echo "-- Makefile Commands"
	@echo ""
	@echo "Choose a command from the list below:"
	@echo ""
	@echo "   1. make frontend:                - Start Local frontend"
	@echo "   2. make backend:             - Start Local Server"
	@echo "   3. make build:              - Build local server"
	@echo "   4. make stop-backend:              - Stop local server"
	@echo "   5. make backend-start:              - Start nodejs local server"
	@echo ""

frontend: 
	npm run start

backend:
	cd server && docker-compose up --build -d
	cd server && npm run start

build:
	cd server && docker-compose up --build -d
	cd server && npm install
	docker cp server/db_backup/dbdump.json server_mongo_1:/tmp/dbdump.json
	docker exec server_mongo_1 mongoimport --db test --collection users --jsonArray --authenticationDatabase admin --username root --password example --file /tmp/dbdump.json

stop-backend:
	cd server && docker-compose down

backend-start:
	cd server && npm start

default: help
