const fs = require('fs');
const Discord = require('discord.js');
var cookies = JSON.parse(fs.readFileSync('D:\\cooliobotv2\\cookies.json'));

exports.data = {
  cmd: 'cookies',
  args: [
    '[give|leaderboard]'
  ],
  desc: 'Shows your cookies, gives a cookie, or shows the cookie leaderboards.',
  del: true
}


exports.run = (client, msg, params) => {

  //get author data, bc it is used for everything
  const author = msg.author;
  var authorData = cookies[author.id];
  if (!authorData) authorData = {cookies: 0, givenCookies: 0};

  const members = msg.guild.members;

  if (!params[0]) {
    //output msg authors cookies

    const embed = new Discord.RichEmbed();
    embed.setAuthor(`${author.username}'s Cookies`, 'https://cdn.pixabay.com/photo/2014/04/02/17/06/cookie-307960_960_720.png')
    .setColor([124, 82, 63])
    .addField('\u200b', '\u200b')
    .addField(`Cookies: ${authorData.cookies}`, '\u200b', true)
    .addField(`Given Cookies: ${authorData.givenCookies}`, '\u200b', true);

    msg.channel.sendEmbed(embed);

  } else if (params[0] == 'give') {//if there are params, 0 should say 'give'
    params.shift(); //get rid of 'give', params should be:
    //[0]: target, next its set to pUser


    let pUser = params.join(' '); //name of target

    const target = members.find((user) => { //user object of target

      if (user.user.id == pUser) return user;

      if (user.user.username == pUser) return user;

    }); //now we have target variable

    if (target.id === author.id) return msg.channel.sendMessage('Nice try.');

    if (!target) return msg.channel.sendEmbed(pUser + ' is not a user on this server.'); //make sure that target exists

    var targetData = cookies[target.id];

    if (!targetData) targetData = {cookies: 0, givenCookies: 0};




    //give target cookies
    targetData.cookies++;

    //++ author's given cookies
    authorData.givenCookies++;

    cookies[target.id] = targetData; //update JSON
    cookies[author.id] = authorData;

    fs.writeFile('D:\\cooliobotv2\\cookies.json', JSON.stringify(cookies), () => {
      msg.channel.sendEmbed({
        author: {
          name: 'Cookie Machine',
          icon_url: 'https://cdn.pixabay.com/photo/2014/04/02/17/06/cookie-307960_960_720.png'
        },
        title: `${author.username} gave ${target.user.username} a cookie!`
      });
      target.sendMessage(`Hey ${target.user.username}, ${author.username} just gave you a cookie!`);
    });
    msg.delete();

  } else if (params[0] == 'leaderboard') {
    //show leaderboard
    var board = [];
    var mems = msg.guild.members.array();

    let i=0;
    for (;i < mems.length; i++) {
      console.log(mems[i].user.id);

      let y = 0;
      for (;y< board.length; i++) {

      }
    }



    return msg.channel.sendMessage('Leaderboard is not available right now.');


  }


}
