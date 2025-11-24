const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Definición de las rutas CRUD para productos

// GET /products - Obtener todos
router.get('/', productController.getAll);

// GET /products/:id - Obtener uno por ID
router.get('/:id', productController.getById);

// POST /products - Crear uno nuevo
router.post('/', productController.create);

// DELETE /products/:id - Eliminar uno
router.delete('/:id', productController.delete);

// Aquí podrías agregar PUT en el futuro
// router.put('/:id', productController.update);

module.exports = router;
