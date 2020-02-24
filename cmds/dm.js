const Discord = require("discord.js");
const client = new Discord.Client({
  fetchAllMembers: true,
disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
disableEveryone: true 
});
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {
if (message.author.id !== '456255626914299909') return message.channel.send("Sorry, but you don't have permission to use this!") 
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply("Tag User From This Server");
        var v=args.join(" ");
        message.delete().catch(O_o=>{}); 
        member.send(v) // send that user a DM
    }