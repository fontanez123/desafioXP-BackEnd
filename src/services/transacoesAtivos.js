const transacoesAtivosModel = require('../models/transacoesAtivos');
const ativosModel = require('../models/ativos');
const clientesModel = require('../models/clientes');
const clientesAtivosModel = require('../models/clientesAtivos');
const valorAtivo = require('../utils/valorTotalAtivo');

const comprarAtivos = async ({ idCliente, idAtivo, quantidade }) => {
    const operacao = await transacoesAtivosModel.transacao(idCliente, idAtivo, tipo = 'compra', quantidade);
    const valorTotalAtivo = await valorAtivo(idAtivo, quantidade);
    await clientesModel.diminuirSaldo(idCliente, valorTotalAtivo);
    await ativosModel.diminuirQtdeDeAtivos(idAtivo, quantidade);
    
    const arrayClienteAtivo = await clientesAtivosModel.existeIdsIguais(idCliente, idAtivo);
    if(arrayClienteAtivo.length >= 1) {
        await clientesAtivosModel.aumentaAtivosClientes(quantidade, idAtivo);    
    } else {
        await clientesAtivosModel.criaClientesAtivos(idCliente, idAtivo, quantidade);    
    }

    return operacao;
};

const venderAtivos = async ({ idCliente, idAtivo, quantidade }) => {
    const operacao = await transacoesAtivosModel.transacao(idCliente, idAtivo, tipo = 'venda', quantidade);
    const valorTotalAtivo = await valorAtivo(idAtivo, quantidade);
    await clientesModel.aumentarSaldo(idCliente, valorTotalAtivo);
    await ativosModel.aumentarQtdeDeAtivos(idAtivo, quantidade);

   /*  const arrayClienteAtivo = await clientesAtivosModel.existeIdsIguais(idCliente, idAtivo);
    if(arrayClienteAtivo.length >= 1) {
        await clientesAtivosModel.diminuiAtivosClientes(quantidade, idAtivo);    
    } else {
        await clientesAtivosModel.criaClientesAtivos(idCliente, idAtivo, quantidade);    
    } */
    return operacao;
};

module.exports = {
    comprarAtivos,
    venderAtivos,
};