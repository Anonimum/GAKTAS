const Discord = require("discord.js");
var verificationLevels = ['**None**', '**Low**', '**Medium**', '**(╯°□°）╯︵ ┻━┻** (High)', '**┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻** (Extreme)']; 

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setAuthor("**Server Info**")
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField(":label: | Server Name", message.guild.name)
    .addField(":credit_card: | ID", message.guild.id)
    .addField("<:verif:488718949286936576> | Verification Level ", `${verificationLevels[message.guild.verificationLevel]}`,true) 
    .addField(":earth_americas: | Server Region", message.guild.region)
    .addField(":busts_in_silhouette: | Members", message.guild.memberCount)
    .addField(':busts_in_silhouette: | Members Online', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
    .addField(':robot: | Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
    .addField(':busts_in_silhouette: | Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}**Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
    .addField(":clock9: | Created At", message.guild.createdAt)
    .addField("👤|Owner", `<@${message.guild.owner.user.id}>`)
    .setAuthor('Mboy', bot.user.avatarURL)
      
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo",
  category: "INFO"
}
