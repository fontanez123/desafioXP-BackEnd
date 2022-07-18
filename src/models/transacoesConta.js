const connection = require('./connection');

const transacao = async (idCliente, tipo, valor ) => {
    const operacao = await connection.execute(
        `INSERT INTO XPInc.transacoesConta(idCliente, tipo, valor)
        VALUES (?, ?, ?);`, [idCliente, tipo, valor]
    );

    return {
        idCliente,
        tipo,
        valor
    };
};

module.exports = {
    transacao,
}