const valorAtivo = require('../utils/valorTotalAtivo');
const clientesModel = require('../models/clientes');

const validacaoComprar = async (req, res, next) => {
    const { idCliente, idAtivo, quantidade } = req.body;
    const { saldo } = await clientesModel.getById(idCliente);
    const valorTotalAtivo = await valorAtivo(idAtivo, quantidade);

    if(valorTotalAtivo > saldo) {
        const message = 'Saldo Insuficiente';
        return res.status(400).json({ message });
    };

    next();
};

module.exports = validacaoComprar;