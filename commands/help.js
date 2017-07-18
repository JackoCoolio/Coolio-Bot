const fs = require('fs'); //used to scan commands folder
const Discord = require('discord.js'); //used for embed to make msg look nice
const path = require('path');

exports.data = { //data for the help cmd
  cmd: 'help',
  args: [],
  desc: 'Returns this message.',
  del: true
}





exports.run = (client, msg, params) => {
  var page = 1;
  if (params[0]) page = params[0];
  var embed = new Discord.RichEmbed() //starts off the embed
  .setTitle(`Page ${page} of Commands`)
  .setDescription('&help');


  var commands = fs.readdirSync(__dirname);
  console.log(commands);
  for (var c in commands) {
    console.log('Now parsing data for command: ' + commands[c]);
    let data = require('./' + commands[c]).data;
    let args = data.args.join(' ');
    if (!data.hidden) embed.addField(data.cmd + ' ' + args, data.desc);
    if (embed.fields.length == 25) {
      page++;
      msg.channel.send(embed).then(m => {
        m.react("❌");
      });
      embed = new Discord.RichEmbed()
      .setTitle(`Page ${page} of Commands`)
      .setDescription('&help');
    }
  }

  console.log(embed);
  msg.channel.send({embed}).then(m => {
    m.react('❌')
  }).catch(
    console.log('Something went wrong with help command!')
  );

  // //if (!cmds.includes(params[0])) return;
  // fs.readdirSync(__dirname, (err, files) => {
  //
  //   if (err) return console.error(err);
  //   if (files)
  //   files.forEach(file => { //for every file, runs this function with param 'file'
  //
  //     console.log(path.join(__dirname,file));
  //     var data = require(path.join(__dirname,file)).data; //gets the data from the cmd, like above 'exports.data'
  //     let args = data.args.join(' '); //gets args for cmd
  //     if (!data.hidden) embed.addField(data.cmd + ' ' + args, data.desc); //makes sure that the cmd isn't hidden. if it is, it doesn't add it as entry
  //     if (embed.fields.length == 25) { //makes sure that embed doesnt reach field limit
  //       page++;
  //       msg.channel.send(embed).then(m => {
  //         m.react("❌");
  //       });
  //       embed = new Discord.RichEmbed()
  //       .setTitle(`Page ${page} of Commands`)
  //       .setDescription('&help');
  //     }
  //   });
  // }
}
