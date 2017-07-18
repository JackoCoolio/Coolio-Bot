exports.data = {
  cmd: 'setgame',
  args: [
    '<game>'
  ],
  desc: 'Sets the game the bot is playing.',
  del: true
}


exports.run = (client, msg, params) => {
  let game = params.join(' ');

  if (!game) return;

  client.user.setGame(game.toString());
};
