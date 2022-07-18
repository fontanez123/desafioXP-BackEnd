const express = require('express');
const transacoesAtivos = require('../controllers/transacoesAtivos');

const router = express.Router();

router.post('/comprar', transacoesAtivos.comprarAtivos);

module.exports = router;