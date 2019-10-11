let nombre:string = "Mariano";
let apellido:string = "Laje";
let edad:number = 26;

let texto = `Hola ${nombre} ${apellido}, tienes ${edad} anios?`;
console.log(texto);

let operacion = `${ 1 + 2 }`;
console.log(operacion);

function getNombre(nombre:string){
  return nombre
}
let verFuncion = `${ getNombre("Mariano Laje") }`;
console.log(verFuncion);
