const prisma = require('../db/prisma');

class SellRepository {
    async findAll() {
        return await prisma.sell.findMany({
            include: { branch: true, sellDetails: true }
        });
    }

    async findById(id) {
        return await prisma.sell.findUnique({
            where: { id: Number(id) },
            include: { branch: true, sellDetails: true }
        });
    }

    async create(data) {
        return await prisma.sell.create({
            data: data
        });
    }
}

module.exports = new SellRepository();
