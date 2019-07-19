# Task-Manager API

Hey! to run this API, **Postman** is recommendet, because there is no Frontend yet. 

# Install

To install the Tast-Manager API, simply clone the Repo and run `npm i`.
Start the Server with `npm run dev` (when nodemon is installed).

For a production Version, create a `.env` File in the source directory.
Required: PRODUCTION=(true|false), DB_HOST, DB_USER, DB_PASS

## Use the App
### Create a User
You need to create a User first with the `POST /users` Endpoint.
name, email and password are required.
You will receive a JWT Token.
### Login
To Login and use the different Endpoints, a `Bearer`Auth Token is required. 
