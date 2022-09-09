const fs = require("fs");

class baseDeDatos {
  constructor(archivo) {
    this.archivo = archivo;
  }

  //*  agregar producto
  async agregarProducto(objProduct) {
    const data = await fs.promises.readFile(
      `${this.archivo}/productos.json`,
      "utf-8"
    );
    const productos = JSON.parse(data);
    const id = productos.length + 1;
    objProduct.id = id;
    productos.push(objProduct);
    const productosString = JSON.stringify(productos);
    await fs.promises.writeFile(
      `${this.archivo}/productos.json`,
      productosString
    );

    return productos;
  }

  //* obtener todos los Productos

  async getAllProduct() {
    try {
      const data = await fs.promises.readFile(
        `${this.archivo}/productos.json`,
        "utf-8"
      );
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
//* id de los productos
  async getProductById(id) {
    const data = await fs.promises.readFile(
      `${this.archivo}/productos.json`,
      "utf-8"
    );
    const productos = JSON.parse(data);
    const producto = productos.find((producto) => producto.id == id);
    if (producto) {
      return producto;
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  
}
async function start() {
  const db = new baseDeDatos("data");
  await db.createProduct({ nombre: "placha", precio: "200" });
  
}
module.exports = baseDeDatos;