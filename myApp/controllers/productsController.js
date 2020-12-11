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
              if (requiredProduct == null) {
                res.status(404).send("404 not found. <br> ¡No se encuentra el producto!");
              };
              const toThousand = n => {
                return n
                .toString()
                .replace(".", ",")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              };
              res.render('product-detail', { products: requiredProduct, toThousand: toThousand, });
    }
};

module.exports = product;