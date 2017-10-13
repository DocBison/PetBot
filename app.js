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

client.on('message', message => {
  if (message.content === '@PetBot How are you today?') {
    message.reply('Fine, a bit bored. I wish something exciting would happen...');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Wake up!') {
    message.reply('I *am* awake');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot What is the current HA release?') {
    message.reply('The current release is Beta 4.7');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot SHUT UP!') {
    message.reply('*sniff* Will do...master');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Play my mod') {
    message.reply('I already did.');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot You talk too much') {
    message.reply('I think *you* talk too much!');
  }
});

client.login(process.env.BOT_TOKEN);
