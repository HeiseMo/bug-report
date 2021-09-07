# Bug Tracker - Web App

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a Bug Tracker that helps you create, assign and follow bugs you encounter as you work.
	
## Technologies
Project is created with:
* React.js
* Node.Js
* MongoDB
	
## Setup
To run this project, install it locally using npm:

### BackEnd
```
$ npm install
$ node server.js
```

### FrontEnd
```
$ cd ../client
$ npm install
$ npm start
```

### .ENV File
The .env file has 3 values that need to be assigned. The MONGOURI for your monodb url, PORT for the server and SESSION_SECRET for the login system.

```
MONGOURI=
PORT=
SESSION_SECRET=
```
