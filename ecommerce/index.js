const mongoose = require('mongoose')
const { Schema } = mongoose;
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//conecto a la base online de mongo
mongoose.connect('mongodb+srv://<USERNAME>:<PASSWORD>@seminariomongo.3kja9.mongodb.net/ecommerce?retryWrites=true&w=majority', {useNewUrlParser: true});

const Productos = mongoose.model('productos', new Schema({
    nombre: String, detalle: String, precio: Number, stock: Number }));
const Ventas = mongoose.model('ventas', new Schema({ productosID: [String], precioTotal: Number, direccion: String }));

//hago el post de producto
app.post('/producto', async (req, res) => {
    const producto = new Productos(req.body);//nuevo producto
    try {
      await producto.save();
      res.send(producto);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//hago el get de productos
app.get('/productos', async (req, res) => {//traigo los productos que tengo
    const productos = await Productos.find({}); //find de productos
    try {
      res.send(productos);
    } catch (err) {
      res.status(500).send(err);
    }
  });








app.listen(3000)