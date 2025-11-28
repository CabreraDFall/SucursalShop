const prisma = require('../db/prisma');

class BranchRepository {
    async findAll() {
        return await prisma.branch.findMany();
    }

    async findById(id) {
        return await prisma.branch.findUnique({
            where: { id: Number(id) }
        });
    }

    async create(data) {
        return await prisma.branch.create({
            data: data
        });
    }

    async delete(id) {
        try {
            await prisma.branch.delete({
                where: { id: Number(id) }
            });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new BranchRepository();
