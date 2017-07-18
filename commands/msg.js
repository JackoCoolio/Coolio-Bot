exports.data = {
  hidden: true,
  cmd: 'msg',
  args: [

  ],
  desc: '...',
  del: true
}

exports.run = (client, msg, params) => {
  msg.channel.sendMessage(params.join(' '));
}
