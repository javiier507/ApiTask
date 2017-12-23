const mongoose = require('mongoose');
var User = require('./models/user');
var Task = require('./models/task');

module.exports = {
    
    index: function(request, response) {
        response.send('index');
    },

    //  USERS

    users: async (request, response) => {
        const users = await User.find({});
        response.json(users);
    },

    register: async (request, response) => {
        
        const newUser = new User({
            firstname: 		request.body.firstname,
			lastname: 	request.body.lastname,
			username: 	request.body.username,
            email: 		request.body.email,
            password: request.body.password
        });

        const user = await newUser.save();
        response.json(user);
        
    },

    login: function(request, response) {

        User.findOne({ username: 'javiier507' }, function(err, document) {
            if (err) throw err;

            // test a failing password
            document.comparePassword('loremipsum', function(err, match) {
                if (err) throw err;
                console.log('loremipsum:', match);
            });
        
            // test a matching password
            document.comparePassword('ensabanur616', function(err, match) {
                if (err) throw err;
                console.log('ensabanur616:', match);
            });

            response.json(document);
        });

    },

    //  TASKS

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