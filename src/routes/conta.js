const express = require('express');
const clientes = require('../controllers/clientes');
const transacoesConta = require('../controllers/transacoesConta');
const { clienteAtivos } = require('../controllers/clientesAtivos');

const validacaoDeposito = require('../middlewares/validacaoDeposito');
const validacaoSaque = require('../middlewares/validacaoSaque');
const validacaoIds = require('../middlewares/validacaoIds');

const router = express.Router();

router.get('/:id', clientes.getById);
router.get('/ativos/:idCliente', clienteAtivos);
router.post('/deposito',
validacaoIds.cliente,
validacaoDeposito,
transacoesConta.deposito
);
router.post('/saque',
validacaoIds.cliente,
validacaoSaque,
transacoesConta.saque
);

module.exports = router;