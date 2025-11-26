const express = require("express");
const router= express.Router();
const branchController = require("../controllers/branch.controller.js");


router.get("/", branchController.getAll);

router.get("/:id", branchController.getById)

router.post('/', branchController.create);

module.exports = router;