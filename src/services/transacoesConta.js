const clientesModel = require('../models/clientes');
const transacoesContaModel = require('../models/transacoesConta');

const deposito = async({ idCliente, valor }) => {
    const operacao = await transacoesContaModel.transacao(idCliente, tipo = 'deposito', valor);
    await clientesModel.aumentarSaldo(idCliente, valor);

    return operacao;
};

const saque = async({ idCliente, valor }) => {
    const operacao = await transacoesContaModel.transacao(idCliente, tipo = 'saque', valor);
    await clientesModel.diminuirSaldo(idCliente, valor);

    return operacao;
};

module.exports = {
    deposito,
    saque,
}