const clientesModel = require('../models/clientes');

const validacaoSaque = async (req, res, next) => {
    const { idCliente, valor } = req.body;
    const cliente = await clientesModel.getById(idCliente);

    if(valor > cliente.saldo) {
        const message = 'Saldo Insuficiente';
        return res.status(400).json({ message });
    }

    if(valor <= 0) {
        const message = 'O valor do saque não pode ser negativo ou igual a zero.';
        return res.status(400).json({ message });
    }

    next();
};

module.exports = validacaoSaque;