const { Events } = require('discord.js');
var pg = require('pg');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        if (message.author.bot) return;
        if (!message.content.toLowerCase().startsWith("db$get")) return;

        const args = message.content.split(" ");
        
        if (args.length < 2) return;

        console.log(`${message.author.tag} asked for a db update!`);
        const qry = `SELECT * FROM main_index WHERE id='${args[1]}';`;
        
        var esql = new pg.Client(process.env.esql);
        esql.connect(function(err) {
			if(err) {
			  return console.error('could not connect to postgres', err);
			}
			esql.query(qry, function(err, result) {
			  if(err) {
				return console.error('error running query', err);
			  }

			  console.log('result.rows:', result.rows);
              if (result.rows.length > 0)
                message.reply(result.rows[0].val);
              
			  esql.end();
			});
		});

        message.reply(`Let me look into that for you....`);
    },
};