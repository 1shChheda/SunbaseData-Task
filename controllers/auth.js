const axios = require('axios');

const getUserLogin = async (req, res) => {
    res.render('auth/login', {
        pageTitle: 'Login Page',
        path: '/login'
    });
};

const postUserLogin = async (req, res) => {
    const { login_id, password } = req.body;

    try {
        const response = await axios.post('https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
            login_id: login_id,
            password: password
        });

        console.log(response)
        const accessToken = response.data.access_token;
        
        res.redirect('/dashboard');
    } catch (err) {
        console.error('Error authenticating user:', err.response.data);
        // throw err;
        res.redirect('/login');
    }
};

module.exports = {
    getUserLogin: getUserLogin,
    postUserLogin: postUserLogin
};