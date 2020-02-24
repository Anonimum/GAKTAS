const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
  let embed = new Discord.RichEmbed()
  .setTitle("Restart")
  .setDescription("<:nezukogun:674515397038309417> Sorry, the `restart` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '456255626914299909') return message.channel.send(embed);
  message.delete().catch(O_o=>{}); 
  
message.channel.send(`Restarted in ${Math.floor(bot.ping)}ms`).then(() =>{
process.exit(1);
})
 

                                           }
module.exports.help = {
name: "?restart"
}