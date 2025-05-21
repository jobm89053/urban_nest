// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Регистрация пользователя
router.post('/register', AuthController.register);

module.exports = router;