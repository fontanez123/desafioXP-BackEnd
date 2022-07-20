const clientesService = require('../services/clientes');
const clientesAtivosService = require('../services/clientesAtivos');

const clienteExiste = async (req, res, next) => {
  const { idCliente } = req.params;
  const cliente = await clientesService.getById(idCliente);
  const message = 'Cliente não encontrado';

  if (!cliente) return res.status(404).json({ message });

  return next();
};

const clientePossuiAtivos = async (req, res, next) => {
  const { idCliente } = req.params;
  const carteiraCliente = await clientesAtivosService.clienteAtivos(idCliente);
  const message = 'Você ainda não possui ativos, realize sua primeira compra!';

  if (carteiraCliente.length === 0) {
    return res.status(400)
      .json({ message });
  }

  return next();
};

module.exports = {
  clienteExiste,
  clientePossuiAtivos,
};
