const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

/**
 * @swagger
 * definitions:
 *      Task:
 *          properties:
 *              title:
 *                  type: string
 *              description:
 *                  type: string
 */

/**
 * @swagger
 * /tasks:
 *      get:
 *          tags:
 *              - Tasks
 *          description: Returns all tasks
 *          produces:
 *              - application/json
 *          responses:
 *              200:
 *                  description: An array of tasks
 */

router.get('/', taskController.tasks);

/**
 * @swagger
 * /tasks/{id}:
 *      get:
 *          tags:
 *              - Tasks
 *          description: Returns a single task
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: id
 *                description: Task Id
 *                in: path
 *                required: true
 *                type: string
 *          responses:
 *              200:
 *                  description: A single Task
 */

router.get('/:id', taskController.task);

/**
 * @swagger
 * /tasks:
 *      post:
 *          tags:
 *              - Tasks
 *          description: Create a new Task
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: task
 *                description: Task Object
 *                in: body
 *                required: true
 *          responses:
 *              200:
 *                  description: A single Task Created
 */

router.post('/', taskController.newTask);

/**
 * @swagger
 * /tasks/{id}:
 *      put:
 *          tags:
 *              - Tasks
 *          description: Update a single task
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: Taks
 *                description: Fields for the Task resource
 *                in: body
 *                required: true
 *          responses:
 *              200:
 *                  description: A single Task Updated
 */

router.put('/:id', taskController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *      delete:
 *          tags:
 *              - Tasks
 *          description: Deletes a single task
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: id
 *                description: Task id
 *                in: path
 *                required: true
 *                type: integer
 *          responses:
 *              200:
 *                  description: Task Deleted
 */

router.delete('/:id', taskController.deleteTask);

module.exports = router;