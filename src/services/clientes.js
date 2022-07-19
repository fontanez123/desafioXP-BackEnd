const clientesModel = require('../models/clientes');
const { generateJWTTOKEN } = require('../utils/token');

const getById = (id) => clientesModel.getById(id);

const login = async ({ email, senha }) => {
    await clientesModel.login(email, senha);

    const token = generateJWTTOKEN({ email });
    return { token };
};

module.exports = {
    getById,
    login,
};