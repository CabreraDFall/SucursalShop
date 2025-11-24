const SELLDETAIL = require('../models/selldetail.model');

class SellDetailRepository {
    findAll() {
        return SELLDETAIL;
    }

    findById(id) {
        return SELLDETAIL.find(detail => detail.id === id);
    }

    findBySellId(sellId) {
        return SELLDETAIL.filter(detail => detail.sellId === sellId);
    }

    create(data) {
        const newDetail = { id: SELLDETAIL.length + 1, ...data };
        SELLDETAIL.push(newDetail);
        return newDetail;
    }
}

module.exports = new SellDetailRepository();
