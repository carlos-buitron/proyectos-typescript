// Funcion de flecha anonima autoinvocada
(function () {
    // Desestructuración de Objetos
    var avenger = {
        nombre: "Steve",
        clave: "Capitán América",
        poder: "Fuerza Fisica"
    };
    var poder = avenger.poder;
    var nombre = avenger.nombre, clave = avenger.clave;
    // Desestructuracion como argumento de la funcion
    // Cuanso veamos interfaces y clases especificariamos que 
    // tipo de propiedades y metodos vienen dentro de avenger
    var extraerJson = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre, poder);
    };
    extraerJson(avenger);
    // Desestructuración de arreglos
    // Definir una arreglo de tipo string -> let miArray: tipodato[];
    var avengers = ["Thor", "Ironman", "Spiderman"];
    var thor = avengers[0], ironman = avengers[1], spiderman = avengers[2];
    console.log(thor, ironman, spiderman);
    var extraerArreglo = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor, ironman, spiderman);
    };
    extraerArreglo(avengers);
})();
