exports.data = {
  cmd: 'stop',
  args: [

  ],
  desc: 'Stops the currently playing sound.',
  del: true
}

exports.run = (client, msg, params) => {
  const chan = msg.member.voiceChannel;

  chan.join().then(connection => {
    const dispatcher = connection.playFile('D:\\cooliobotv2\\sounds\\stop.wav');
  }).catch(console.error);

  chan.leave();
}
