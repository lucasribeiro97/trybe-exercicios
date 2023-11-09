const express = require('express');
const activities = require('./activities.json');
const auth = require('../middlewares/auth');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');
const generateToken = require('./generateToken');

const app = express();
app.use(express.json());

app.get('/activities', (_req, res) => {
  res.status(200).json(activities);
});

app.post('/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'É necessário preencher todos os campos' });
  }

  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = app;