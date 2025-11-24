const productRepository = require('../repositories/product.repository');

class ProductService {
    async getAllProducts() {
        // Aquí podrías agregar lógica de negocio extra si fuera necesario
        // Por ejemplo: filtrar productos inactivos, formatear precios, etc.
        return await productRepository.findAll();
    }

    async getProductById(id) {
        if (!id) {
            throw new Error('El ID del producto es requerido');
        }
        const product = await productRepository.findById(id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    async createProduct(data) {
        // Validaciones de negocio antes de guardar
        if (data.price < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        if (!data.name) {
            throw new Error('El nombre es obligatorio');
        }

        return await productRepository.create(data);
    }

    async deleteProduct(id) {
        if (!id) {
            throw new Error('El ID del producto es requerido');
        }

        const deleted = await productRepository.delete(id);

        if (!deleted) {
            throw new Error('Producto no encontrado para eliminar');
        }

        return true;
    }
}

module.exports = new ProductService();
