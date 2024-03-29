const clientesService = require('../services/clientes');

const getById = async (req, res) => {
  const { id } = req.params;
  const cliente = await clientesService.getById(id);

  if (!cliente) return res.status(404).json({ message: 'Esse cliente não foi encontrado' });

  return res.status(200).json(cliente);
};

const login = async (req, res) => {
  const usuario = await clientesService.login(req.body);

  return res.status(200).json(usuario);
};

const novoCliente = async (req, res) => {
  const novoUsuario = await clientesService.novoCliente(req.body);

  return res.status(201).json(novoUsuario);
};

module.exports = {
  getById,
  login,
  novoCliente,
};
