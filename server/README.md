# LeaderBoard

This repo is meant to keep track of the changes made to the backend of the **Leaderboard** challenge.

## Project Structure

    .
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
    └── Procfile            # Heroku Procfile

## How to execute the project

For one to be able to execute the project will need to first install the requirements listed in the [Project Requirements Section](#project-requirements).

- Clone this repo by running:

  ```bash
  git clone git@github.com:masterfermin02/leaderboard.git
  ```

- Once cloned run the following command:

  ```bash
  cd leaderboard && cp .env.sample .env && cp server/.env.sample server/.env
  ```
  
  Fill in the necessary variables in the `.env` file

- Install the dependencies by running:
```bash
  npm install
```

- Execute the project by running:

  ```bash
  docker-compose up
  ```

  **Note:** If one were to want to run the project in daemon mode then just append the `-d` flag to the previous command

  ```bash
  docker-compose up -d
  ```
- Start the server

  ```bash
  npm run start
  ```

  The server will be up and running in [localhost:5000](http://localhost:5000).

- Once done with the project press `ctrl + C` if you ran the project using `docker-compose up`.
  
  If you ran the project in daemon mode then just run
  
  ```bash
  docker-compose down
  ```
  
  This will stop all the container but will keep all the data save in cache and in the database, if you would like to remove everything then run 
  
  ```bash
  docker-compose down -v
  ``` 



## Endpoints

So far the server have the following set of endpoints:

- `GET:/` - The Home route will just return a `Hello World` message.
- `GET:/users` - Returns the list of all users
- `POST:/users` - This endpoint is use to save the users information the expected format for this endpoint is as follow:
  ```JSON
  {
  "skills": [
    {
      "name": "Post Apocalyptic Highway",
      "options": [
        {
          "name": "Hill Clime",
          "points": "P,R,W,F",
          "score": 5,
          "time": "00:1735"
        },
        {
          "name": "Run For The Hills",
          "points": "P,R",
          "score": 6,
          "time": "00:1735"
        },
        {
          "name": "Coded Doors",
          "points": "P,W",
          "score": 3,
          "time": "00:1735"
        },
        {
          "name": "Spear Throw",
          "points": "R,F",
          "score": 8,
          "time": "00:1735"
        },
        {
          "name": "Sand Bagging",
          "points": "P,W,F",
          "score": 2,
          "time": "00:1735"
        }
      ]
    },
    {
      "name": "Costa Rica Caves",
      "options": [
        {
          "name": "Crevasse Crossing",
          "points": "P,R,W,F",
          "score": 5,
          "time": "00:1735"
        },
        {
          "name": "The Canopy",
          "points": "P,R",
          "score": 6,
          "time": "00:1735"
        },
        {
          "name": "Dirty Armor",
          "points": "P,W",
          "score": 3,
          "time": "00:1735"
        },
        {
          "name": "Navigational Challenge",
          "points": "R,F",
          "score": 8,
          "time": "00:1735"
        },
        {
          "name": "Dead Weeight",
          "points": "P,W,F",
          "score": 2,
          "time": "00:1735"
        }
      ]
    }
  ],
  "name": "Fermin Perdomo",
  "photo": "https://randomuser.me/api/portraits/men/45.jpg",
  "bib": "1085",
  "age": "27",
  "gender": "M",
  "time": "17:42",
  "score": "41",
  "strength": "12",
  "endurance": "8",
  "dexterity": "9",
  "desitionMaking": "4"
}
  ```

- `PATCH:/users/:idNumber` - Update a specific user. Any of the following fields can be update with this endpoint:

  ```JSON
  {
  "skills": [
    {
      "name": "Post Apocalyptic Highway",
      "options": [
        {
          "name": "Hill Clime",
          "points": "P,R,W,F",
          "score": 5,
          "time": "00:1735"
        },
        {
          "name": "Run For The Hills",
          "points": "P,R",
          "score": 6,
          "time": "00:1735"
        },
        {
          "name": "Coded Doors",
          "points": "P,W",
          "score": 3,
          "time": "00:1735"
        },
        {
          "name": "Spear Throw",
          "points": "R,F",
          "score": 8,
          "time": "00:1735"
        },
        {
          "name": "Sand Bagging",
          "points": "P,W,F",
          "score": 2,
          "time": "00:1735"
        }
      ]
    },
    {
      "name": "Costa Rica Caves",
      "options": [
        {
          "name": "Crevasse Crossing",
          "points": "P,R,W,F",
          "score": 5,
          "time": "00:1735"
        },
        {
          "name": "The Canopy",
          "points": "P,R",
          "score": 6,
          "time": "00:1735"
        },
        {
          "name": "Dirty Armor",
          "points": "P,W",
          "score": 3,
          "time": "00:1735"
        },
        {
          "name": "Navigational Challenge",
          "points": "R,F",
          "score": 8,
          "time": "00:1735"
        },
        {
          "name": "Dead Weeight",
          "points": "P,W,F",
          "score": 2,
          "time": "00:1735"
        }
      ]
    }
  ],
  "name": "Fermin Perdomo",
  "photo": "https://randomuser.me/api/portraits/men/45.jpg",
  "bib": "1085",
  "age": "27",
  "gender": "M",
  "time": "17:42",
  "score": "41",
  "strength": "12",
  "endurance": "8",
  "dexterity": "9",
  "desitionMaking": "4"
}
  ```
