const transacoesAtivosService = require('../services/transacoesAtivos');

const comprarAtivos = async (req, res) => {
  const operacao = await transacoesAtivosService.comprarAtivos(req.body);

  return res.status(201).json(operacao);
};

const venderAtivos = async (req, res) => {
  const operacao = await transacoesAtivosService.venderAtivos(req.body);

  if (operacao.error) {
    return res.status(operacao.error.code)
      .json({ message: operacao.error.message });
  }

  return res.status(201).json(operacao);
};

module.exports = {
  comprarAtivos,
  venderAtivos,
};
