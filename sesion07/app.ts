
// Funcion de flecha anonima autoinvocada
(()=>{
	// Desestructuración de Objetos

	const avenger = {
		nombre: "Steve",
		clave: "Capitán América",
		poder: "Fuerza Fisica"
	}

	const {poder} = avenger;

	const {nombre, clave} = avenger;


	// Desestructuracion como argumento de la funcion
	// Cuanso veamos interfaces y clases especificariamos que 
	// tipo de propiedades y metodos vienen dentro de avenger
	const extraerJson = ({nombre, poder}: any) => {
		console.log(nombre, poder);
	};

	extraerJson(avenger);

	// Desestructuración de arreglos
	// Definir una arreglo de tipo string -> let miArray: tipodato[];
	const avengers: string[] = ["Thor", "Ironman", "Spiderman"];
	const [thor, ironman, spiderman] = avengers;

	console.log(thor, ironman, spiderman);

	const extraerArreglo = ([thor, ironman, spiderman]:string[]) => {
		console.log(thor, ironman, spiderman);		
	}

	extraerArreglo(avengers);

})();

