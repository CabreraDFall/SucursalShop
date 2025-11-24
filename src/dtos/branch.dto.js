class CreateBranchDTO {
    constructor(data) {
        this.name = data.name;
        this.address = data.address;
    }
    isValid() {
        return this.name && this.name.length > 0 &&
            this.address && this.address.length > 0;
    }
}

class BranchResponseDTO {
    constructor(Branch) {
        this.id = Branch.id;
        this.name = Branch.name;
        this.address = Branch.address;
    }

}

module.exports = { CreateBranchDTO, BranchResponseDTO };
