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

/**
 * @swagger
 *   tags:
 *     name: Conta
 *     description: Endpoints de conta
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       ClienteId:
 *         type: object
 *         required:
 *           -id
 *           -nome
 *           -saldo
 *         properties:
 *           id:
 *             type: number
 *           nome:
 *             type: string
 *           saldo:
 *             type: number
 *         example:
 *           id: 4
 *           nome: Lázaro Kabib
 *           saldo: 15000.09
 */

router.post(
  '/',
  validacaoCriarNovoCliente.Nome,
  validacaoCriarNovoCliente.Senha,
  validacaoCriarNovoCliente.Email,
  validacaoCriarNovoCliente.clienteExiste,
  clientes.novoCliente,
);

/**
 * @swagger
 *   /conta/{id}:
 *     get:
 *       tags: [Conta]
 *       description: Endpoint que retorna os dados id, nome e saldo do cliente pelo id
 *       parameters:
 *         - in: path
 *           name: id
 *           type: number
 *           required: true
 *       responses:
 *         200:
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#/components/schemas/ClienteId'
 */
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
