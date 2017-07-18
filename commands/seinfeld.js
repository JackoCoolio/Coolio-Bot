exports.data = {
  cmd: 'seinfeld',
  args: [],
  desc: 'BA DOOT DOOT DOOT DOOT',
  del: true
}

const player = require('./play.js');

exports.run = (client, msg, params) => {
  player.playFromFile('Seinfeld Theme.mp3', msg.member.voiceChannel, 1);
}
