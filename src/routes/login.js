const express = require('express');
const clientes = require('../controllers/clientes');

const validacaoLogin = require('../middlewares/validacaoLogin');

const router = express.Router();

/**
 * @swagger
 *   tags:
 *     name: Login
 *     description: Endpoint de login
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       LoginBody:
 *         type: object
 *         required:
 *           -email
 *           -senha
 *         properties:
 *           email:
 *             type: string
 *           senha:
 *             type: string
 *         example:
 *           email: lazarokabib94@gmail.com
 *           senha: lazaro1234
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       Token:
 *         type: object
 *         required:
 *           -token
 *         properties:
 *           token:
 *             type: string
 *         example:
 *           token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..jYuAOcy6gZd3YOztj9c3FK7x7XmPcSKRArVr1qC-D7
 */

/**
 * @swagger
 *   /login:
 *     post:
 *       tags: [Login]
 *       description: Endpoint retorna um token
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/LoginBody'
 *       responses:
 *         200:
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Token'
 */
router.post('/', validacaoLogin, clientes.login);

module.exports = router;
