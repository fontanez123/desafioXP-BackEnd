const clientesAtivosModel = require('../models/clientesAtivos');

const Quantidade = async (req, res, next) => {
  const { idCliente, idAtivo, quantidade } = req.body;
  const arrayClienteAtivo = await clientesAtivosModel.existeIdsIguais(idCliente, idAtivo);

  if (quantidade > arrayClienteAtivo[0].quantidade) {
    const message = 'Quantidade de ativo a ser vendida é maior que a quantidade disponível na carteira';
    return res.status(400).json({ message });
  }

  if (quantidade <= 0) {
    const message = 'A quantidade de ativos não pode ser negativa ou igual a zero.';
    return res.status(400).json({ message });
  }

  if (typeof quantidade !== 'number') {
    const message = 'A quantidade precisa ser um número';
    return res.status(400).json({ message });
  }

  return next();
};

module.exports = {
  Quantidade,
};
