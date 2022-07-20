const express = require('express');
const clientes = require('../controllers/clientes');

const validacaoLogin = require('../middlewares/validacaoLogin');

const router = express.Router();

router.post('/', validacaoLogin, clientes.login);

module.exports = router;
