const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.tasks);
router.get('/:id', taskController.task);
router.post('/', taskController.newTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;