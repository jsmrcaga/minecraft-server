const child_process = require('child_process');

class Commands {
	constructor({ screen_name='minecraft' } = {}) {
		this.screen_name = screen_name;
	}

	exec(command) {
		const screen_command = `screen -S ${this.screen_name} -X stuff "${command}\\n"`;
		child_process.execSync(screen_command);
	}
}

module.exports = Commands;
