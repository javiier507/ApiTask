const controller = require('./controller');
const auth = require('./middlewares/auth');

module.exports = function(app)
{
    app.get('/', controller.index);

    //  USERS

    app.get('/users', controller.users);

    app.post('/register', controller.register);

    app.post('/login', controller.login);

    app.get('/profile', auth.autenticar, controller.profile);

    //  TAKS

    app.post('/newTask', controller.newTask);

    app.get('/tasks', controller.tasks);

    app.get('/task/:id', controller.task);

    app.put('/update/task/:id', controller.updateTask);

    app.delete('/delete/task/:id', controller.deleteTask);
}