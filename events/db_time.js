const { Events } = require('discord.js');
var pg = require('pg');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        if (message.author.bot) return;
        if (!message.content.toLowerCase().startsWith("db$time")) return;
        console.log(`${message.author.tag} asked for the db time!`);
        
        var esql = new pg.Client(process.env.esql);
        esql.connect(function(err) {
			if(err) {
			  return console.error('could not connect to postgres', err);
			}
			esql.query('SELECT NOW() AS "theTime"', function(err, result) {
			  if(err) {
				return console.error('error running query', err);
			  }

			  console.log('result.rows:', result.rows);
              message.reply(`The time is ${result.rows[0].theTime}!`);
			  esql.end();
			});
		});

        message.reply(`Let me look into that for you....`);
    },
};