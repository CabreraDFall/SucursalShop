const SELL = require('../models/sell.model');

class SellRepository {
    findAll() {
        return SELL;
    }

    findById(id) {
        return SELL.find(sell => sell.id === id);
    }

    create(data) {
        const newSell = { id: SELL.length + 1, ...data };
        SELL.push(newSell);
        return newSell;
    }
}

module.exports = new SellRepository();
