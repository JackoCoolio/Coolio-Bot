const Discord = require('discord.js');

exports.data = {
  cmd: 'roll',
  args: [
    '<sides>',
    '[number of die to roll]'
  ],
  desc: 'Roll x y-sided die.',
  del: true
}


exports.run = (client, msg, params) => {

  function roll(sides) {
    let r = Math.floor(Math.random() * (sides));
    if (r < 1) {
      return true;
    } else {
      return false;
    }
  }

  const sides = params[0];
  var rolls = [];
  var number;

  if (!params[1]) {
    number = 1;
  } else {
    number = params[1];
  }

  var su = 0;
  for (var i = 0; i<number; i++) {
    let ro = roll(sides);
    if (ro) su++;
    rolls.push(ro);
  }


  const embed = new Discord.RichEmbed()
  .setTitle('Rolls')
  .setAuthor('Cooliobot', 'https://lh3.ggpht.com/2ZbR3AYxGipGK-7rv7Zvmz2l1rmaaK8_Ncr9jWE7IdIxfI5lmgfIiFPnC5nZZEsqnRWL=w300')
  .setDescription(`You rolled ${number} ${sides}-sided die. ${su} were successful.`);

  msg.channel.sendEmbed(embed);
}
