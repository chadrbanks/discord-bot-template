const fs = require('node:fs');
const path = require('node:path');
var CronJob = require('cron').CronJob;
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const token = process.env.token;

// Setup Client
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ], });

// Import Commands
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Import Events
// TODO: Update events to support folders like commands above
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Cron Stuff
const cronPath = path.join(__dirname, 'crons');
const cronFiles = fs.readdirSync(cronPath).filter(file => file.endsWith('.js'));

for (const cronFile of cronFiles) {
	const filePath = path.join(cronPath, cronFile);
	const cron = require(filePath);

	if(cron.name && cron.interval){
		console.log(`Creating Cron Event: ${cron.name}`);
		new CronJob(
			cron.interval,
			function() {
				cron.execute()
			},
			null,
			true,
			'America/Detroit'
		);
	}
}

// Go!
client.login(token);