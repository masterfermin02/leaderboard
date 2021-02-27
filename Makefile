
help:
	@echo ""
	@echo "-- Makefile Commands"
	@echo ""
	@echo "Choose a command from the list below:"
	@echo ""
	@echo "   1. make frontend:                - Start Local frontend"
	@echo "   2. make server:             - Start Local Server"
	@echo "   3. make build:              - Build local server"
	@echo ""

frontend: 
	npm run start

server:
	cd server && docker-compose up --build -d
	cd server && npm run start

build:
	cd server && docker-compose up --build -d
	cd server && npm install
	docker exec -it server_mongo_1 mongo
	docker cp server/db_backup/dbdump.json server_mongo_1:/tmp/dbdump.json
	docker exec server_mongo_1 mongoimport -d test -c users --file /tmp/dbdump.json

default: help
