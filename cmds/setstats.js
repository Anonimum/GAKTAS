const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

if(message.author.id !== "456255626914299909") return message.channel.send("You may not use this command because you're not a developer.");

if(args[1] == "online") return client.user.setStatus("online");

if(args[1] == "dnd") return client.user.setStatus("dnd");

if(args[1] == "invisible") return client.user.setStatus("invisible");

if(args[1] == "idle") return client.user.setStatus("idle");

}

module.exports.help = {
  name: 'st',
  category: "OWNER"
}