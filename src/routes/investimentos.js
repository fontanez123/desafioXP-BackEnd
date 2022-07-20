const express = require('express');
const transacoesAtivos = require('../controllers/transacoesAtivos');

const validacaoComprar = require('../middlewares/validacaoComprar');
const validacaoVender = require('../middlewares/validacaoVender');
const validacaoIds = require('../middlewares/validacaoIds');

const router = express.Router();

router.post(
  '/comprar',
  validacaoIds.cliente,
  validacaoIds.ativo,
  validacaoComprar.Saldo,
  validacaoComprar.Quantidade,
  transacoesAtivos.comprarAtivos,
);

router.post(
  '/vender',
  validacaoIds.cliente,
  validacaoIds.ativo,
  validacaoVender.Quantidade,
  transacoesAtivos.venderAtivos,
);

module.exports = router;
