const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Reload")
  .setDescription("Sorry, the `reload` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '456255626914299909') return message.channel.send(embed);

  try{
    delete require.cache[require.resolve(`./${args[0]}.js`)];
  let Aembed = new Discord.RichEmbed()
  .setTitle("Sedang Reload")

    return message.channel.send(Aembed);
     }catch(e){
     return message.channel.send("Tidak ada perintah seperti itu!")
     }
}; 

module.exports.help = {
name: "?reload"
}