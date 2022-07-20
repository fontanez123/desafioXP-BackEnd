const ativosModel = require('../models/ativos');

const valorAtivo = async (idAtivo, quantidade) => {
  const ativo = await ativosModel.getById(idAtivo);
  const valorTotalAtivo = +ativo.valor * quantidade;

  return valorTotalAtivo;
};

module.exports = valorAtivo;
