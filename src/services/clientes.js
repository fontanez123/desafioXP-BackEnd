const clientesModel = require('../models/clientes');
const { generateJWTTOKEN } = require('../utils/token');

const getById = (id) => clientesModel.getById(id);

const login = async ({ email, senha }) => {
  await clientesModel.login(email, senha);

  const token = generateJWTTOKEN({ email });
  return { token };
};

const novoCliente = ({ nome, email, senha }) => clientesModel
  .novoCliente(nome, email, senha);

module.exports = {
  getById,
  login,
  novoCliente,
};
