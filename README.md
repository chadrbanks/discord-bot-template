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

6. Don't forget to create your [config.json](https://discordjs.guide/creating-your-bot) from the guide above.

7. You are good to go!

```
Don't forget to update this README!
```

## Development

You can run this service locally using the `yarn start` command.

Please note a few things...

1. Remember to restart this service after every time you make changes.

2. You will want to run `yarn deploy:commands` before restarting the server is you are editing the commands.

3. While running locally be sure to pay attention to the console output.


## Usage

### Commands

These are the 3 example slash commands in the commands examples folder.

| Commands            | Function                                   |
| --------------------| ------------------------------------------ |
| examples/ping.js    | This command just responds with a pong.    |
| examples/server.js  | Reply with server details like user count. |
| examples/user.js    | List or get contact requests.              |

### Events

There are 4 example events in the events folder.

| Events          | Function                                                                           |
| --------------- | ---------------------------------------------------------------------------------- |
| ready.js        | Executes when the bot comes online and is ready.                                   |
| create_embed.js | Send t!embed in chat and the bot replys with an example embed.                     |
| update_embed.js | Listens to a button on the embed, and makes a UI update to the embed when clicked. |
| send_reply.js   | Listens to a button on the embed, and replies in server with a message.            |

## Deployment

TBD

## Environments

| Name | URL |
| ---- | --- |
| Test | TBD |
| Beta | TBD |
| Prod | TBD |
