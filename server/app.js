// server/app.js
const express = require('express');
const sequelize = require('./config/db'); // Подключение к базе данных
const bodyParser = require('body-parser');
const morgan = require('morgan');

 const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Проверка подключения к базе данных
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Простой роутер
app.get('/', (req, res) => {
  res.send('Welcome to Urban Nest API!');
});

app.get('/clients', (req,res)=>{
    res.send('Список клиентов');
});
const userRoutes = require('./routes/UserRoutes');
app.get('/users', userRoutes);

// server/app.js
const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes); // Префикс '/api/auth'

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});