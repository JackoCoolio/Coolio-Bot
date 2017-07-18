const fs = require('fs');
const Discord = require('discord.js');
const path = require('path');
var sc = JSON.parse(fs.readFileSync(path.join(__dirname,'..','shortcuts.json')));


exports.data = {
	cmd: 'sc',
	args: [
		'<shortcut|create>'
	],
	desc: 'Replies with shortcut text.',
	del: true
}

exports.run = (client, msg, params) => {
	var opt = params.shift(); console.log(opt);
	var text = params.join(' ');
	if (opt === "create") {

		params.splice(0,1);

		if (!params) return msg.channel.sendMessage('Syntax: &sc create SHORTCUT-->FULL TEXT');

		let p = params.join(' ').split('-->');
		var id = p[0];
		var text = p[1];

		sc[id] = text;

		fs.writeFile(path.join(__dirname,'..','shortcuts.json'), JSON.stringify(sc), () => {
			msg.channel.sendMessage('Shortcut created.');
			msg.channel.sendMessage('You can now use `&sc ' + id + '` to use it.');
		});

	} else if (opt === "list") {

		var embed = new Discord.RichEmbed()
		.setTitle('Shortcuts')
		.setDescription('Use &sc <id>');

		console.log('before');

		for (id in sc) {
			embed.addField(id, sc[id]);
		}
		console.log('after');

		msg.channel.sendEmbed(embed);

	} else {

		if (params.length > 1) return msg.channel.sendMessage('Shortcuts can\'t have spaces. Try again.');

		var id = opt;

		var short = sc[id];

		if (!short) return msg.reply(`${id} is not a shortcut.`);

		msg.channel.sendMessage(short);

	}
}
