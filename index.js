const productos = []
app.get('/', (req, res) =>{
  res.render("formulario")
})

app.post('/productos', (req, res)=>{
  const {nombre,  }= req.body

  productos.push({nombre,})
})