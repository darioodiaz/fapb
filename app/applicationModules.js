define(["factorizator"], function(factorizator) {
	var constructor = {};
	/* registerModule(name, [options])
		* name: nombre del modulo
		* options (optional): objeto con la configuracion del modulo. Posibles propiedades:
			- customStates: en caso de no seguir la convencion de los futureStates indicar "true" (default: "false")
			- files: en caso de no seguir la convencion, indicar donde estan los archivos (debe ser un array)
			- dependencies: si tiene dependencias externas indicar como array
			- reconfig: si deberia lanzarse el reconfig del modulo o o no
			- rerun: si deberia lanzarse el rerun del modulo o o no
	*/

    factorizator.registerModule("Clientes");

	constructor.init = function($lazyLoad) { factorizator.ready($lazyLoad); };
	return constructor;
});