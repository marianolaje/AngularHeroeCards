let promesa = new Promise (function (resolve, reject){  //obviar este error
  setTimeout( () => {
    console.log("Promesa terminada");
    if(true){
      resolve();
    } else {
      reject();
    }
  }, 1500)
})
console.log("Paso 1");

promesa.then( function(){
  console.log("Ejecutarme cuando se termine bien")
}, function(){
  console.error("Ejecutarme cuando se termine mal")
} )
console.log("Paso 2");
