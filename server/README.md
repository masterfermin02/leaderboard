# LeaderBoard

This repo is meant to keep track of the changes made to the backend of the **Leaderboard** challenge.

## Project  Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)

There is no need for the developers to install Node JS since all this is included in the [Dockerfile](./Dockerfile). In addition, the project is using MongoDB for the data base and Redis for caching some requests.

Some Optionals dependencies: 

- [Docker Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) - Helpful Extension when working with docker.
- [Robo 3T](https://robomongo.org/) - This is a really handy tool when working with MongoDB locally or remotely.

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
  git clone git@github.com:intellisys/internet-hospital.git
  ```

- Once cloned run the following command:

  ```bash
  cd internet-hospital && cp .env.sample .env
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
- `GET:/patient` - Returns the list of all patients
- `POST:/patient` - This endpoint is use to save the patient information the expected format for this endpoint is as follow:
  ```JSON
  {
    "firstName":{
      "type":"String",
      "required":true
    },
    "lastName":{
      "type":"String",
      "required":true
    },
    "idNumber":{
      " type":"String"
    },
    "phoneNumber":{
      "type":"String",
      "required":true
    }
  }
  ```

- `PATCH:/patient/:idNumber` - Update a specific patient. Any of the following fields can be update with this endpoint:

  ```JSON
  {
    "firstName":{
      "type":"String"
    },
    "lastName":{
      "type":"String"
    },
    "responses":{
      "type":"Array",
    },
    "queueStatus":{
      "type":"String",
      "emun":[
        "in queue",
        "in progress",
        "attended"
      ]
    }
  }
  ```

- `POST:/bot` - Bot endpoint
- `GET:/doctors` - will return the a list of all the doctors
- `GET:/doctor/:email` -  will return the information for the doctor with with the given email.
- `POST:/doctor` - This endpoint is use when saving a new doctor entry. This endpoint expects a JSON with the following format:

  ```JSON
  {
    "name":{
      "type":"String",
      "required":true
    },
    "lastName":{
      "type":"String",
      "required":true
    },
    "phone":{
      "type":"String",
      "required":true
    },
    "email":{
      "type":"String",
      "required":true
    },
    "idNumber":{
      "type":"String",
      "required":true
    },
    "password":{
      "type":"String",
      "required":true
    }
  }
  ```

- `POST:/login` - Authentication endpoint will return a JWT if the authentication process is successful.
- `GET/queue` -  Will return a patients queue which is updated every single time a patient enters or leave the queue.
