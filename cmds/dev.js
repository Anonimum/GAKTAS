const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle("🙇 Developer")
.addField("||s!DM||", "Buat Ngedm Orang BEGO :3")
.addField("||s!Restart||","Buat Ngerestart Orang Bego :3")
message.channel.send(embed).then(msg => {msg.delete(15000)});
}
