const { Book } = require('../models');

const getAll = async (req, res) => {
  const { author } = req.query;

  let books;

  if (author) {
    books = await Book.findAll({ where: { author } });
    return books;
  } 
    books = await Book.findAll({
      orderL: [['title', 'ASC']],
    });

  return res.status(200).json(books);
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const update = async (dataBook) => {
  const { id, title, author, pageQuantity, publisher } = dataBook;
  const book = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );

  return book;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });

  return book;
};

const getByAuthor = async (author) => {
  const book = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });

  return book;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
  getByAuthor,
};