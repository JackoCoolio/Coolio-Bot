exports.data = {
  cmd: 'reload',
  args: [
    '<command>'
  ],
  desc: 'Reloads a command.',
  del: true
}


exports.run = (client, msg, params) => {
  if (!params || params.size < 1) return msg.channel.reply('Please provide a command to reload.');



  if (params[0] === "config") {
    delete require.cache[require.resolve('D:\\cooliobotv2\\config.json')];
    msg.channel.sendMessage('The config has been reloaded.');
    return;
  }
  delete require.cache[require.resolve(`./${params[0]}.js`)];
  msg.channel.sendMessage(`The *${params[0]}* command has been reloaded.`);
  console.log(`${params[0]}.js: Reloaded!`);
}
