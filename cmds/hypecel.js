const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://hypixel.net/player/` + google;
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
	
    .setColor("RED")
    .setTimestamp()
    .addField('Action:', 'Searching on Hypecel')
    .setThumbnail("https://hypixel.net/styles/hypixel-uix/hypixel/logo2.png")
	.addField("Word:", `${args.slice(0).join(' ')}`)
	.addField('Link:', `${link}`)
	.setFooter("You're avatar", message.author.avatarURL);
          
	message.channel.send(embed);
  
}



module.exports.help = {
    name: "hypixel"
}