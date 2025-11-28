const prisma = require('../db/prisma');

class ProductRepository {
    async findAll() {
        return await prisma.product.findMany();
    }

    async findById(id) {
        return await prisma.product.findUnique({
            where: { id: Number(id) }
        });
    }

    async create(data) {
        return await prisma.product.create({
            data: {
                name: data.name,
                price: data.price,
                category: data.category,
                stock: data.stock
            }
        });
    }

    async delete(id) {
        try {
            await prisma.product.delete({
                where: { id: Number(id) }
            });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new ProductRepository();
