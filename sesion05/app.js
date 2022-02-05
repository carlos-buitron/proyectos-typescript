// Funcion anonima autoinvocada
(function () {
    function activar(quien, objeto, momento) {
        if (objeto === void 0) { objeto = "batiseñal"; }
        console.log(quien + " activo la " + objeto + " en la " + momento);
    }
    activar("Gordon", "batiseñal", "mañana");
    // Usando argumento opcional "?"
    function desactivar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = "batiseñal"; }
        if (momento) {
            console.log(quien + " desactivo la " + objeto + " en la " + momento);
        }
        else {
            console.log(quien + " activo la " + objeto);
        }
    }
    desactivar("Gordon", "tarde", "bomba");
    desactivar("Batman", "tarde");
    desactivar("Robbin", "");
    desactivar("Robbin");
})();
