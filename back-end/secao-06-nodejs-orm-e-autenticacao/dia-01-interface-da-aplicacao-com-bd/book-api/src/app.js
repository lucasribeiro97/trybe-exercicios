const express = require('express');
require('express-async-errors');

const BookController = require('./controllers/book.controller');

const app = express();
app.use(express.json());

app.get('/health/live', (req, res) => res.sendStatus(200));

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookController.create);

app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.send(500).send('Something broke!');
});
module.exports = app;