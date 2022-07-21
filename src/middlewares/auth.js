const { authenticateToken } = require('../utils/token');
const clientesModel = require('../models/clientes');

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
    const decoded = authenticateToken(token);
    req.auth = decoded;
  } catch (e) {
    return res.status(401).json({ message: 'O token expirou ou é inválido' });
  }

  return next();
};

const authIdCliente = async (req, res, next) => {
  const { idCliente } = req.body;
  const { email } = req.auth;
  const cliente = await clientesModel.findByEmail(email);

  if (idCliente !== cliente[0].id) {
    return res.status(401).json({ message: 'Cliente não autorizado' });
  }

  return next();
};

module.exports = {
  auth,
  authIdCliente,
};
