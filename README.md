# reactjs-app-express-sequelize
Frontend in React Js and  Rest APIs in Node.js with Express, Sequelize &amp; MySQL. A simple app for show users list with pagination and show user's friend and user's friend of friend.
> Rest APIs code in server folder
In the project directory, you can run:
## Project setup
```
npm install
```

# Server Configuration

> Change Server running port in .env file

> Change or add your DB configs in server/config/db.config.js file

> import dummy db from server/db/demo.sql

### Run Server
```
npm run server
```
# Rest APIs

> for get all Users :  GET Method  http://localhost:3001/users/{{page_no}}

> get User's friend by user id : GET Method  http://localhost:3000/users/{{userId}}/friends

> get User's friend of friend by user id : GET Method  http://localhost:3000/users/{{userId}}/mutual-firends

# Frontend Configuration

> change API URL in src/config.js

### Run React App
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
