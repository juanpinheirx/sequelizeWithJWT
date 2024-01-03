const jwt = require('jsonwebtoken');

const passwordJWT = process.env.JWT_SECRET || 'oin';

const generateJwtToken = (payload) => {
  const token = jwt.sign(payload, passwordJWT, {
    expiresIn: '100m',
  });
  return token;
};

const decodeJwtToken = (token) => jwt.verify(token, passwordJWT);

module.exports = {
  generateJwtToken,
  decodeJwtToken,
};
