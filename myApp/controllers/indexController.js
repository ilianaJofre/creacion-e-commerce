const getProducts = require('../utils/getProducts');
const toThousand = require('../utils/toThousand');

let index = {
    getIndex: function (req,res){
                const products = getProducts();
                res.render('index', { products: products, toThousand: toThousand, });
             }
};
module.exports = index;