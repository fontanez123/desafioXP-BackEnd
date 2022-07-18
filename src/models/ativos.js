const connection = require('./connection');

const getAll = async () => {
    const [ativos] = await connection.execute(
      'SELECT * FROM XPInc.ativos;',
    );

    return ativos;
  };

  const getById = async (id) => {
    const [ativo] = await connection.execute(
      'SELECT * FROM XPInc.ativos WHERE id = ?;', [id]
    );

    return ativo[0];
}

module.exports = { 
    getAll,
    getById,
};