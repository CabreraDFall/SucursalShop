const prisma = require('../db/prisma');

class SellDetailRepository {
    async findAll() {
        return await prisma.sellDetail.findMany({
            include: { product: true }
        });
    }

    async findById(id) {
        return await prisma.sellDetail.findUnique({
            where: { id: Number(id) },
            include: { product: true }
        });
    }

    async findBySellId(sellId) {
        return await prisma.sellDetail.findMany({
            where: { sellId: Number(sellId) },
            include: { product: true }
        });
    }

    async create(data) {
        return await prisma.sellDetail.create({
            data: data
        });
    }
}

module.exports = new SellDetailRepository();
