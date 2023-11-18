const getDashboard = async (req, res) => {
    // This will execute only if the bearer token is valid
    res.render('home/dashboard', {
        pageTitle: 'HomePage',
        path: '/dashboard'
    });
};

module.exports ={ 
    getDashboard: getDashboard
}