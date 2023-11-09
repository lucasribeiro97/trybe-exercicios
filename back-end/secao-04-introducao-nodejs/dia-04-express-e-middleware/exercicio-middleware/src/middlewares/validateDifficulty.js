const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classfications = ['Fácil', 'Médio', 'Difícil'];

  if (!classfications.includes(difficulty)) {
  return res.status(400)
    .json({ message: 'O campo "difficulty" deve ser um desses: "Fácil", "Médio", "Difícil"' });
  }

  next();
};

module.exports = validateDifficulty;