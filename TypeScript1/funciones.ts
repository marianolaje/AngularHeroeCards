function activar(quien:string,
                objeto:string = "batiseñal",
                momento?:string ){
  let mensaje:string;
  if(momento){
    mensaje = `${quien} activó la ${objeto} en ${momento}`
  } else {
    mensaje = `${quien} activó la ${objeto}`
  }
  console.log(mensaje);
}

activar("Gordon")

//funcion de flecha!

let miFuncion = function(a){
  return a;
}

let miFlecha = a => a;

//con varios parametros
let miFuncion2 = function(a:number, b:number){
  return a + b;
}

let miFlecha2 = (a:number, b:number) => a + b;
console.log(miFuncion2(3, 2));
console.log(miFlecha2(3, 2));

//con varias lineas
let miFuncion3 = function( nombre:string ){
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFlecha3 = ( nombre:string ) => {
  nombre = nombre.toUpperCase();
  return nombre;
};


//funciones flecha visualizando la solución del error
let nombreHulkMal = "Pedro";
let hulkMal = {
  nombreHulkMal: "Hulk",
  smashMal(){
    setTimeout( function(){
      console.log(this.nombreHulkMal + " smash!!");
    }, 1500);
  }
}
hulkMal.smashMal();

let nombreHulk = "Pedro";
let hulk = {      //objeto
  nombreHulk: "Hulk",
  smash(){        //funcion
    setTimeout( () => console.log(this.nombreHulk + " smash!!"), 1500);
  }
}
hulk.smash();
