const { Events } = require('discord.js');

var esql = require('../sevices/elephantsql');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		esql.connect(function(err) {
			if(err) {
			  return console.error('could not connect to postgres', err);
			}
			esql.query('SELECT NOW() AS "theTime"', function(err, result) {
			  if(err) {
				return console.error('error running query', err);
			  }
			  console.log(result.rows[0].theTime);
			  // >> output: 2018-08-23T14:02:57.117Z
			  esql.end();
			});
		});
	},
};