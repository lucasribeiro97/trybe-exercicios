const express = require('express');
require('express-async-errors');

const app = express();

app.get('/health/live', (req, res) => res.sendStatus(200));

app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.send(500).send('Something broke!');
});

module.exports = app;