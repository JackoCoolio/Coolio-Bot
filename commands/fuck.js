exports.data = {
  cmd: 'fuck',
  args: [
    '<person to fuck>'
  ],
  desc: 'Fuck them.',
  del: true
}


exports.run = (client, msg, params) => {

  function getLast(string) {
    var arr = string.split('');
    var last = arr[arr.length - 1];
    console.log(last);
    return last;
  }

  msg.delete();
  var cont = params.join(' ');

  if (getLast(params.join(' ')) !== '.') cont+= '.';
  msg.channel.sendMessage(`**Fuck ${cont}**`);
}
