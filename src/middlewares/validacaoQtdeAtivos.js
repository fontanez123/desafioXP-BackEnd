const ativosModel = require('../models/ativos');

const validacaoQtdeAtivos = async (req, res, next) => {
    const { idAtivo, quantidade } = req.body;
    const ativo = await ativosModel.getById(idAtivo);

    if(quantidade > ativo.quantidade) {
        const message = 'Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora';
        return res.status(400).json({ message });
    };


    next();
};

module.exports = validacaoQtdeAtivos;