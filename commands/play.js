exports.data = {
  cmd: 'play',
  args: [
    '<url>',
    '[volume]'
  ],
  desc: 'Plays a youtube or soundcloud audio file.',
  del: true
};

const Discord = require('discord.js');
const ytdl = require('ytdl-core');


exports.run = (client, msg, params) => {
  const link = params[0];
  if (!link) return msg.reply('You must provide a link!').then(m => m.delete());


  const stream = ytdl(link,{filter: 'audioonly'});
  let vol = params[1];
  if (!vol) vol = 1;
  const options = {seek: 0, volume: vol};

  const chan = msg.member.voiceChannel;

  if (!stream) return msg.reply('Bad link.').then(m => m.delete());

  chan.join().then(connection => {

    const dispatcher = connection.playStream(stream,options);

  }).catch(console.error);

}
