var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = Schema
({
  	title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    user: { type: Schema.ObjectId, ref: "User" }    
},
{
     timestamps: 
     {
         createdAt: 'created_at',
         updatedAt: 'updated_at'
     }
});

module.exports = mongoose.model('Task', TaskSchema);