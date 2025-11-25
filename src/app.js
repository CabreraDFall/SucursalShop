const express = require('express');
const productRoutes = require('./routes/product.routes');
const branchRoutes= require("./routes/branch.route")

const app = express();

// Middleware para entender JSON en el body de las peticiones
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Registrar rutas
app.use('/products', productRoutes);

app.use("/branches", branchRoutes);

module.exports = app;
