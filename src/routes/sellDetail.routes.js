const express = require('express');
const router = express.Router();
const sellDetailController = require('../controllers/sellDetail.controller');

router.get('/', sellDetailController.getAll);
router.get('/:id', sellDetailController.getById);
router.get('/sell/:sellId', sellDetailController.getBySellId);
router.post('/', sellDetailController.create);

module.exports = router;
