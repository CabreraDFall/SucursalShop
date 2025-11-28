const express = require('express');
const router = express.Router();
const sellController = require('../controllers/sell.controller');

router.get('/', sellController.getAll);
router.get('/:id', sellController.getById);
router.post('/', sellController.create);

module.exports = router;
