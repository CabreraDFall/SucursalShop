const sellService = require('../services/sell.service');

class SellController {
    async getAll(req, res, next) {
        try {
            const sells = await sellService.getAllSells();
            res.json(sells);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const sell = await sellService.getSellById(id);
            res.json(sell);
        } catch (error) {
            if (error.message === "Venta no encontrada") {
                error.status = 404;
            }
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const newSell = await sellService.createSell(req.body);
            res.status(201).json(newSell);
        } catch (error) {
            error.status = 400;
            next(error);
        }
    }
}

module.exports = new SellController();
