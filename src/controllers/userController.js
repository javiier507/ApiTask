const mongoose = require('mongoose');
var User = require('../models/user');

var auth = require('../middlewares/auth');

module.exports = {
    
    users: async (request, response) => {
        const users = await User.find({});
        response.status(200).json(users);
    }
}