const sequelize = require("sequelize");

const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    pageQuantity: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'books',
  });

  return Book;
};

module.exports = BookModel;