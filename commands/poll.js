exports.data = {
  cmd: 'poll',
  args: [
    '<name>',
    '<options>'
  ],
  desc: 'Starts a poll. Example: &poll Favorite Food?|Cake|Pizza|Ice Cream',
  del: true
}

exports.run = (client, msg, params) => {

  if (params.length < 3) return msg.channel.sendMessage('Please specify at least '
  )
  const bubbles = ['🇦','🇧','🇨','🇩'];
  const alphabet = ['A','B','C','D'];

  var sep = params.join(' ').split('|');
  const name = sep.shift();
  const author = msg.author.username;
  const options = sep;
  const opLength = options.length;
  var voteMsg;

  msg.channel.sendMessage(`**POLL**: *${name}* by *${author}*`);
  for (var i = 0; i < opLength; i++) {

    let emIndex = i;
    msg.channel.sendMessage(`**Option ${alphabet[i]}**: *${options[i]}*`);
  }
  msg.channel.sendMessage('**Vote**:').then(vote => {
    voteMsg = vote;
    for (var i = opLength-1; i >= 0; i--) {
      let ind = i;
      vote.react(bubbles[ind]);
    }
  }).catch(console.error);

  console.log(voteMsg);
}
