const mongoose = require('mongoose');
var Task = require('../models/task');

module.exports = {
    
    newTask : (request, response) => {
        
        var task = new Task({
            title: 		request.body.title,
            description: 	request.body.description,
            user: request.body.user
        });

        task.save().then((document) => {
            response.json(document);
        }).catch((err) => {
            response.json(err);
        });
    },

    tasks : (request, response) => {
        
        Task.find().then((document) => {
            response.send(document);
        }).catch((err) => {
            response.status(500).send('Error');
        });
    },

    task : (request, response) => {

        Task.find({_id: request.params.id}).then((document) => {
            response.send(document);
        }).catch((err) => {
            response.status(500).send('Error');
        });
    },

    updateTask : (request, response) => {
        
        var task = {
            title: 		request.body.title,
            description: 	request.body.description
        };

        Task.findByIdAndUpdate(request.params.id, task).then((document) => {
            response.json(document);
        }).catch((err) => {
            response.json(err);
        });
    },

    deleteTask : (request, response) => {
        
        Task.findByIdAndRemove(request.params.id).then((document) => {
            response.send(document);
        }).catch((err) => {
            response.status(500).send('Error');
        });
    },
}