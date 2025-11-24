const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Crear conexión a la base de datos (se creará el archivo database.sqlite en la raíz)
const dbPath = path.resolve(__dirname, '../../database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos SQLite:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

// Inicializar tablas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            category INTEGER,
            stock INTEGER NOT NULL
        )
    `);

    // Aquí puedes agregar más tablas según necesites
    console.log('Tablas inicializadas correctamente.');
});

module.exports = db;
