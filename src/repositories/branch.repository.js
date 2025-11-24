const BRANCH = require('../models/branch.model');

class BranchRepository {
    findAll() {
        return BRANCH;
    }

    findById(id) {
        return BRANCH.find(branch => branch.id === id);
    }

    create(data) {
        const newBranch = { id: BRANCH.length + 1, ...data };
        BRANCH.push(newBranch);
        return newBranch;
    }
}

module.exports = new BranchRepository();
