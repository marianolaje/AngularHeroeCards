interface XmenI{
  nombre:string,
  poder:string
}
function enviarMision( xmen:XmenI){
  console.log("Enviando a: " + xmen.nombre)
};
let wolverineA:XmenI = {
  nombre: "Wolverine",
  poder: "Garras"
};
enviarMision(wolverineA);
