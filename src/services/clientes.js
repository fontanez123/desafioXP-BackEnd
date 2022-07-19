const clientesModel = require('../models/clientes');

const getById = (id) => clientesModel.getById(id);

const login = async ({ email, senha }) => {
    const usuario = await clientesModel.login(email, senha);

    return usuario;
};

module.exports = {
    getById,
    login,
};