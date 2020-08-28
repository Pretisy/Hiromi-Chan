const Discord = require('discord.js');

const client = new Discord.Client();

const token = "";

const prefix = '~';

client.once('ready', () => {
  console.log('Hiromi-Chan is online!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'Ping') {
    message.channel.send('Pong!');
  }
});

client.login(token);