
const Discord = require('discord.js');


  module.exports.run = async (bot, message, args) => {
   message.channel.startTyping()
    let df = await message.channel.send("**Loading**")
    let msg =  bot.guilds.map(guild => `${guild.name}  Members : ${guild.memberCount}`).join('\n');
    let embed = new Discord.RichEmbed()
    .setTitle(`• Aku ada Di Beberapa ${bot.guilds.size} Server`)
    .setDescription(`${msg}\n`)
    
    .setColor("#ff43ff");
   // message.channel.send(embed);
  //let df = await message.channel.send("**Loading..**")
  setTimeout(() => {
  df.react("🇮🇩")
    df.edit(embed)

  },100)
              message.channel.stopTyping(true)
  }

  module.exports.help = {
    name: "svs"
  }