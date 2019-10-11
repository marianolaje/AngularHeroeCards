/*let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga"
}
//desestructurado
let { poder, nombre, clave } = avenger;
//estructurado
let nombreB = avenger.nombre;
let claveB = avenger.clave;
let poderB = avenger.poder

console.log(nombre, clave, poder);
console.log(nombreB, claveB, poderB);
*/

let avengers:string[] = ["Thor", "Steve", "Tony"];
let [thor, capi, ironman] = avengers;
console.log(thor, capi, ironman);
