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
 *             type: string
 *         example:
 *           id: 4
 *           nome: Lázaro Kabib
 *           saldo: 15000.09
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       CarteiraAtivos:
 *         type: object
 *         required:
 *           -idCliente
 *           -idAtivo
 *           -quantidade
 *           -valor
 *         properties:
 *           idCliente:
 *             type: number
 *           idAtivo:
 *             type: number
 *           quantidade:
 *             type: number
 *           valor:
 *             type: string
 *         example:
 *           idCliente: 4
 *           idAtivo: 4
 *           quantidade: 50
 *           valor: 350.20
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       TransacaoBody:
 *         type: object
 *         required:
 *           -idCliente
 *           -valor
 *         properties:
 *           idCliente:
 *             type: number
 *           valor:
 *             type: number
 *         example:
 *           idCliente: 4
 *           valor: 10000
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       Deposito:
 *         type: object
 *         required:
 *           -idCliente
 *           -tipo
 *           -valor
 *         properties:
 *           idCliente:
 *             type: number
 *           tipo:
 *             type: string
 *           valor:
 *             type: number
 *         example:
 *           idCliente: 4
 *           tipo: deposito
 *           valor: 10000
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

/**
 * @swagger
 *   /conta/ativos/{id}:
 *     get:
 *       tags: [Conta]
 *       description: Endpoint que retorna os dados da carteira de ativos do cliente pelo id
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
 *                 type: array
 *                 $ref: '#/components/schemas/CarteiraAtivos'
 */
router.get(
  '/ativos/:idCliente',
  validacaoCliente.clienteExiste,
  validacaoCliente.clientePossuiAtivos,
  clienteAtivos,
);

/**
 * @swagger
 *   /conta/deposito:
 *     post:
 *       tags: [Conta]
 *       description: Endpoint que faz deposito e atualiza saldo do cliente
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/TransacaoBody'
 *       responses:
 *         201:
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Deposito'
 */
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
