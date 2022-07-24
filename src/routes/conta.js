const express = require('express');
const clientes = require('../controllers/clientes');
const transacoesConta = require('../controllers/transacoesConta');
const { clienteAtivos } = require('../controllers/clientesAtivos');

const validacaoDeposito = require('../middlewares/validacaoDeposito');
const validacaoSaque = require('../middlewares/validacaoSaque');
const validacaoIds = require('../middlewares/validacaoIds');
const validacaoCliente = require('../middlewares/validacaoCliente');
const validacaoCriarNovoCliente = require('../middlewares/validacaoCriarNovoCliente');
const { auth, authIdCliente } = require('../middlewares/auth');

const router = express.Router();

router.post(
  '/',
  validacaoCriarNovoCliente.Nome,
  validacaoCriarNovoCliente.Senha,
  validacaoCriarNovoCliente.Email,
  validacaoCriarNovoCliente.clienteExiste,
  clientes.novoCliente,
);

router.get('/:id', clientes.getById);

router.get(
  '/ativos/:idCliente',
  validacaoCliente.clienteExiste,
  validacaoCliente.clientePossuiAtivos,
  clienteAtivos,
);

router.post(
  '/deposito',
  auth,
  validacaoIds.cliente,
  authIdCliente,
  validacaoDeposito,
  transacoesConta.deposito,
);

router.post(
  '/saque',
  auth,
  validacaoIds.cliente,
  authIdCliente,
  validacaoSaque,
  transacoesConta.saque,
);

module.exports = router;
