const clientesAtivosModel = require('../models/clientesAtivos');

const clienteAtivos = async (idCliente) => { 
   const arrayClienteAtivos = await clientesAtivosModel.getClienteAtivos(idCliente);
   const filter = arrayClienteAtivos.filter((el) => el.quantidade !== 0);

   return filter;
}

module.exports = {
    clienteAtivos,
};