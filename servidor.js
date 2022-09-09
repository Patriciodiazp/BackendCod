const express = require('express')
const app = express()

app.use(express.urlencoded());
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hola GeoAPI!');
  });
  
app.get('/productos', (req, res) => res.send('productos'));

app.get('/productos/:id', (req, res) =>{
const { id } = req.query;
res.send(id) 
});

app.post('/api/productos', (req, res) =>{

})

app.put('/api/productos/:id',(req, res) =>{

})

app.delete('/api/productos/:id', (req, res) =>{

})



app.listen(8080,()=>console.log("Server iniciado"))