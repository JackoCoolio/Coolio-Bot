exports.data = {
  cmd: 'play',
  args: [
    '<id>',
    '[volume]'
  ],
  desc: 'Plays a sound with id.',
  del: true
}

const s = require('./sounds.js');
const sounds = s.sounds;
const defVol = require('D:\\cooliobotv2\\config.json').defaultVolume;
const Discord = require('discord.js');
const client = new Discord.Client();

function playFromFile(filename, chan, vol) {
  chan.join().then(connection => {
    const dispatcher = connection.playFile(`./sounds/${filename}`);
    if (vol > 1) {
      console.log('too loud');
      vol = defVol;
    } else if (!vol) {
      vol = defVol;
    } else if (vol < 0) {
      console.log('vol is too low');
      vol = defVol;
    }
    dispatcher.setVolume(vol);
  });
}
exports.playFromFile = playFromFile;


exports.playID = (msg) => {
  var cont = msg.content.split('').splice(1).join('');
  var id = cont.split(' ')[0];
  var vol = cont.split(' ')[1];
  var chan = msg.member.voiceChannel;

  console.log(`Playing ${sounds[id]}`);


  chan.join().then(connection => {
    if (!sounds[id]) return msg.channel.sendMessage(`There is no sound with id ${params[0]}.`);

    historyEmbed(msg.guild.channels, sounds[id], msg);

    const dispatcher = connection.playFile(`./sounds/${sounds[id]}`);

    if (vol > 1) {
      msg.reply("Woah there! That's a bit loud.");
      vol = defVol;
    } else if (vol == null) {
      vol = defVol;
    } else if (vol < 0) {
      msg.reply('I don\'t think that is possible.');
      vol = defVol;
    }
    dispatcher.setVolume(vol);
  });


}

function historyEmbed(channels, s, msg) {
  var historyChannel = channels.get("335501385141583872");
  if (!historyChannel) {
    console.log('No history channel!');
    return;
  }
  var embed = new Discord.RichEmbed()
  .setTitle(s)
  .setDescription(`played by ${msg.author.username}`)
  .setColor(
    [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ]
  );
  historyChannel.sendEmbed(embed);
}

exports.run = (client, msg, params, sData) => {
  var vol = 0;
  const fs = require('fs');

  var id = params[0];
  var vol = params[1];


  var chan = msg.member.voiceChannel;

  // if (sData) {
  //   return chan.join().then(connection => {
  //     var id = sData.id * 1;
  //     if (!sounds[id]) return msg.channel.sendMessage(`There is no sound with id ${sData.id}.`);
  //
  //     historyEmbed(msg.guild.channels);
  //
  //     const dispatcher = connection.playFile(`./sounds/${sounds[id]}`);
  //
  //     if (sData.vol > 1) {
  //       msg.reply("Woah there! That's a bit loud.");
  //       vol = defVol;
  //     } else if (sData.vol == null) {
  //       vol = defVol;
  //     } else {
  //       vol = sData.vol;
  //     }
  //     dispatcher.setVolume(vol);
  //   });
  // }




  chan.join().then(connection => {
    var id = params[0] * 1;
    if (!sounds[id]) return msg.channel.sendMessage(`There is no sound with id ${params[0]}.`);

    historyEmbed(msg.guild.channels, sounds[id], msg);

    const dispatcher = connection.playFile(`./sounds/${sounds[id]}`);

    if (params[1] > 1) {
      msg.reply("Woah there! That's a bit loud.");
      vol = defVol;
    } else if (params[1] == null) {
      vol = defVol;
    } else {
      vol = params[1];
    }
    dispatcher.setVolume(vol);
  });
};
