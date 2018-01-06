const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', auth.autenticar, authController.profile);

module.exports = router;