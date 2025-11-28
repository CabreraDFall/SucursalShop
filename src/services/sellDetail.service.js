const sellDetailRepository = require('../repositories/sellDetail.repository');

class SellDetailService {
    async getAllSellDetails() {
        return await sellDetailRepository.findAll();
    }

    async getSellDetailById(id) {
        if (!id) throw new Error("El ID del detalle es requerido");
        const detail = await sellDetailRepository.findById(id);
        if (!detail) throw new Error("Detalle de venta no encontrado");
        return detail;
    }

    async getDetailsBySellId(sellId) {
        if (!sellId) throw new Error("El ID de la venta es requerido");
        return await sellDetailRepository.findBySellId(sellId);
    }

    async createSellDetail(data) {
        if (!data.sellId || !data.productId || !data.quantity) {
            throw new Error("Datos incompletos para el detalle de venta");
        }
        return await sellDetailRepository.create(data);
    }
}

module.exports = new SellDetailService();
