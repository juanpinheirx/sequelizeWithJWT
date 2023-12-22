const validateEmail = (email) => /\S+@\S+\.\S+/.test(email); // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

const validateDisplayName = (displayName) => displayName && displayName.length >= 8;
const validatePassword = (password) => password && password.length >= 6;

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (!validateDisplayName(displayName)) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ 
      message: '"email" must be a valid email',
    });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

module.exports = validateUser;