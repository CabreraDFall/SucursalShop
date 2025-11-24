const db = require('../db/database');

class ProductRepository {
    findAll() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM products", [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    create(data) {
        return new Promise((resolve, reject) => {
            const { name, price, category, stock } = data;
            const sql = "INSERT INTO products (name, price, category, stock) VALUES (?, ?, ?, ?)";

            db.run(sql, [name, price, category, stock], function (err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, ...data });
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM products WHERE id = ?";
            db.run(sql, [id], function (err) {
                if (err) reject(err);
                // this.changes contiene el número de filas afectadas
                else resolve(this.changes > 0);
            });
        });
    }
}

module.exports = new ProductRepository();
