const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');

module.exports = function(app)
{
    app.use('/users', userRoutes);
    app.use('/tasks', taskRoutes);   
}