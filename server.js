const express = require("express");
const cors = require("cors");

const db = require("/database");
const controllers = require("/controllers");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use('/', require('/router/productos'));
app.use('/', require('/router/carrito'));

app.set("view engine", 'ejs');
app.set("view",__dirname + '/views');

app.get('/ ')


app.listen(8080, () => {
  console.log("Server funcionando en el puerto 8080");
  db();
});

