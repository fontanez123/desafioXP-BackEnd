const express = require('express');
const ativos = require('../controllers/ativos');

const router = express.Router();

/**
 * @swagger
 *   tags:
 *     name: Ativos
 *     description: Endpoints de ativos
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       Ativo:
 *         type: object
 *         required:
 *           -id
 *           -nome
 *           -quantidade
 *           -valor
 *         properties:
 *           id:
 *             type: number
 *           nome:
 *             type: string
 *           quantidade:
 *             type: number
 *           valor:
 *             type: string
 *         example:
 *           id: 4
 *           nome: VALE
 *           quantidade: 150
 *           valor: 25.02
 */

/**
 * @swagger
 *   /ativos:
 *     get:
 *       tags: [Ativos]
 *       description: Endpoint retorna uma lista de ativos
 *       responses:
 *         200:
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                 $ref: '#/components/schemas/Ativo'
 */
router.get('/', ativos.getAll);

/**
 * @swagger
 *   /ativos/{id}:
 *     get:
 *       tags: [Ativos]
 *       description: Endpoint que retorna um ativo pelo id
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
 *                 items:
 *                 $ref: '#/components/schemas/Ativo'
 */
router.get('/:id', ativos.getById);

module.exports = router;
