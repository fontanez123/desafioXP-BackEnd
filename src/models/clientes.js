const connection = require('./connection');

const getById = async (id) => {
  const [cliente] = await connection.execute('SELECT id, nome, saldo FROM clientes WHERE id = ?;', [id]);

  return cliente[0];
};

const findByEmail = async (email) => {
  const [cliente] = await connection.execute('SELECT * FROM clientes WHERE email = ?;', [email]);

  return cliente;
};

const novoCliente = async (nome, email, senha) => {
  const [criar] = await connection.execute(`INSERT INTO clientes(nome, email, senha)
    VALUES (?, ?, ?);`, [nome, email, senha]);

  return {
    id: criar.insertId,
    nome,
    email,
  };
};

const login = async (email, senha) => {
  const [cliente] = await connection.execute(`SELECT email, senha FROM clientes
   WHERE email = ? AND senha = ?;`, [email, senha]);

  return cliente[0];
};

const aumentarSaldo = async (id, valor) => {
  await connection.execute(`UPDATE clientes SET saldo = saldo + ?
    WHERE id = ?;`, [valor, id]);
};

const diminuirSaldo = async (id, valor) => {
  await connection.execute(`UPDATE clientes SET saldo = saldo - ?
    WHERE id = ?;`, [valor, id]);
};

module.exports = {
  getById,
  aumentarSaldo,
  diminuirSaldo,
  login,
  novoCliente,
  findByEmail,
};
