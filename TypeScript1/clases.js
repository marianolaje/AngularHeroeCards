var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
