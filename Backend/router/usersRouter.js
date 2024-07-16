const usersRouter = require('express').Router();
const Users = require('../controller/userController');

usersRouter.post('/registration', Users.registration);
usersRouter.post('/login', Users.logIn);

module.exports = usersRouter;
