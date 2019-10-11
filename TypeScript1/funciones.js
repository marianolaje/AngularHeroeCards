function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon");
//funcion de flecha!
var miFuncion = function (a) {
    return a;
};
var miFlecha = function (a) { return a; };
//con varios parametros
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFlecha2 = function (a, b) { return a + b; };
console.log(miFuncion2(3, 2));
console.log(miFlecha2(3, 2));
//con varias lineas
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFlecha3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//funciones flecha visualizando la solución del error
var nombreHulkMal = "Pedro";
var hulkMal = {
    nombreHulkMal: "Hulk",
    smashMal: function () {
        setTimeout(function () {
            console.log(this.nombreHulkMal + " smash!!");
        }, 1500);
    }
};
hulkMal.smashMal();
var nombreHulk = "Pedro";
var hulk = {
    nombreHulk: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombreHulk + " smash!!"); }, 1500);
    }
};
hulk.smash();
