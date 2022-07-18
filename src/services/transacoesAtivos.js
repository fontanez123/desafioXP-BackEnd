const transacoesAtivosModel = require('../models/transacoesAtivos');
const ativosModel = require('../models/ativos');
const clientesModel = require('../models/clientes');

const valorAtivo = async (idAtivo, quantidade) => {
    const ativo = await ativosModel.getById(idAtivo);
    const valorTotalAtivo = +ativo.valor * quantidade;

    return valorTotalAtivo;
};

const comprarAtivos = async ({ idCliente, idAtivo, quantidade }) => {
    const operacao = await transacoesAtivosModel.transacao(idCliente, idAtivo, tipo = 'compra', quantidade);
    const valorTotalAtivo = await valorAtivo(idAtivo, quantidade);

    await clientesModel.diminuirSaldo(idCliente, valorTotalAtivo);

    return operacao;
};

module.exports = {
    comprarAtivos,
    valorAtivo,
};