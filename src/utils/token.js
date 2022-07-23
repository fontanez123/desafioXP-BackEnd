require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const generateJWTTOKEN = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = (token) => {
  const decoded = jwt.verify(token, SECRET, jwtConfig);

  return decoded;
};

module.exports = {
  generateJWTTOKEN,
  authenticateToken,
};
