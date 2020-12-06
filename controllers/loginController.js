const path = require('path');

let login = {
    vista: function (req,res){
            res.sendFile(path.resolve('views/login.html'));
        }
};

module.exports = login;

