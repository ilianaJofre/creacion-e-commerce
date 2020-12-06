const fs = require ('fs');

function getProducts(){
    const dbJson = fs.readFileSync(__dirname + "/../db.json",{encoding: 'utf-8'});
    return products = JSON.parse(dbJson);
  }

let index = {
    getIndex: function (req,res){
            const products = getProducts();
            res.render('index', { products: products });
    }
};

module.exports = index;