const controller = require('./controller');

module.exports = function(app)
{
    app.get('/', controller.index);

    //  USERS

    app.get('/users', controller.users);

    app.post('/register', controller.register);

    app.get('/test', controller.login);

    //  TAKS

    app.post('/newTask', controller.newTask);

    app.get('/tasks', controller.tasks);

    app.get('/task/:id', controller.task);

    app.put('/update/task/:id', controller.updateTask);

    app.delete('/delete/task/:id', controller.deleteTask);
}