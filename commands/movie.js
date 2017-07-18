exports.data = {
  cmd: 'movie',
  args: [

  ],
  desc: 'Announces that a movie is starting.',
  del: true
}

const Discord = require('discord.js');

exports.run = (client, msg, params) => {
  const vid = params.join(' ');
  const author = msg.author;

  //send control msg to author
  const statusMsg = new Discord.RichEmbed()
  .setTitle('Grab ur fucking popcorn buckos')
  .setDescription(`We're watching ${vid} in the Movie Theater channel.`);
  client.channels.get('226877792573325313').sendMessage('@everyone');
  client.channels.get('226877792573325313').sendEmbed(statusMsg);





}
