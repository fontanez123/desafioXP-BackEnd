require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const generateJWTTOKEN = (payload) => jwt.sign(payload, SECRET, jwtConfig);

module.exports = { generateJWTTOKEN };
