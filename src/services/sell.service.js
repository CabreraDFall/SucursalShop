const sellRepository = require('../repositories/sell.repository');

class SellService {
    async getAllSells() {
        return await sellRepository.findAll();
    }

    async getSellById(id) {
        if (!id) throw new Error("El ID de la venta es requerido");
        const sell = await sellRepository.findById(id);
        if (!sell) throw new Error("Venta no encontrada");
        return sell;
    }

    async createSell(data) {
        if (!data.branchId) throw new Error("El ID de la sucursal es requerido");
        // Aquí podrías agregar validaciones extra o lógica de negocio
        return await sellRepository.create(data);
    }
}

module.exports = new SellService();
