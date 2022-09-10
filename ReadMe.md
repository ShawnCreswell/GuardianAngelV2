// mkdir myNewProject
// cd myNewProject

<!-- Create New Project -->
//npm init -y

<!-- Create Json Package -->
npm install express
npm install mongoose

// if needed npm i -D nodemon as dev dependency

<!-- Create new File called server.js -->
touch server.js

<!-- Server.js contents -->
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
app.use(cors())
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );

<!-- Modularize folders -->
Server
- config
- controllers
- models
- routes

<!-- Create React project -->
npx create-react-app client

cd Client
npm install axios
npm install react-router-dom

<!-- Install dotenv and colors -->
npm i dotenv colors

<!-- In myNewProject -->
npm install cors