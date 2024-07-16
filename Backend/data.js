//Import Express
const express = require('express');
const app = express();

//Import Cors
let cors = require('cors');
app.use(cors());

//Import Mogodb Database and concted with it
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Task_Management_Tool').then(()=> console.log('Database has been contacted'));

//Import HTTP verbs
const methodOverride = require('method-override');
app.use(methodOverride('X-HTTP-Method-Override'));

//Import body-parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tasksRouter = require('./router/tasksRouter');
app.use('/', tasksRouter);

const usersRouter = require('./router/usersRouter');
app.use('/', usersRouter);

//Express listen
app.listen(8080, ()=> console.log('Express now is listening at port 8080 successfully'));