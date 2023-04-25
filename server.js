//express web server
const express = require('express');
const app = express();
const lesson1Controller = require('../controllers/lesson1');

app.get('/', lesson1Controller.marianaGarcia);
app.get('/mari', lesson1Controller.mariaOlvera);

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));