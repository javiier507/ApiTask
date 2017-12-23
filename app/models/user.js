const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

var User = mongoose.Schema
({
  	firstname: { type: String, required: true },
  	lastname: { type: String, required: true },
  	username: { type: String, required: true, unique: true },
  	email: { type: String, required: true, unique: true },
  	password: { type: String, required: true },
  	image: { type: String, required: false },
},
{
     timestamps: 
     {
         createdAt: 'created_at',
         updatedAt: 'updated_at'
     }
});

User.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
});

User.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

User.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, match) {
        if (err) 
            return callback(err);

        callback(null, match);
    });
};

module.exports = mongoose.model('User', User);