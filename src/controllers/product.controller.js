const productService = require('../services/product.service');

class ProductController {
    async getAll(req, res, next) {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const product = await productService.getProductById(id);
            res.json(product);
        } catch (error) {
            if (error.message === 'Producto no encontrado') {
                error.status = 404;
            }
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const newProduct = await productService.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            // Asumimos que si falla aquí es por validación (400)
            error.status = 400;
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await productService.deleteProduct(id);
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            if (error.message === 'Producto no encontrado para eliminar') {
                error.status = 404;
            }
            next(error);
        }
    }
}

module.exports = new ProductController();
