class CreateSellDetailDTO {
    constructor(data) {
        this.sellId = Number(data.sellId);
        this.productId = Number(data.productId);
        this.quantity = Number(data.quantity);
        this.price = Number(data.price);
        this.subtotal = Number(data.quantity * data.price);

    }
    isValid() {
        return (
            !isNaN(this.sellId) && this.sellId > 0 &&
            !isNaN(this.productId) && this.productId > 0 &&
            !isNaN(this.quantity) && this.quantity > 0 &&
            !isNaN(this.price) && this.price >= 0
        );
    }
}

class SellDetailResponseDTO {
    constructor(sellDetail) {
        this.id = sellDetail.id;
        this.sellId = sellDetail.sellId;
        this.productId = sellDetail.productId;
        this.quantity = Number(sellDetail.quantity);
        this.price = Number(sellDetail.price);
        this.subtotal = Number(sellDetail.quantity * sellDetail.price);
    }

}

module.exports = { CreateSellDetailDTO, SellDetailResponseDTO };
