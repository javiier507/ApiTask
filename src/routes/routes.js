const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes');

module.exports = function(app)
{
    app.use('/auth', authRoutes);
    app.use('/tasks', taskRoutes);   
    app.use('/users', userRoutes);
}