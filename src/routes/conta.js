const express = require('express');
const clientes = require('../controllers/clientes');
const transacoesConta = require('../controllers/transacoesConta');
const router = express.Router();

router.get('/:id', clientes.getById);
router.post('/deposito', transacoesConta.deposito);

module.exports = router;