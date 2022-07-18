const connection = require('./connection');

const getById = async (id) => {
  const [cliente] = await connection.execute(
    'SELECT id, nome, saldo FROM XPInc.clientes WHERE id = ?;', [id]
    );

  return cliente[0];
};

const aumentarSaldo = async (id, valor) => {
  await connection.execute(
    `UPDATE XPInc.clientes SET saldo = saldo + ?
    WHERE id = ?;`, [valor, id]
  );

};

module.exports = { 
    getById,
    aumentarSaldo,
};