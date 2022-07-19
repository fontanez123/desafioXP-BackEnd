const clientesAtivosService = require('../services/clientesAtivos');
const clientesService = require('../services/clientes');

const clienteAtivos = async(req, res) => {
    const { idCliente } = req.params;
    const carteiraCliente = await clientesAtivosService.clienteAtivos(idCliente);
    const cliente = await clientesService.getById(idCliente);


    if(!cliente) return res.status(404).json({ message: 'Cliente não encontrado' })
    if(carteiraCliente.length === 0) return res.status(404)
    .json({ message: 'Você ainda não possui ativos, realize sua primeira compra!' })

    return res.status(200).json(carteiraCliente);
};

module.exports = {
    clienteAtivos,
};