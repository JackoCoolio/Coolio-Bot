exports.data = {
  cmd: 'sounds',
  args: [
    '[page #]'
  ],
  desc: 'Lists all available sounds.',
  del: true
}


const Discord = require('discord.js');
const fs = require('fs');
const main = require('D:\\cooliobotv2');
//const sounds = main.sounds;
var sounds = [];
let dir = './sounds/';
fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    sounds.push(file);
  });
});
exports.sounds = sounds;
exports.run = (client, msg, params) => {

  // if (params[0] === "all") {
  //   var temp = "";
  //   var i = 0;
  //   var d = false;
  //   console.log(i);
  //   while (!d)  {
  //
  //     if (temp.length + sounds[i].length > 2000) {
  //       msg.author.sendMessage(temp);
  //     } else {
  //       temp += `${i}: ${sounds[i]}`;
  //       i++;
  //     }
  //
  //     if (!sounds[i+1]) {
  //       d = true;
  //     }
  //   }
  //
  //   msg.author.sendMessage(temp);
  //
  //
  // }

  var page = params[0] - 1;
  if (!page) page = 0;
  var totalPages = Math.ceil(sounds.length/25);

  var num = page*25;

  var embed = new Discord.RichEmbed()
  .setTitle(`Page ${page + 1} of ${totalPages}`)
  .setDescription('Use &play <id> [volume] to play a sound.')
  .setColor([132,177,249]);



  for (var i = num; i < num + 25; i++) {
    if (!sounds[i]) {
      console.log('End of list.');
      break;
    };
    embed.addField(`${i}: ${sounds[i]}`, '\u200b');
  }

  msg.reply("check your DMs.");
  msg.author.sendEmbed(embed).then(m => {
    m.react("❌");
  });
}
