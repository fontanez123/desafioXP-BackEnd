const connection = require('./connection');

const transacao = async (idCliente, idAtivo, tipo, quantidade) => {
  await connection.execute(`INSERT INTO transacoesAtivos(idCliente, idAtivo, tipo, quantidade)
        VALUES (?, ?, ?, ?);`, [idCliente, idAtivo, tipo, quantidade]);

  return {
    idCliente,
    idAtivo,
    tipo,
    quantidade,
  };
};

module.exports = {
  transacao,
};
