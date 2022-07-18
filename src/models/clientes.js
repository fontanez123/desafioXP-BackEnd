const connection = require('./connection');

const getById = async (id) => {
    const [cliente] = await connection.execute(
      'SELECT id, nome, saldo FROM XPInc.clientes WHERE id = ?;', [id]
    );

    return cliente[0];
}

module.exports = { 
    getById,
};