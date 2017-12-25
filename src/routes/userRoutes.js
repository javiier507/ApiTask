const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

router.get('/', userController.users);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', auth.autenticar, userController.profile);

module.exports = router;