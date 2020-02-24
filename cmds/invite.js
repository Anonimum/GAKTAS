const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

let command = new Discord.RichEmbed()

.setAuthor(`Shira`, client.user.avatarURL)
.addField(`**Mengundang Bot**`,`[\`Silahkan Invite Bot Ini\`](https://discordapp.com/oauth2/authorize?client_id=680581909876572204&scope=bot&permissions=8)`)
.setThumbnail(client.user.avatarURL)    
    .setFooter(`Shira - Copyright - Mboy`)
    .setImage ("https://images-ext-1.discordapp.net/external/gkptN5g9D65xF3rrzPG5eWy0ZxU9KfSAZTCfd7Je36k/%3Fq%3Dtbn%253AANd9GcRHKf1qAFP9LJxMoiHBwmKktylDPNbI8jw1C4Lp009jJt4Tsxk7/https/encrypted-tbn0.gstatic.com/images");

message.channel.send(command)

}