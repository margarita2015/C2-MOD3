var fs = require('fs'); // importa el modulo file system

if(process.argv.length < 4){
	console.log('Syntax: "node merge.js <destino> <f1> <f2> ... <fn>"'); // el numero de parametros tiene que ser mayor o igual a cuatro
	process.exit(); // finaliza el proceso
}

for(var i=3 ; i<process.argv.length ; i++){ // append iterando con un bucle for
fs.readFile(
	process.argv[i],
	function(err,data){
		fs.appendFile(
			process.argv[2],
			data,
			function (err) {
				if(err) throw err;
				console.log('merge completed');
			}
		);
	});
}