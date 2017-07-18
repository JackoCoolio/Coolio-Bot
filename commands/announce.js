exports.data = {
  cmd: 'announce',
  args: [
    '<text>'
  ],
  desc: 'Announce to @everyone',
  del: true
}
const path = require('path');
let config = require(path.join(__dirname,'..','config.json'));
const chanID = config.announceChannelID;

exports.run = (client, msg, params) => {
  client.channels.get('226877792573325313').sendMessage("@everyone " + params.join(' '));
}
