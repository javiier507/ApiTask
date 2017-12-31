const mongoose = require('mongoose');
var User = require('../models/user');

var auth = require('../middlewares/auth');

module.exports = {
    
    index: function(request, response) {
        response.send('index');
    },

    //  USERS

    users: async (request, response) => {
        const users = await User.find({});
        response.status(200).json(users);
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
        response.status(200).json(user);
        
    },

    login: function(request, response) {

        const username = request.body.username;
        const password = request.body.password;

        User.findOne({ username }, (err, document) => {
            if (err) throw err;
        
            if(document)
            {
                document.comparePassword(password, (err, match) => {
                    if (err) throw err;
                    
                    if(match)
                        response.status(200).json({token : auth.getToken(username)});
                    else
                        response.status(400).json('credenciales incorrectas');
                });
            }
            else
            {
                response.status(400).json('credenciales incorrectas');   
            }
        });

    },

    profile : (request, response) => {
        response.status(200).json('Welcome');
    },
}