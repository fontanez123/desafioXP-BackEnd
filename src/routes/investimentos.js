const express = require('express');
const transacoesAtivos = require('../controllers/transacoesAtivos');

const validacaoComprar = require('../middlewares/validacaoComprar');
const validacaoVender = require('../middlewares/validacaoVender');
const validacaoIds = require('../middlewares/validacaoIds');
const { auth, authIdCliente } = require('../middlewares/auth');

const router = express.Router();

router.post(
  '/comprar',
  auth,
  authIdCliente,
  validacaoIds.cliente,
  validacaoIds.ativo,
  validacaoComprar.Saldo,
  validacaoComprar.Quantidade,
  transacoesAtivos.comprarAtivos,
);

router.post(
  '/vender',
  auth,
  authIdCliente,
  validacaoIds.cliente,
  validacaoIds.ativo,
  validacaoVender.Quantidade,
  transacoesAtivos.venderAtivos,
);

module.exports = router;
