const clientesModel = require('../models/clientes');

const Nome = (req, res, next) => {
  const { nome } = req.body;

  if (nome.length < 8) {
    return res.status(400)
      .json({ message: 'O nome deve ter pelo menos 8 caracteres' });
  }

  return next();
};

const Senha = (req, res, next) => {
  const { senha } = req.body;

  if (senha.length < 6) {
    return res.status(400)
      .json({ message: 'A senha deve ter pelo menos 6 caracteres' });
  }

  return next();
};

const Email = (req, res, next) => {
  const { email } = req.body;
  const validate = /\S+@\S+\.\S+/;

  if (!validate.test(email)) {
    return res.status(400)
      .json({ message: 'O email deve ser um email válido' });
  }

  return next();
};

const clienteExiste = async (req, res, next) => {
  const { email } = req.body;
  const emailV = await clientesModel.findByEmail(email);

  if (emailV.length > 0) return res.status(409).json({ message: 'Usuário já cadastrado' });

  return next();
};

module.exports = {
  Nome,
  Senha,
  Email,
  clienteExiste,
};
