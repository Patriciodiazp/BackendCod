const express = require('express')
const app = express()
const productos = []
app.use(express.urlencoded( {extended: true}));
app.use(express.json());
const DB = new db("data");

app.set('views', './views');
app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.get('/hello', (res,req) =>{
  res.prependListener('hello.pug',{mensaje: 'usando pug js en express'});
})
app.get("/productos", async (req, res) => {
  const data = await DB.getAllProduct();
  return res.send(data);
});

app.get("/api/productos/:id", async (req, res) => {
  const { id } = req.query;
  try {
    const data = await DB.getProductById(id);

    return res.send(data);
  } catch (e) {
    return res.status(404).send({ error: true, msg: 'producto no encontrado' });
  }
});

app.post("/api/productos", async (req, res) => {
  const { nombre, precio } = req.body;

  const data = await DB.agregarProducto({ nombre, precio });
  return res.send({ error: false, msg: "Producto agregado" });
});


app.put('/api/productos/:id',(req, res) =>{
  const { id } = req.body
  res.send(data)

})

app.delete('/api/productos/:id', (req, res) =>{
id == req.params.id
})



app.listen(8080,()=>console.log("Server iniciado"))