const axios = require('axios');

const tokenVerify = async (req, res, next) => {
  const accessToken = req.session.accessToken;

  if (!accessToken) {
    return res.status(401).send('Unauthorized');
  }

  req.headers.authorization = `Bearer ${accessToken}`;

  next();
};

module.exports = tokenVerify;