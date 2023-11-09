const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'O campo name é obrigatório' });
  } else if (name.length <= 4) {
    res.status(400).json({ message: 'O name deve mais de 4 caracteres' });
  }

  next();
};

module.exports = validateName;