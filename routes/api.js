const Commands = require('../lib/commands');
const express = require('express');
const api = express.Router();

api.post('/command', (req, res, err) => {
	if(!req.body.command) {
		throw new Error('Command required');
	}

	if(!req.body.command.startsWith('/')) {
		throw new Error('All commands start with the character /');
	}

	let commands = new Commands();
	commands.exec(req.body.command);
});

module.exports = api;
