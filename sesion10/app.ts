
// Funcion de flecha anonima autoinvocada

//import {Promise} from 'es6-promise';
(()=>{
	
	/* 
	INTERFACES son para Typescript es parecido a una clase que cuenta con reglas que 
	cumpla el objeto para utilizarlo como un tipo de dato particular.

	Parametro Objeto xmen de la funcion flecha por lo menos debe de tener una propiedad 
	nombre de tipo string -> "xmen: {nombre: string}"
	*/
	

	interface Xmen {
		nombre: string,
		edad: number,
		poder?: string // Esta propiedad no quiero que sea necesario
	}

	const enviarMision = (xmen: {nombre: string}) => {
		console.log(`Enviando a ${xmen.nombre} a la misión`);
	};

	const wolverine = {
		nombre: "Logan",
		edad: 50
	}

	enviarMision(wolverine);

	// Con la interfaz puedo decir que xmen es del tipo "Xmen"
	const regresarDeMision = (xmen: Xmen) => {
		console.log(`Retornando a ${xmen.nombre} de la misión`);
	};

	// Definido mi interfaz puedo crear mis objetos con ese tipo de dato
	const magneto: Xmen = {
		nombre: "Erik",
		edad: 60
	}

	regresarDeMision(magneto);

})();

