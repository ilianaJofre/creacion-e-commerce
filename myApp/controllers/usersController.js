let users = {
    getLogin: function (req,res) {
        res.render('login');
    },
    postLogin: function (req,res) {
        res.redirect('/');
    },
    getRegister: function (req,res) {
        res.render('register');
    },
};

module.exports = users;