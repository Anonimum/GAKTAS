const Discord = require("discord.js");
const gifSearch = require("gif-search");


module.exports.run = (bot, message, args, ops, PREFIX) => {
 

    if (!args[0]) return message.channel.send("`w.gif <gname>`");

    gifSearch.query(args[0]).then(
        gifUrl => {
        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor("#070707")
            .setTimestamp() 
            .setImage(gifUrl)
            .setFooter(`WoW`);
        message.channel.send(embed);
    });

    

}

module.exports.help = { 
name: "gif", 
description: "", 
usage: ""
}