const express = require('express');
const ativos = require('../controllers/ativos');

const router = express.Router();

router.get('/', ativos.getAll);
router.get('/:id', ativos.getById);

module.exports = router;
