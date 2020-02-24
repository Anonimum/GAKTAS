const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .addField(`Emoji List: [${message.guild.emoji.size}]`, `${message.guild.emoji.map(emoji => emoji).join(' \n ')}`, true)
    message.channel.send(embed)
}