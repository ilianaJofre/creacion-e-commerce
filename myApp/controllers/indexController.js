const fs = require ('fs');

function getProducts(){
    const dbJson = fs.readFileSync(__dirname + "/../db.json",{encoding: 'utf-8'});
    return products = JSON.parse(dbJson);
  }

let index = {
    getIndex: function (req,res){
                const products = getProducts();
                const toThousand = n => {
                  return n
                  .toString()
                  .replace(".", ",")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                };
                res.render('index', { products: products, toThousand: toThousand, });
             }
};

module.exports = index;