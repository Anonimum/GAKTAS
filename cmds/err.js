const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	try{
		if(args.length < 2) return args.missing(message, 'Check you missing something', this.help);
		const user = message.mention.users.first();
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<❌591437833076473857> Kamu Tidak memiliki izin tuk menggunakan command ini!");
    //    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<❌591437833076473857> Kamu Tidak memiliki izin tuk menggunakan command ini!");

		if(!user) return message.channel.send('No user with id '+ args[0]);
		message.channel.send('Message sended 📨 !');
		return user.send(args.slice(1).join(' '));
	}catch(e){
		return message.reply(`Usage: +dm <id> <message>`);
	}
}

exports.conf = {
  aliases: [],
  clientPerm: '',
  authorPerm: ''
}

exports.help = {
  name: 'dm',
  description: 'dm as s',
  usage: 'dm <id> <message>',
  example: ['dm 20393722829 yo']
}