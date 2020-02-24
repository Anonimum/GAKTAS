const Discord = require ('discord.js')
module.exports.run = async (bot, message, args) => {
 let users = message.mentions.users.first() || message.author
 let embed = new Discord.RichEmbed()
  .setAuthor(users.tag)
  .setImage(users.displayAvatarURL)
  .setColor('WHITE')
  .setTimestamp()
  .setDescription(`[Avatar link!](${users.avatarURL})`)
  message.channel.send(embed)
}


