const express = require('express');
const transacoesAtivos = require('../controllers/transacoesAtivos');

const validacaoComprar = require('../middlewares/validacaoComprar');

const router = express.Router();

router.post('/comprar', validacaoComprar, transacoesAtivos.comprarAtivos);

module.exports = router;