const connection = require('./connection');

const criaClientesAtivos = async (idCliente, idAtivo, quantidade) => {
  await connection.execute(`INSERT INTO clientesAtivos(idCliente, idAtivo, quantidade)
        VALUES (?, ?, ?);`, [idCliente, idAtivo, quantidade]);

  return {
    idCliente,
    idAtivo,
    quantidade,
  };
};

const getClienteAtivos = async (idCliente) => {
  const [clienteAtivos] = await connection.execute(`SELECT CA.idCliente, CA.idAtivo, CA.quantidade, A.valor
      FROM clientesAtivos AS CA
      INNER JOIN ativos AS A
      ON CA.idAtivo = A.id
      WHERE idCliente = ?
      ORDER BY CA.idAtivo;`, [idCliente]);

  return clienteAtivos;
};

const existeIdsIguais = async (idCliente, idAtivo) => {
  const [clienteAtivo] = await connection.execute(
    'SELECT * FROM clientesAtivos WHERE idCliente = ? AND idAtivo = ?;',
    [idCliente, idAtivo],
  );

  return clienteAtivo;
};

const aumentaAtivosClientes = async (quantidade, idAtivo) => {
  await connection.execute(`UPDATE clientesAtivos SET quantidade = quantidade + ?
        WHERE idAtivo = ?;`, [quantidade, idAtivo]);
};

const diminuiAtivosClientes = async (quantidade, idAtivo) => {
  await connection.execute(`UPDATE clientesAtivos SET quantidade = quantidade - ?
        WHERE idAtivo = ?;`, [quantidade, idAtivo]);
};

module.exports = {
  criaClientesAtivos,
  aumentaAtivosClientes,
  existeIdsIguais,
  getClienteAtivos,
  diminuiAtivosClientes,
};
