const ativosService = require('../services/ativos');

const getAll = async (_req, res) => {
  const ativos = await ativosService.getAll();

  return res.status(200).json(ativos);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const ativo = await ativosService.getById(id);

  if (!ativo) return res.status(404).json({ message: 'Esse ativo não foi encontrado' });

  return res.status(200).json(ativo);
};

module.exports = {
  getAll,
  getById,
};
