const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '@PetBot') {
    message.reply('You called?');
  }
});

client.login('368365406223728641');
