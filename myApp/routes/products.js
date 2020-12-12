const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// router.get("/products, "); Listar todos los productos de db.json
router.get('/created', productsController.CreatedProduct); // Form de creacion de nuevo producto 
router.get('/:id', productsController.getProduct); // Detalle producto + boton de borrar y modificar
// router.put("/edit/:id, "); // Modifica el producto indicado
// router.post("/products/, "); // Recibe datos de creacion del producto 
// router.delete("/products/:id, "); // Elimina el producto indicado 

module.exports = router;