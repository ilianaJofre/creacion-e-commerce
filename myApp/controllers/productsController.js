const getProducts = require('../utils/getProducts');
const toThousand = require('../utils/toThousand');

let product = {
  CreatedProduct: function (req, res) {
    res.render('product-created-form');
  },
  getProduct: function (req,res){
    const products = getProducts();
    const requiredProduct = products.find((prod) => {
        return prod.id == req.params.id;
      });
      if (requiredProduct == null) {
        res.status(404).send("404 not found. <br> ¡No se encuentra el producto!");
      };
      res.render('product-detail', { products: requiredProduct, toThousand: toThousand, });
  },
};
module.exports = product;