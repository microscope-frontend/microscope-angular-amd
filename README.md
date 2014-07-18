README
======

AngularJS project template for microscopejs rest API

Requirements
------------

	node.js >= 0.8
	grunt-cli
	npm
	stylus
	bower

Installation
------------

	bower install
	npm install
	grunt debug

Grunt commands
--------------

	grunt move
Move files in ./www folder like assets, bower components and sources code.

	grunt build
Clean ./www folder, execute "move" task, compile stylus (development mode) and concat requirejs, require-config and kernel file to index.js.

	grunt debug
Execute "build" task, run connect http server and watch for stylus, assets or sources file modifications (compile if file change). Expose code documentation.

	grunt production
Compile all files and execute r.js minifier to concat and uglify all application dependencies in one file.
The result is a ready to use production application that can be found in ./build folder.