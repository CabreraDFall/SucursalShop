const express = require('express');
const productRoutes = require('./routes/product.routes');
const branchRoutes = require("./routes/branch.route");
const sellRoutes = require("./routes/sell.routes");
const sellDetailRoutes = require("./routes/sellDetail.routes");
const errorHandler = require('./middlewares/errorHandler');




const app = express();

// Middleware para entender JSON en el body de las peticiones
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Registrar rutas
app.use('/products', productRoutes);
app.use("/branches", branchRoutes);
app.use("/sells", sellRoutes);
app.use("/sell-details", sellDetailRoutes);

// Middleware de manejo de errores (debe ir al final)
app.use(errorHandler);

module.exports = app;
