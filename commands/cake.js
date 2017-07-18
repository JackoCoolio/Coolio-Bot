exports.data = {
  cmd: 'cake',
  args: [
    '<user>'
  ],
  desc: 'cakes somebody',
  del: true
}

const Coolio = require('D:\\cooliobotv2\\index.js');

exports.run = (client, msg, params) => {

  const target = Coolio.findUser(params.join(' '), msg.guild.members);
  const message = Coolio.findMessage(target.lastMessageID, msg.channel.messages);
  message.react('🍰');
  msg.channel.sendMessage(`*caked by ${msg.author.username}*`);

}
