
// Funcion anonima autoinvocada
(function(){
	
	let mensaje: string = "Hola Carlos";

	let numero: number = 123;

	let arregloPersona: any;

	let activo: boolean = true;

	let fecha: Date = new Date();

	let cualquierCosa: string|number|boolean|Date;

	// Define un objeto spiderman que tiene como tipo las propiedades 
	// de nombre (string) y edad (number). 
	// Typescript respetara el tipo de propiedades cuando asignamos 
	// valores
	let spiderman = {
		nombre: "Peter",
		edad: 30
	}

	/* 
	No es el tipo de dato correcto para spiderman y sus propiedades
	spiderman = "";
	spiderman = {
		nombre: 123,
		edad: "30"
	}*/
	console.log(mensaje);
})();

