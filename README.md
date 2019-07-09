# Task-Manager API

Hey! to run this API, **Postman** is recommendet, because there is no Frontend yet. 

# Install

To install the Tast-Manager API, simply clone the Repo and run `npm i`.
Start the Server with `npm run dev` (when nodemon is installed).

For the database, clone and run the Docker Container ... (to be done)...

## Use the App
### Create a User
You need to create a User first with the `POST /users` Endpoint.
name, email and password are required.
You will receive a JWT Token.
### Login
To Login and use the different Endpoints, a `Bearer`Auth Token is required. 
