const ativosModel = require('../models/ativos');

const validacaoQtdeAtivos = async (req, res, next) => {
    const { idAtivo, quantidade } = req.body;
    const ativo = await ativosModel.getById(idAtivo);

    if(quantidade > ativo.quantidade) {
        const message = 'Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora';
        return res.status(400).json({ message });
    };

    if(quantidade <= 0) {
        const message = 'A quantidade de ativos não pode ser negativa ou igual a zero.';
        return res.status(400).json({ message });
    }

    if(typeof quantidade !== 'number') {
        const message = 'A quantidade precisa ser um número';
        return res.status(400).json({ message });
    };


    next();
};

module.exports = validacaoQtdeAtivos;