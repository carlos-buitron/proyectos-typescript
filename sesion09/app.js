// Funcion de flecha anonima autoinvocada
//import {Promise} from 'es6-promise';
(function () {
    /* Crear una funcion retirar dinero que me permita retirar la cantidad de dinero que
     se necesite, considerar el dinero actual alojado en un servidor en un backend y es
     algo que se tiene que procesar de manera sincrona porque se debe de validar esa
     cantidad de dinero, ese balance, entonces este proceso puede demorarse una fraccion
     de segundos pero no seria sincrona, el proceso tiene que ser asincrono entonces
     usamos una promesa.
    */
    var retirarDinero = function (montoRetirar) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            // Proceso
            if (montoRetirar > dineroActual) {
                reject("No hay suficiente fondos");
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(1500)
        .then(function (montoActual) { return console.log("Monto disponible " + montoActual); })["catch"](function (error) { return console.warn(error); });
    console.log("fin");
})();
