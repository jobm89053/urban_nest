// server/controllers/ClientController.js
const Clients = require('../models/Clients');

exports.getAllClients = async (req, res) => {
  try {
    // Получаем всех клиентов из базы данных
    const clients = await Clients.findAll();

    // Отправляем данные в ответе
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};