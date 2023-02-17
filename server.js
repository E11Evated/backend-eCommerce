const express = require('express');
const routes = require('./routes');
require('dotenv').config();
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// log database credentials
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});