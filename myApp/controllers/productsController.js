const fs = require ('fs');

function getProducts(){
    const dbJson = fs.readFileSync(__dirname + "/../db.json",{encoding: 'utf-8'});
    return products = JSON.parse(dbJson);
  }

  let product = {
    getProduct: function (req,res){
            const products = getProducts();
            const requiredProduct = products.find((prod) => {
                return prod.id == req.params.id;
              });
              if (!requiredProduct) {
                res.status(404).send("404 not found. <br> ¡No se encuentra el producto!");
              }
              res.render('product-detail', { product: requiredProduct });
    }
};

module.exports = product;