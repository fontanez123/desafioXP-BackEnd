const express = require('express');
const transacoesAtivos = require('../controllers/transacoesAtivos');

const validacaoComprar = require('../middlewares/validacaoComprar');
const validacaoQtdeAtivos = require('../middlewares/validacaoQtdeAtivos');

const router = express.Router();

router.post('/comprar',
 validacaoComprar,
 validacaoQtdeAtivos,
 transacoesAtivos.comprarAtivos
);

module.exports = router;