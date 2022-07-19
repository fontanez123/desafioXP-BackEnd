const express = require('express');
const transacoesAtivos = require('../controllers/transacoesAtivos');

const validacaoComprar = require('../middlewares/validacaoComprar');
const validacaoQtdeAtivos = require('../middlewares/validacaoQtdeAtivos');
const validacaoIds = require('../middlewares/validacaoIds');

const router = express.Router();

router.post('/comprar',
validacaoIds.cliente,
validacaoIds.ativo,
validacaoComprar,
validacaoQtdeAtivos,
transacoesAtivos.comprarAtivos
);

module.exports = router;