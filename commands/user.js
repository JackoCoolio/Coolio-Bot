exports.data = {
  cmd: 'user',
  args: [
    '[user]'
  ],
  desc: 'Gets information about a user on this server.',
  del: true
}

const Coolio = require('D:\\cooliobotv2\\index.js');
const Discord = require('discord.js');

exports.run = (client, msg, params) => {
  var user = msg.author;
  const guild = msg.guild;
  const search = params.join(' ');

  if (params) {
    user = Coolio.findUser(search, guild.members);
  }

  const dat = new Map([
    ['name', user.user.username],
    ['id', user.user.id],
    ['avatar', user.user.displayAvatarURL],
    ['created', user.user.createdAt.toDateString()]
  ]);

  const info = new Discord.RichEmbed()
  .setTitle(`Information about ${user.user.username}`)
  .setDescription(`ID: ${user.user.id}`)
  .addField('Created:', user.user.createdAt.toDateString());



  msg.channel.sendEmbed(info);
}
