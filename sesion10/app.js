// Funcion de flecha anonima autoinvocada
//import {Promise} from 'es6-promise';
(function () {
    /*
    INTERFACES son para Typescript es parecido a una clase que cuenta con reglas que
    cumpla el objeto para utilizarlo como un tipo de dato particular.

    Parametro Objeto xmen de la funcion flecha por lo menos debe de tener una propiedad
    nombre de tipo string -> "xmen: {nombre: string}"
    */
    var enviarMision = function (xmen) {
        console.log("Enviando a " + xmen.nombre + " a la misi\u00F3n");
    };
    var wolverine = {
        nombre: "Logan",
        edad: 50
    };
    enviarMision(wolverine);
    // Con la interfaz puedo decir que xmen es del tipo "Xmen"
    var regresarDeMision = function (xmen) {
        console.log("Enviando a " + xmen + " a la misi\u00F3n");
    };
    // Definido mi interfaz puedo crear mis objetos con ese tipo de dato
    var magneto = {
        nombre: "Erik",
        edad: 60
    };
    regresarDeMision(magneto);
})();
