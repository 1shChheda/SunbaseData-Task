const tokenVerify = (req, res, next) => {
    const bearerToken = req.session.accessToken;

    if (!bearerToken) {
        res.redirect('/login');
    }

    next();
};

module.exports = tokenVerify;