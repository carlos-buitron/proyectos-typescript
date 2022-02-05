
// Funcion anonima autoinvocada
(function(){
	function saludar(nombre:any){
		console.table("Hola " + nombre);
	}

	const wolverine = {
		nombre: "Logan"
	}

	saludar(wolverine.nombre);
})();

