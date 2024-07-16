//Import data schema
let tasks_model = require('../model/tasksModel');

//functionality
module.exports = {
    //View data
    index: async (req, res) =>{
        try {
            var tasks = await tasks_model.find({});
            res.json({tasks});
        }catch(error) {
            res.json({error});
        }
    },

    //Add more data
    create: async (req, res) => {
        var {title, subtitle, description, dateP, dateE} = req.body;
        const newTask = new tasks_model({
            title: title,
            subtitle: subtitle,
            description: description,
            dateP: dateP,
            dateE: dateE
        });
        try {
            await newTask.save()
            .then(()=> res.json({messagee: 'You have just created a new task'}));
        } catch(error) {
            console.log({messagee: error});
        }
    },

    //Data modification
    updateTasks: async (req, res) => {
        try {
            var id = req.params._id;
            await tasks_model.findByIdAndUpdate(id, {
                description: req.body,
                dateP: req.body,
                dateE: req.body
            }).then(()=> res.json({messagee: 'The Task has just deleted'}));
        } catch(error) {
            return res.json({error});
        }
    },
    
    //Delete data
    deleteTasks: async (req, res) => {
        var id = req.params._id;
        try {
            await tasks_model.findByIdAndDelete(id)
            .then(()=> {return res.json({messagee: 'The Task has just deleted'})}).then(()=> {return res.redirect('/')});        
        } catch(error) {
            return res.json({error});
        }
    }
}