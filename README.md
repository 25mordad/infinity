# infinity

![infinity](https://i.ibb.co/P49XvLp/infinity.png)

## Introduction

This is a code repository for The Rick and Morty API: https://rickandmortyapi.com/

Using React, Node.js, Express & MongoDB. The App is called "Infinity".

## Setup:

- run `npm i && npm start` for both backend and fronend to start the app.
- make a copy from .env.copy (both backend and frontend) and name it .env and setup with a right variables.

## Dependencies:

--Frontend--

- react-redux :To better managing state.
- redux-thunk : To dispatch an action only if a certain condition is met.
- axios: Client HTTP API, help to use async and await.
- jwt-decode: Decoding JWTs token.
- react-router-dom: Client-side routing.

--backend--

- mongoose: MongoDB library.
- nodemon: To help automatically restarting the node app after changes in the directory.
- bcryptjs: To Hash & Check Passwords in Node.js.
- body-parser: To reads a form's input and stores it as a javascript object.
- cors: To access secure APIS.
- dotenv: .env file.
- jsonwebtoken: To securely transmitting data between parties as a JSON object.(Authorization)
- rickmortyapi
