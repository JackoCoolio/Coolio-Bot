const fs = require('fs'); //used to scan commands folder
const Discord = require('discord.js'); //used for embed to make msg look nice

exports.data = { //data for the help cmd
  cmd: 'help',
  args: [],
  desc: 'Returns this message.',
  del: true
}


var page = 1;
var embed = new Discord.RichEmbed() //starts off the embed
.setTitle(`Page ${page} of Commands`)
.setDescription('&help');



fs.readdir('D:\\cooliobotv2\\commands\\', (err, files) => {

  if (err) return console.error(err);
  files.forEach(file => { //for every file, runs this function with param 'file'


    var data = require(`D:\\cooliobotv2\\commands\\${file}`).data; //gets the data from the cmd, like above 'exports.data'
    let args = data.args.join(' '); //gets args for cmd
    if (!data.hidden) embed.addField(data.cmd + ' ' + args, data.desc); //makes sure that the cmd isn't hidden. if it is, it doesn't add it as entry
    if (embed.fields.length == 25) { //makes sure that embed doesnt reach field limit
      page++;
      msg.channel.sendEmbed(embed).then(m => {
        m.react("❌");
      });
      embed = new Discord.RichEmbed()
      .setTitle(`Page ${page} of Commands`)
      .setDescription('&help');
    }
  });
});

exports.run = (client, msg, params) => {

  //if (!cmds.includes(params[0])) return;


  msg.channel.sendEmbed(embed).then(m => {
    m.react("❌");
  }); //sends the last embed
}
