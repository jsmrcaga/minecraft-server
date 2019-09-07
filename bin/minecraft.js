#!/usr/bin/env node
const argumentate = require('argumentate');
const { options, variables } = argumentate(process.argv.slice(2), {
	p: 'port'
});

const { server } = require('../server');

const { port = 3000 } = options;

server.listen(port, function(err) {
	if(err) {
		console.error(err);
		process.exit(1);
	}

	console.log(`Minecraft server listening on port ${port} !`);
});
