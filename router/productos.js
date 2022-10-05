
const express = require('express');
const router = express.router();


router.get("/productos", async (req, res) => {
    const data = await DB.getAllProduct();
    return res.send(data);
  });
  
  router.get("/api/productos/:id", async (req, res) => {
    const { id } = req.query;
    try {
      const data = await DB.getProductById(id);
  
      return res.send(data);
    } catch (e) {
      return res.status(404).send({ error: true, msg: 'producto no encontrado' });
    }
  });
  
  router.post("/api/productos", async (req, res) => {
    const { nombre, precio } = req.body;
  
    const data = await DB.agregarProducto({ nombre, precio });
    return res.send({ error: false, msg: "Producto agregado" });
  });
  
  
  router.put('/api/productos/:id',(req, res) =>{
    const { id } = req.body
    res.send(data)
  
  })
  
  router.delete('/api/productos/:id', (req, res) =>{
  id == req.params.id
  })


module.exports = router;