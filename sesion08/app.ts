
// Funcion de flecha anonima autoinvocada

//import {Promise} from 'es6-promise';
(()=>{
	// Promesas son utilizadas para hacer peticiones web

	console.log("inicio");

	// Paso 1: Primero crear la promesa
	const promesa1 = new Promise((resolve, reject)=> {
		setTimeout(()=>{
			//resolve("Se terminó el timeout");
			reject("Se terminó el timeout");
		}, 2000);
	});

	// Paso 2: LLamar la promesa, la promesa no es un código bloqueante por lo que 
	// pasa a ejecutar las siguientes lineas de código. Dos segundos despues cuando se
	// resuelve el setTimeout se dispara el "then()". Si despues de dos segundos se 
	// rechaza se dispara el "catch()".
	promesa1
		.then(mensaje => console.log(mensaje))
		.catch(error => console.warn(error));

	console.log("fin");
})();

