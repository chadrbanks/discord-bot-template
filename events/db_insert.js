const { Events } = require('discord.js');
var pg = require('pg');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        if (message.author.bot) return;
        if (!message.content.toLowerCase().startsWith("db$add")) return;

        const args = message.content.split(" ");
        
        if (args.length < 3) return;

        console.log(`${message.author.tag} asked for a db insert!`);
        const qry = `INSERT INTO main_index (id, val) VALUES ('${args[1]}', '${args[2]}');`;
        
        var esql = new pg.Client(process.env.esql);
        esql.connect(function(err) {
			if(err) {
			  return console.error('could not connect to postgres', err);
			}
			esql.query(qry, function(err, result) {
			  if(err) {
				return console.error('error running query', err);
			  }
              
              if (result.rowCount)
                message.reply(`Key created!`);
              
			  esql.end();
			});
		});

        message.reply(`Let me create that for you....`);
    },
};