const express = require('express');
const activities = require('./activities.json');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');

const app = express();
app.use(express.json());

app.get('/activities', (_req, res) => {
  res.status(200).json(activities);
});

app.post('/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = app;