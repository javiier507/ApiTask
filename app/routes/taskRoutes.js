const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.tasks);
router.get('/task/:id', taskController.task);
router.post('/create', taskController.newTask);
router.put('/update/:id', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;