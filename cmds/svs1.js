const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `**${guild.name}** Members: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`I am in ${bot.guilds.size} guilds!`)
  .setDescription(`${msg}`)
  .setColor("WHITE");
  message.channel.send(embed);
}