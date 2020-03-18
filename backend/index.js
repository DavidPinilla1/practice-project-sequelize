const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

const productsRouter = require('./routes/products.js');
const categoriesRouter = require('./routes/categories.js');

app.use(morgan('dev'));
//para evitar req.body sea undefined
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//añadimos las rutas de products
app.use('/categories',categoriesRouter);
app.use('/products',productsRouter);

app.listen(PORT,()=>console.log('server running on '+PORT));