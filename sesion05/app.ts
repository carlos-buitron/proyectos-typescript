
// Funcion anonima autoinvocada
(function(){
	
	function activar(quien:   string,
					 objeto:  string = "batiseñal",
					 momento: string){
		console.log(`${quien} activo la ${objeto} en la ${momento}`);

	}

	activar("Gordon", "batiseñal", "mañana");

	// Usando argumento opcional "?"
	function desactivar( quien:    string,
					     momento?: string,
					     objeto:   string = "batiseñal"){

		if(momento){
			console.log(`${quien} desactivo la ${objeto} en la ${momento}`);
		} else {
			console.log(`${quien} activo la ${objeto}`);
		}
		

	}

	desactivar("Gordon", "tarde", "bomba");
	desactivar("Batman", "tarde");
	desactivar("Robbin", "");
	desactivar("Robbin");

})();

