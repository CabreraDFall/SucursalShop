const branchService = require("../services/branch.service")

class BranchController{
      async getAll(req, res) {
            try {
                const branch = await branchService.getAllBranches();
                res.json(branch);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }

        async getById(req, res) {
                try {
                    const { id } = req.params;
                    const branch = await branchService.getBranchById(id);
                    res.json(branch);
                } catch (error) {
                    if (error.message === 'Branch no encontrado') {
                        res.status(404).json({ error: error.message });
                    } else {
                        res.status(500).json({ error: error.message });
                    }
                }
        }
      }

module.exports= new BranchController();