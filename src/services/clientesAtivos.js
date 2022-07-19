const clientesAtivosModel = require('../models/clientesAtivos');

const clienteAtivos = (idCliente) => clientesAtivosModel.getClienteAtivos(idCliente);

module.exports = {
    clienteAtivos,
};