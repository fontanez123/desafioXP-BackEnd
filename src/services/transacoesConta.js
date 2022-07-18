const clientesModel = require('../models/clientes');
const transacoesContaModel = require('../models/transacoesConta');

const deposito = async({ idCliente, valor }) => {
    const operacao = await transacoesContaModel.deposito(idCliente, tipo = 'deposito', valor);
    await clientesModel.aumentarSaldo(idCliente, valor);

    return operacao;
};

module.exports = {
    deposito,
}