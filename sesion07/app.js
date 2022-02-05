// Funcion anonima autoinvocada
(function () {
    var miFuncion1 = function (a) {
        return a;
    };
    // Funcion tradicional
    function miFuncion2(a) {
        return a;
    }
    // Definir mi funcion como una constante y de esta manera no puedo sobreescribir la 
    // definicion de mi funcion
    var miFuncion3 = function (a) {
        return a.toUpperCase;
    };
    // Si tengo una sola linea de codigo que quiero retornar me ahorra las llaves
    var miFuncion4 = function (a) { return a.toUpperCase; };
    var miFuncion5 = function (a) { return a.toUpperCase; };
    // Funcion de flecha para sumar dos numeros
    var sumarDosNumeros = function (a, b) { return a + b; };
    // Funcion dentro de un objeto
    var hulk = {
        nombre: "Hulk",
        smash: function () {
            console.log(this.nombre + " smash!!!");
        },
        titanicHurl: function () {
            var vm = this;
            setTimeout(function () {
                // usamos el scope let vm = this
                console.log(this.nombre + " titanic hurl!!!");
                console.log(vm.nombre + " titanic hurl!!!");
            }, 2000);
        },
        thunderClap: function () {
            var _this = this;
            // evitamos el scope let vm = this usando funcion anonima
            setTimeout(function () {
                console.log(_this.nombre + " thunder clap!!!");
            }, 4000);
        }
    };
    hulk.smash();
    hulk.titanicHurl();
    hulk.thunderClap();
})();
