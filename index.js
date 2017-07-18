const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const prefix = config.prefix;



var sounds = [];
let dir = './sounds/';
fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    sounds.push(file);
  });
});
exports.sounds = sounds;


exports.findUser = (discrim, users) => {
  return users.find(user => {
    if (user.user.id == discrim) return user;
    if (user.user.username == discrim) return user;
  });
}

exports.findMessage = (discrim, messages) => {
  return messages.find(msg => {
    if (msg.id == discrim) return msg;
  });
}



fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split('.')[0];

    client.on(eventName, (...args) => {eventFunction.run(client, ...args)});
  });
});

// client.on('ready', () => {
//   console.log('CoolioBot v2');
// });

client.on('message', (msg) => {
  if (config.react) msg.react(config.reactMsg);
  if (msg.channel.type == 'dm' && msg.author !== client.user) console.log('DM FROM ' + msg.author.username + ': ' + msg.content);

  if (msg.content.startsWith("?")) {
    try {
      let playCmd = require('./commands/play.js');
      playCmd.playID(msg);
      if (playCmd.data.del) msg.delete();
    } catch (err) {
      console.error(err);
    }
  }


  if (!msg.content.startsWith(prefix)) return;





  let command = msg.content.split(' ')[0].slice(config.prefix.length);
  const params = msg.content.split(' ').slice(1);
  const args = params.join(' ');
  const cont = msg.content;

  console.log(msg.author.username + ': ' + cont);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, msg, params);
    if (commandFile.data.del) msg.delete();
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.BOT_TOKEN);
