const { SellDetailResponseDTO } = require("./sellDetail.dto");

class CreateSellDTO {
    constructor(data) {
        this.branchId = Number(data.branchId);
        this.date = data.date;
        this.status = data.status;
    }

    isValid() {

        return (
            !isNaN(this.branchId) && this.branchId > 0 &&
            this.date && this.date.length > 0 &&
            this.status && this.status.length > 0
        );
    }

}

class SellResponseDTO {
    /**
     * @param {Object} sell - El objeto de venta base (id, fecha, estado)
     * @param {Array} details - El array de detalles crudos de esa venta
     */
    constructor(sell, details = []) {
        this.id = sell.id;
        this.date = sell.date;
        this.status = sell.status;
        this.branchId = sell.branchId;

        // AQUÍ ESTÁ LA MAGIA:
        // Convertimos la lista de datos crudos a una lista de DTOs
        this.details = details.map(d => new SellDetailResponseDTO(d));

        // Calculamos el total sumando los subtotales de la lista 'details'
        // reduce es como un bucle for que va sumando
        this.total = this.details.reduce((sum, item) => sum + item.subtotal, 0);
    }
}

module.exports = { CreateSellDTO, SellResponseDTO }; 