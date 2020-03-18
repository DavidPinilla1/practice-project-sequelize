const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

const productsRouter = require('./routes/products.js');
const categoriesRouter = require('./routes/categories.js');
const ordersRouter = require('./routes/orders.js');

app.use(morgan('dev'));
//para evitar req.body sea undefined
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas de categorias
app.use('/categories',categoriesRouter);
//añadimos las rutas de products
app.use('/products',productsRouter);
//añadimos las rutas de orders
app.use('/orders',ordersRouter);

app.listen(PORT,()=>console.log('server running on '+PORT));