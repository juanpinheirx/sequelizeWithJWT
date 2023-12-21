const jwt = require('./token');

const validToken = (req, res, next) => {
  const authorized = req.headers.authorization;

  if (!authorized) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorized.split(' ')[1];

  try {
    const { id, email } = jwt.decodeJwtToken(token);
    res.locals = { id, email };
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validToken;
