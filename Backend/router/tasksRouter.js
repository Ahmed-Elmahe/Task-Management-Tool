const tasksRouter = require('express').Router();
const Tasks = require('../controller/tasksController');


tasksRouter.get('/', Tasks.index);

tasksRouter.post('/create', Tasks.create);

tasksRouter.put('/update/:id', Tasks.updateTasks);

tasksRouter.delete('/delete/:id', Tasks.deleteTasks);

module.exports = tasksRouter;