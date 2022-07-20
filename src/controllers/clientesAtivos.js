const clientesAtivosService = require('../services/clientesAtivos');

const clienteAtivos = async (req, res) => {
  const { idCliente } = req.params;
  const carteiraCliente = await clientesAtivosService.clienteAtivos(idCliente);

  return res.status(200).json(carteiraCliente);
};

module.exports = {
  clienteAtivos,
};
