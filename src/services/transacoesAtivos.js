const transacoesAtivosModel = require('../models/transacoesAtivos');
const ativosModel = require('../models/ativos');
const clientesModel = require('../models/clientes');
const valorAtivo = require('../utils/valorTotalAtivo');

const comprarAtivos = async ({ idCliente, idAtivo, quantidade }) => {
    const operacao = await transacoesAtivosModel.transacao(idCliente, idAtivo, tipo = 'compra', quantidade);
    const valorTotalAtivo = await valorAtivo(idAtivo, quantidade);

    await clientesModel.diminuirSaldo(idCliente, valorTotalAtivo);
    await ativosModel.diminuirQtdeDeAtivos(idAtivo, quantidade);

    return operacao;
};

module.exports = {
    comprarAtivos,
};