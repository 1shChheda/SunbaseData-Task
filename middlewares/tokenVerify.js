const axios = require('axios');

const tokenVerify = async (req, res, next) => {
  const accessToken = req.session.accessToken;

  if (!accessToken) {
    // res.status(401).send('Unauthorized');
    return res.redirect('/login');
  }

  req.headers.authorization = `Bearer ${accessToken}`;

  next();
};

module.exports = tokenVerify;