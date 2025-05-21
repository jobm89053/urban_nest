// server/controllers/AuthController.js
const bcrypt = require('bcrypt');
const Users = require('../models/Users');

exports.register = async (req, res) => {
  try {
    const { login, password } = req.body;

    // Проверка, существует ли пользователь с таким логином
    const existingUser = await Users.findOne({ where: { login } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this login already exists' });
    }

    // Хэширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const newUser = await Users.create({
      login,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};