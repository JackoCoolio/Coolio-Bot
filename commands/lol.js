exports.data = {
  cmd: 'lol',
  args: [],
  desc: 'Plays laughtrack sound.',
  del: true
}

const playCmd = require('./play.js');

exports.run = (client, msg, params) => {
  playCmd.playFromFile('Laugh Track.mp3',msg.member.voiceChannel, 1);
}
