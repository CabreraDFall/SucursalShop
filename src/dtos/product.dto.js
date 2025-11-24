class CreateProductDTO {
    constructor(data) {
        this.name = data.name;
        this.price = Number(data.price);
        this.category = Number(data.category);
        this.stock = Number(data.stock);
    }

    // Método simple para validar si los datos son correctos
    isValid() {
        return (
            this.name && this.name.length > 0 &&
            !isNaN(this.price) && this.price > 0 &&
            !isNaN(this.stock) && this.stock >= 0
        );
    }
}

class ProductResponseDTO {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;      
        this.price = product.price;
        this.category = product.category;
        this.stock = product.stock;
        
}}

module.exports = { CreateProductDTO, ProductResponseDTO };
