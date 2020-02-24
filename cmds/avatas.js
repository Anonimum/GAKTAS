const Discord = require ('discord.js')
module.exports.run = async (bot, message, args) => {
if(message.author.id !== '456255626914299909') return message.channel.send(embed);
 let users = message.mentions.users.first() || message.author
 let embed = new Discord.RichEmbed()
  .setAuthor(users.tag)
  .setImage(users.displayAvatarURL)
  .setColor('WHITE')
  .setTimestamp()
  .setDescription(`[Avatar link!](${users.avatarURL})`)
  message.channel.send(embed)
}


