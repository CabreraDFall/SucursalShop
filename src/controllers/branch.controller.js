const branchService = require("../services/branch.service");

class BranchController {
  async getAll(req, res, next) {
    try {
      const branch = await branchService.getAllBranches();
      res.json(branch);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const branch = await branchService.getBranchById(id);
      res.json(branch);
    } catch (error) {
      if (error.message === "Branch no encontrado") {
        error.status = 404;
      }
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const newBranch = await branchService.createBranch(req.body);
      res.status(201).json(newBranch);
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await branchService.deleteBranch(id);
      res.status(200).json({ message: "Branch eliminado correctamente" });
    } catch (error) {
      if (error.message === "Branch no encontrado") {
        error.status = 404;
      } else {
        error.status = 400;
      }
      next(error);
    }
  }
}

module.exports = new BranchController();
