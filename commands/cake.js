exports.data = {
  cmd: 'cake',
  args: [
    '<user>'
  ],
  desc: 'cakes somebody',
  del: true
}
const path = require('path');

const Coolio = require(path.join(__dirname,'..','index.js'));

exports.run = (client, msg, params) => {

  const target = Coolio.findUser(params.join(' '), msg.guild.members);
  const message = Coolio.findMessage(target.lastMessageID, msg.channel.messages);
  message.react('🍰');
  msg.channel.sendMessage(`*caked by ${msg.author.username}*`);

}
