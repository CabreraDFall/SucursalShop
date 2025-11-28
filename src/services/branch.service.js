const branchRepository = require("../repositories/branch.repository");

class BranchService {

  async getAllBranches() {
    return await branchRepository.findAll();
  }

  async getBranchById(id) {
    if (!id) {
      throw new Error("El ID del branch es requerido");
    }
    const branch = await branchRepository.findById(id);
    if (!branch) {
      throw new Error("Branch no encontrado");
    }
    return branch;
  }

  async createBranch(data) {

    if (!data.name) {
      throw new Error("El Nombre del branch es requerido");
    }
    return await branchRepository.create(data);
  }

  async deleteBranch(id) {
    if (!id) {
      throw new Error("El ID del branch es requerido");
    }
    const deleted = await branchRepository.delete(id);
    if (!deleted) {
      throw new Error("Branch no encontrado");
    }
    return true;
  }
}

module.exports = new BranchService();
