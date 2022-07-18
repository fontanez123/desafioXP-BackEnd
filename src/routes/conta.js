const express = require('express');
const clientes = require('../controllers/clientes');
const transacoesConta = require('../controllers/transacoesConta');

const validacaoDeposito = require('../middlewares/validacaoDeposito');
const validacaoSaque = require('../middlewares/validacaoSaque');

const router = express.Router();

router.get('/:id', clientes.getById);
router.post('/deposito', validacaoDeposito, transacoesConta.deposito);
router.post('/saque', validacaoSaque, transacoesConta.saque);

module.exports = router;