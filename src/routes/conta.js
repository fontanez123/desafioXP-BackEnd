const express = require('express');
const clientes = require('../controllers/clientes');
const router = express.Router();

router.get('/:id', clientes.getById);

module.exports = router;