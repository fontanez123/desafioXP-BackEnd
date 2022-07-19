const connection = require('./connection');

const criaClientesAtivos = async(idCliente, idAtivo, quantidade ) => {
    await connection.execute(
        `INSERT INTO XPInc.clientesAtivos(idCliente, idAtivo, quantidade)
        VALUES (?, ?, ?);`, [idCliente, idAtivo, quantidade]
    );

    return {
        idCliente,
        idAtivo,
        quantidade
    };
};

const existeIdsIguais = async (idCliente, idAtivo) => {
    const [clienteAtivo] = await connection.execute(
        'SELECT * FROM XPInc.clientesAtivos WHERE idCliente = ? AND idAtivo = ?;',
        [idCliente, idAtivo]);

    return clienteAtivo;
};

const aumentaAtivosClientes = async(quantidade, idAtivo) => {
    await connection.execute(
        `UPDATE XPInc.clientesAtivos SET quantidade = quantidade + ?
        WHERE idAtivo = ?;`, [quantidade, idAtivo]
      );
};

module.exports = {
    criaClientesAtivos,
    aumentaAtivosClientes,
    existeIdsIguais,
};