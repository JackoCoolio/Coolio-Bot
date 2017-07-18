exports.data = {
  cmd: 'ping',
  args: [],
  desc: 'Returns "Pong!"',
  del: false
}


exports.run = (client, msg, params) => {
  return msg.channel.sendMessage('Pong!');
};
