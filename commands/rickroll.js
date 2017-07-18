exports.data = {
  cmd: 'rickroll',
  args: [
    '<user>'
  ],
  desc: 'Never gonna give you up.',
  del: true
}

const Coolio = require('D:\\cooliobotv2\\index.js');

exports.run = (client, msg, params) => {
  if (params.join(' ') == null) {
        msg.channel.sendMessage("@" + msg.author.username);
        msg.channel.sendMessage("```\nUsage: " + pref + "rickroll <userid>```");
      }
      else {
        var target = Coolio.findUser(params.join(' '), msg.guild.members);
        if (target) {
          var chan = target.voiceChannel;
          chan.join().then(connection => {
              const dispatcher = connection.playFile('D:\\cooliobotv2\\sounds\\rickroll.mp3');

              dispatcher.setVolume(1);
          }).catch(console.error);
        } else {
          message.channel.sendMessage(params.join(' ') + ' is not a user.');
        }
      }
}
