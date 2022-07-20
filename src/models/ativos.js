const connection = require('./connection');

const getAll = async () => {
  const [ativos] = await connection.execute(
    'SELECT * FROM XPInc.ativos;',
  );

  return ativos;
};

const getById = async (id) => {
  const [ativo] = await connection.execute('SELECT * FROM XPInc.ativos WHERE id = ?;', [id]);

  return ativo[0];
};

const diminuirQtdeDeAtivos = async (id, quantidade) => {
  await connection.execute(`UPDATE XPInc.ativos SET quantidade = quantidade - ?
    WHERE id = ?;`, [quantidade, id]);
};

const aumentarQtdeDeAtivos = async (id, quantidade) => {
  await connection.execute(`UPDATE XPInc.ativos SET quantidade = quantidade + ?
    WHERE id = ?;`, [quantidade, id]);
};

module.exports = {
  getAll,
  getById,
  diminuirQtdeDeAtivos,
  aumentarQtdeDeAtivos,
};
