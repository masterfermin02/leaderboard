# Fullstack, React + Node JS

# Main Goal

Your task is to create a project using React JS that uses a REST API based on Node JS. The Frontend
has to be responsive and the Backend has to handle a database of:
− Participants and
− Skills.
Note: For React you can use the libraries you prefer in order to accomplish the requirements.

# LeaderBoard

This repo is meant to keep track of the changes made to the frontend and backend of the **Leaderboard** challenge.

## Project  Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)

There is no need for the developers to install MongoDB since all this is included in the Docker service.

## Project Structure


    .
    ├── public # Icludes public files of the frontend
    ├── server
        ├── src
            ├── controllers     # Includes the CRUD functions
            ├── database
                └── models      # Inlcudes the mongoose models
            └── index.js        # Server Configuration files
        ├── .env.sample
        ├── .gitignore
        ├── docker-compose.yml  # Docker Compose File
        ├── Dockerfile
        ├── package-lock.json
        ├── package.json
    ├── src
        ├── assets # images and files for fronted
        ├── Components # Components of the application
        ├── Context # Includes context to share data with components
        ├── helpers # Includes  api request helpers functions
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── logo.png
        ├── registerServiceWorker.js
        ├── .eslintcache
        ├── .gitiignore
        ├── package.json

## How to execute the project

If you want to be able to execute the project you will first need to install the requirements listed in the [Project Requirements Section](#project--requirements).

- Clone this repo by running:

  ```bash
  git clone git@github.com:masterfermin02/leaderboard.git
  ```

- Create the `.env` file:

  ```bash
  ./init-env.sh
  ```

### You can run the app using Docker and Make:

- Build the database container, seed it and also install server dependencies:

```bash
make build
```

- Run the nodejs server:

```bash
make backend
```

- Install frontend dependencies:
```bash
npm install
```

- Start the local frontend app

```bash
make frontend
```

- You should see the app running on:
```
  🚀 Client Running on: http://localhost:3000
```

- Stop the backend docker container

```bash
make stop-backend
```

## Or, you can run the project manually:

- Go the server folder
```bash
  cd server
```

- Create containers:
```bash
  docker-compose up
```
- Run the server:
```bash
npm run start
```

- Generate the Sequelize seeds:
```bash
  docker cp server/db_backup/dbdump.json server_mongo_1:/tmp/dbdump.json
	docker exec server_mongo_1 mongoimport --db test --collection users --jsonArray --authenticationDatabase admin --username root --password example --file /tmp/dbdump.json
```

The local development server will be running at localhost:5000. At the same time you will have a database administration interface (by Adminer) running at localhost:8081.

- Go back to the root folder
```bash
  cd ..
```

- Start frontend application
```bash
npm start
```

The local frontend application will be running at localhost:3000.

- Server and api documentations are on the server folder:
[Server doc](https://github.com/masterfermin02/leaderboard/tree/main/server)