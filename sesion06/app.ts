
// Funcion anonima autoinvocada
(function(){
	

	let miFuncion1 = function(a: string){
		return a;
	}

	// Funcion tradicional
	function miFuncion2(a: string){
		return a;
	}

	// Definir mi funcion como una constante y de esta manera no puedo sobreescribir la 
	// definicion de mi funcion
	const miFuncion3 = (a: string) => {
		return a.toUpperCase;
	}

	// Si tengo una sola linea de codigo que quiero retornar me ahorra las llaves
	const miFuncion4 = (a: string) => a.toUpperCase;
	const miFuncion5 = a => a.toUpperCase;

	// Funcion de flecha para sumar dos numeros
	const sumarDosNumeros = (a:number, b:number) => a + b;

	// Funcion dentro de un objeto
	const hulk = {
		nombre: "Hulk",
		smash: function(){
			console.log(`${this.nombre} smash!!!`);
		},
		titanicHurl(){
			let vm = this; 
			setTimeout(function(){
				// usamos el scope let vm = this
				console.log(`${this.nombre} titanic hurl!!!`);
				console.log(`${vm.nombre} titanic hurl!!!`);
			}, 2000);
		},
		thunderClap: function(){
			// evitamos el scope let vm = this usando funcion anonima
			setTimeout(() => {
				console.log(`${this.nombre} thunder clap!!!`);
			}, 4000);
		}
	};

	hulk.smash();
	hulk.titanicHurl();
	hulk.thunderClap();

	/*
	Las funciones de flecha no modifica a lo que apunta "this", es decir fuera del 
	setTimeout "this" apunta a "const hulk" y como la funcion de callback del setTimeout es 
	una funcion de flecha significa que "this" sigue apuntando a "const hulk".
	*/
})();

