const fs = require ('fs');

const getProducts = function getProducts(){
    const dbJson = fs.readFileSync(__dirname + "/../db.json",{encoding: 'utf-8'});
    return products = JSON.parse(dbJson);
  }

module.exports = getProducts;