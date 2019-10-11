//VARIABLES
var mensaje = "hola";
console.log(mensaje)
if (true){
  var mensaje = "adios";
}
console.log(mensaje) //entrega "ADIOS"

//LET
if (true){
  let mensaje = "hola de nuevo!";
}
console.log("no deberia imprimir 'hola de nuevo': " + mensaje) //entrega "ADIOS", ya que LET almacena información solo para ese momento, para ese "scope"

//CONSTANTES
const OPCION = 123;
if (true){
  const OPCION = 456;
  console.log("dentro del scope: " + OPCION) //posee el valor de dentro del SCOPE = 456
}
console.log("global: " + OPCION) //posee el valor de fuera del SCOPE = 123
