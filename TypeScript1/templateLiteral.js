var nombre = "Mariano";
var apellido = "Laje";
var edad = 26;
var texto = "Hola " + nombre + " " + apellido + ", tienes " + edad + " anios?";
console.log(texto);
var operacion = "" + (1 + 2);
console.log(operacion);
function getNombre(nombre) {
    return nombre;
}
var verFuncion = "" + getNombre("Mariano Laje");
console.log(verFuncion);
