const clientesService = require('../services/clientes');

const getById = async (req, res) => {
    const { id } = req.params;
    const cliente = await clientesService.getById(id);

    if(!cliente) return res.status(404).json({ message: 'Esse cliente não foi encontrado' });

    return res.status(200).json(cliente);
}

module.exports = {
    getById,
};