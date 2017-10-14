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

client.on('message', message => {
  if (message.content === '@PetBot Do an impression of a robot') {
    message.reply('*Beep Boop* I am a robot *Boop Beep*');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot, I am your father') {
    message.reply('NOOOOOOOOOOOOOOOO!');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Hi') {
    message.reply('Hello');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot You suck') {
    message.reply('*Sniff*');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Can I see your source code') {
    message.reply('No way! You want to *copy* my source code?');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot You are a great bot!') {
    message.reply('Thanks!');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Who is the best member of Buzz Team?') {
    message.reply('Colou');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Who is the best member of Donut Team?') {
    message.reply('Kenny Giles');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Who is the best member of Bagel Team?') {
    message.reply('Genny Kiles');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot What is your favourite mod?') {
    message.reply('Sunday Drive, made by @Colou#7755');
  }
});

client.on('message', message => {
  if (message.content === '@PetBot Command List') {
    message.reply('Here is the list of commands I can respond to: ```@PetBot``` ```@PetBot How are you today?``` ```@PetBot Wake up!``` ```@PetBot What is the current HA release?``` ```@PetBot SHUT UP!``` ```@PetBot Play my mod``` ```@PetBot You talk too much``` ```@PetBot Command List``` ```@PetBot Do an impression of a robot``` ```@PetBot, I am your father``` ```@PetBot Hi``` ```@PetBot You suck``` ```@PetBot Can I see your source code?``` ```@PetBot You are a great bot!``` ```@PetBot Who is the best member of Buzz Team?``` ```@PetBot Who is the best member of Donut Team?``` ```@PetBot Who is the best member of Bagel Team?``` ```@PetBot What is your favorite mod?```');
  }
});

client.login(process.env.BOT_TOKEN);
