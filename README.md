# discord-bot-template

![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

This template is made so that you can easily use it to make new discord bots.


## Setup

1. Ensure you have [git](https://git-scm.com) and [yarn](https://yarnpkg.com) installed on your local machine.

2. Use this template repository to create your own project repo.

3. Swap your repo url in this command and clone your repo: `git clone https://github.com/chadrbanks/discord-bot-template.git`.

4. In your local project dir now, install the dependencies using: `yarn install` or just `yarn`.

5. Setup your bot on [Discord.](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

6. Create an .env file on your local like the one below.

7. You are good to go!

```
Don't forget to update this README!
```

## Example .env File

```
token=PASTE_APP_TOKEN_HERE
clientId=PASTE_CLIENT_ID_HERE
guildId=PASTE_GUILD_ID_HERE
esql=PASTE_ELEPHANT_SQL_CONNECTION_STRING_HERE
```

## Development

You can run this service locally using the `yarn start` command.

Please note a few things...

1. Remember to restart this service after every time you make changes.

2. You will want to run `yarn deploy:commands` before restarting the server is you are editing the commands.

3. While running locally be sure to pay attention to the console output.


## Bot Usage

Currently there are examples/support for slash commands, events, and a basic cron implementation.

### Commands

These are the 3 example slash commands in the commands examples folder.

| Commands            | Function                                   |
| --------------------| ------------------------------------------ |
| examples/ping.js    | This command just responds with a pong.    |
| examples/server.js  | Reply with server details like user count. |
| examples/user.js    | List or get contact requests.              |

### Crons

There are 4 example crons in the crons folder, all of these currently just send a log to the console.

| Events                | Function                     |
| --------------------- | ---------------------------- |
| every_minute.js       | Executes every minute.       |
| every_five_minutes.js | Executes every five minutes. |
| every_ten_minutes.js  | Executes every ten minutes.  |
| every_hour.js         | Executes every hour.         |

### Events

There are 4 example events in the events folder.

| Events          | Function                                                                           |
| --------------- | ---------------------------------------------------------------------------------- |
| ready.js        | Executes when the bot comes online and is ready.                                   |
| create_embed.js | Send t!embed in chat and the bot replys with an example embed.                     |
| update_embed.js | Listens to a button on the embed, and makes a UI update to the embed when clicked. |
| send_reply.js   | Listens to a button on the embed, and replies in server with a message.            |
| db_time.js      | Connects to the ELephantSQL db and runs SELECT NOW().                              |
| db_count.js     | Connects to the ELephantSQL db and runs SELECT COUNT(*) FROM main_index.           |
| db_insert.js    | Connects to the ELephantSQL db and runs an INSERT on main_index.                   |
| db_update.js    | Connects to the ELephantSQL db and runs an UPDATE on main_index.                   |
| db_select.js    | Connects to the ELephantSQL db and runs a SELECT on main_index.                    |

## Deployment

The main branch of this template project is tracked and deployed via railway to my server for testing.

### Package Scripts
```
    scripts: {
        "start:prod": "node index.js",
        "start": "node -r dotenv/config index.js",
        "deploy-commands": "node -r dotenv/config deploy-commands.js"
    }
```


#### start:prod

Used by railway to deploy the main branch everytime there is a new commit.

#### start

Available so `yarn start` can run a local dev env.

#### start

Used so `yarn deploy-commands` can locally update the server commands.

## Data

This project now has an instance of ElephantSQL connected to it.

### main_index

I created a main index table using the following query.

```
CREATE TABLE main_index( 
    id VARCHAR(32) NOT NULL,
    val VARCHAR(64) NOT NULL,
    created TIMESTAMP DEFAULT NOW(),
    updated TIMESTAMP DEFAULT NULL,
    CONSTRAINT pk_main_index PRIMARY KEY(id)
)
```