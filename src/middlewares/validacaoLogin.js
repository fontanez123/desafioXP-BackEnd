const clientesModel = require('../models/clientes');

const validacaoLogin = async (req, res, next) => {
  const { email, senha } = req.body;
  const usuario = await clientesModel.login(email, senha);

  if (!email || !senha) {
    return res.status(400)
      .json({ message: 'Alguns campos obrigatórios estão faltando' });
  }

  if (!usuario) return res.status(400).json({ message: 'Campos inválidos' });

  return next();
};

module.exports = validacaoLogin;
