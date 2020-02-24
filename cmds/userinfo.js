const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
               

        let trufal = {
            "true": "Robot",
            "false": "Manusia"
        }

        let status = { 
            "online": "<:online:449590947165110283> Online",
            "idle": "<:away:449590947110584321> Idle",
            "dnd": "<:dnd:449590946879766539> Do Not Disturb",
            "invisible": "<:offline:449590947047669760> Offline"
        }
       
        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user)
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor("User Info", message.author.displayAvatarURL)
        .addBlankField()
        .addField("🏷️ Nama:", `${user.tag}`, true)
        .addField("💳 ID:", `${user.id}`, true)
        .addField("🤖 Tipe akun:", `${trufal[user.bot]}`, true)
        .addField("💻 Status:", `${status[user.presence.status]}`, true)
        .addField("🎮 Game:", `${user.presence.game ? user.presence.game.name : 'I do not see him playing anything!'}`, true)
        .addField("📌 Roles:", member.roles.map(roles => `${roles}`).join(' => '), true)
        .addField("🗓️ Join Kapan:", message.member.joinedAt)
        .addField("🕗 Dibuat kapan:", `${user.createdAt}`, true)
        .addBlankField()
        .setThumbnail(user.avatarURL)
        .setTimestamp()
        .setFooter(`Mboy |`);
     message.channel.send({embed});
};

module.exports.help = {
    name: 'userinfo',
};
