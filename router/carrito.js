const express = require('express');
const router = express.router();


const cors = require("cors");

const db = require("./database");
const controllers = require("./controllers");


router.use(cors());
router.use(express.json());

/* POST */
app.post("/carrito", async (req, res) => {
    const { id, timestamp,nombre,descripción,codigo,img,precio,stock } = req.body;
  
    const data = await db.crearCarrito({ id, timestamp,nombre,descripción,codigo,img,precio,stock});
    return res.send({ error: false, msg: "Carrito creado" });
  });
/* GET */
router.get("/products", controllers.getProducts);
router.get("/products-cart", controllers.getProductsCart);

/* POST */
router.post("/products-cart", controllers.addProductCart);

/* PUT */
router.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
router.delete("/products-cart/:productId", controllers.deleteProduct);



module.exports = router;