const productos = [
  {nombre:"Laptop",precio:1200},
  {nombre:"Mouse",precio:250},
  {nombre:"Teclado",precio:750 },
  {nombre:"Monitor",precio:3000}
];

console.log(productos.filter(prec => prec.precio > 1000).map(nombreProducto => nombreProducto.nombre));