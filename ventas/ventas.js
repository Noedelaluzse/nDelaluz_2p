const fs = require("fs"); 
fs.readFile("ventas.txt", "utf8", (error, datos) => {
  if (error) {
    console.error("Se ha generado un error al leer el archivo");
  } else {
    const compradores = datos.split("\n");
    console.log('- - - - - - - - - - - - - - -'); 
    console.log(' VENTAS DEL DÍA'); 
    console.log('- - - - - - - - - - - - - - -'); 
    console.log(' Vendedor: Nestor Alonso '); 
    console.log('- - - - - - - - - - - - - - -'); 
    let totalGeneral = 0
    compradores.forEach((comprador) => {
      const compra = comprador.split(","); 
      const cantidad = parseInt(compra[0]);
      const producto = compra[1];
      const precio = parseFloat(compra[2]);  
      const total = cantidad * precio;
      totalGeneral += total
      console.log (` ${cantidad} ${producto} ... $${total.toFixed(2)}`);   
    });  
    console.log('- - - - - - - - - - - - - - -'); 
    console.log(`VENTA TOTAL: $${totalGeneral.toFixed(2)}`); 
    console.log('- - - - - - - - - - - - - - -'); 
  }
});