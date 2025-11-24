const PRODUCTS = require('../models/product.model');

class ProductRepository {
    findAll() {
        return PRODUCTS;
    }

    findById(id) {
        return PRODUCTS.find(product => product.id === id);
    }

    create(data) {
        const newProduct = { id: PRODUCTS.length + 1, ...data };
        PRODUCTS.push(newProduct);
        return newProduct;
    }
}

module.exports = new ProductRepository();
