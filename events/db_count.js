const { Events } = require('discord.js');
var pg = require('pg');

// const qry = `SELECT 
//                 table_name, 
//                 column_name, 
//                 data_type 
//             FROM 
//                 information_schema.columns
//             WHERE 
//                 table_name = 'main_index';`;
const qry = `SELECT COUNT(*) FROM main_index;`;

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        if (message.author.bot) return;
        if (!message.content.toLowerCase().startsWith("db$count")) return;
        console.log(`${message.author.tag} asked for a db count!`);
        
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
              message.reply(`The count is ${result.rows[0].count}!`);
			  esql.end();
			});
		});

        message.reply(`Let me look into that for you....`);
    },
};