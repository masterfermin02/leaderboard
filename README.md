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

If you want to be able to execute the project you will first need to install the requirements listed in the [Project Requirements Section](#project-requirements).

- Clone this repo by running:

  ```bash
  git clone git@github.com:masterfermin02/leaderboard.git
  ```

- Create the `.env` file:

  ```bash
  ./init-env.sh
  ```

### You can choose to run the app using Docker and Make:

- Build the database container:

```bash
make build
```

- Run the project on watch mode:

```bash
make up
```

### Or, you can run the project manually:

- Create containers:

```bash
docker-compose up
```

- Run the server:

```bash
npm run server
```

- Generate the Sequelize migrations:

```bash
npm run migrate
```

- Generate the Sequelize seeds (default roles):

```bash
npm run seed
```

The local development server will be running at [localhost:8080](http://localhost:8080).
At the same time you will have a database administration interface (by Adminer) running at [localhost:4000](http://localhost:4000).

## To remove all the data you have made after running the app, you can run:

- Stop all the containers:

```bash
make stop-all
```

- Remove unused the containers:

```bash
make burn
```

- Clean the containers dummy data:

```bash
npm run clean
```

- You can also remove the unused containers:

```bash
make rmi-dangle
```

and

```bash
make rmv-dangle
```

## Run with localtunnel:

- Install `localtunnel` globally:

  ```bash
  npm install -g localtunnel
  ```

- Set the server to accept requests from all domains:
  - Go to `/app/index.js`
  - Replace the line:
    ```javascript
    app.use(cors({ origin: ORIGIN_URL, credentials: true }));
    ```
    with:
    ```javascript
    app.use(cors());
    ```
- Run the server with your preferred method listed above

- Serve the app with `localtunnel`:

  ```bash
  lt --port 8080
  ```

- `localtunnel` will provide the link where the server is running in your lan. This is the link you need to run the client-side of the application with `localtunnel` as well.

## Test

To test the endpoints of the application:

- Make sure you have cleaned the dummy data of the container with `npm run clean`.
- Run the tests with `make test`

> All tests run as a pre-push hook with husky