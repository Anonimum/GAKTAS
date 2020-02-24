const fs = require('fs');
const Discord = require('discord.js');
let conf = 's!';

exports.run = async (client, message, args, prefix) => {
let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You haven't enough permissions.");
  
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}setprefix <new prefix>`);

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);
}

exports.help = []