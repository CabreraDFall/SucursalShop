const sellDetailService = require('../services/sellDetail.service');

class SellDetailController {
    async getAll(req, res, next) {
        try {
            const details = await sellDetailService.getAllSellDetails();
            res.json(details);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const detail = await sellDetailService.getSellDetailById(id);
            res.json(detail);
        } catch (error) {
            if (error.message === "Detalle de venta no encontrado") {
                error.status = 404;
            }
            next(error);
        }
    }

    async getBySellId(req, res, next) {
        try {
            const { sellId } = req.params;
            const details = await sellDetailService.getDetailsBySellId(sellId);
            res.json(details);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const newDetail = await sellDetailService.createSellDetail(req.body);
            res.status(201).json(newDetail);
        } catch (error) {
            error.status = 400;
            next(error);
        }
    }
}

module.exports = new SellDetailController();
