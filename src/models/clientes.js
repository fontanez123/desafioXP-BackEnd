const connection = require('./connection');

const getById = async(id) => {
  const [cliente] = await connection.execute(
    'SELECT id, nome, saldo FROM XPInc.clientes WHERE id = ?;', [id]
    );

  return cliente[0];
};

const login = async(email, senha) => {
  const [cliente] = await connection.execute(
    'SELECT email, senha FROM XPInc.clientes WHERE email = ? AND senha = ?;', [email, senha]
    );

  return cliente[0];
};

const aumentarSaldo = async(id, valor) => {
  await connection.execute(
    `UPDATE XPInc.clientes SET saldo = saldo + ?
    WHERE id = ?;`, [valor, id]
  );
};

const diminuirSaldo = async(id, valor) => {
  await connection.execute(
    `UPDATE XPInc.clientes SET saldo = saldo - ?
    WHERE id = ?;`, [valor, id]
  );
};

module.exports = { 
    getById,
    aumentarSaldo,
    diminuirSaldo,
    login,
};