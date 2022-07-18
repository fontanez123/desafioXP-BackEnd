const connection = require('./connection');

const getAll = async () => {
    const [ativos] = await connection.execute(
      'SELECT * FROM XPInc.ativos;',
    );

    return ativos;
  };

module.exports = { 
    getAll,
};