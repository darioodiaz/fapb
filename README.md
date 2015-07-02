# FAPB (Fast Angular Project Bootstrap)
FAPB is a CoC angular front-end architecture that allow quick angular projects in a less a minute.

# Structure
libs: put here all your libraries, also contains a requireJS configurator for scripts paths and other useful scripts
css: style folder
app:
 - appModules: your application modules goes here
 - global: a global module that contains all global scripts (direcives, services, other modules, etc)
 - applicationModules.js: register your new/available modules here
 - controller.js: if you want to have any first controller, put it here
 - states.js: here you must put your menu states with his configuration
 - config.js: the application configuration, you should never edit this file unless you need some more configuration or do somenthing when the app module "run"

 # Generating modules
 module-generator.js: the node scripts that create a new module for your app, to use this scripts just type node module-generator.js MODULE_NAME

 # Module Convention
 When you create a module with module-generator it has the following:

 - controllers: your controllers must goes here
 - states: if you have customStates (over the convention) put here
 - services: your factories/services must goes here
 - views: your html views goes here
 - config.js: the config file of the module (feel free to modify this file)
 - states.js: this file has a state convention inside:
 	* An abstract state with the same name as the module, that allows to FAPB to start the module, resolves data or load other modules (using fapbLoadModule) before.
 	* An [abstract].index state which is the module state entry point

 Follow this state convention to have more clean states.

 # Loading other modules:
 If you need some module before the state or module start, in the state resolve option use: "resolve: fapbLoadModule(MODULE_NAME)" or use inside a regular resolve.

 # FABP Workflow

 - Create a module with module-generator.js
 - Create controllers, services, views, etc in the module folder
 - Go to "app/applicationModules.js" and add this line "factorizator.registerModule("YOUR_MODULE_HERE");" this register the new created module into the app and it's available to use (if you have a menu item, link, o load this module in the app lifecycle)
