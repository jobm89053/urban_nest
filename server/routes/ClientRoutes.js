// server/routes/ClientRoutes.js
const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

// Маршрут для получения всех клиентов
router.get('/clients', ClientController.getAllClients);

module.exports = router;