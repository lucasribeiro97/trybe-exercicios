const validateRating = (req, res, next) => {
  const { rating } = req.body.description;

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'O campo "rating" deve ser um inteiro de 1 à 5' });
  }

  next();
};

module.exports = validateRating;