const { RichEmbed } = require("discord.js");
const table = require("table");
let n = "<❎>"
let y = "<☑️>"

module.exports = {
  name: "viewperm",
  aliases: ['Perm',],
  usage: "@member",
  description: "View Permission Member",
  category: "info",
  run : async (bot, msg, args, data) => {
    let prefix = data.prefix;
    let member = msg.mentions.members.first() || msg.member;

    let embed = new RichEmbed()
    .setColor(member.displayHexColor === "#000000" ? "2F3136" : member.displayHexColor)
    .setAuthor(`Permission ${member.user.tag}`, member.user.displayAvatarURL)
    .setDescription(`**CREATE_INSTANT_INVITE [${member.hasPermission("CREATE_INSTANT_INVITE") === true ? y : n}]
KICK_MEMBERS [${member.hasPermission("KICK_MEMBERS") === true ? y : n}]
BAN_MEMBERS [${member.hasPermission("BAN_MEMBERS") === true ? y : n}]
MANAGE_CHANNELS [${member.hasPermission("MANAGE_CHANNELS") === true ? y : n}]
MANAGE_GUILD [${member.hasPermission("MANAGE_GUILD") === true ? y : n}]
ADD_REACTIONS [${member.hasPermission("ADD_REACTIONS") === true ? y : n}]
VIEW_AUDIT_LOG [${member.hasPermission("VIEW_AUDIT_LOG") === true ? y : n}]
PRIORITY_SPEAKER [${member.hasPermission("PRIORITY_SPEAKER") === true ? y : n}]
VIEW_CHANNEL [${member.hasPermission("VIEW_CHANNEL") === true ? y : n}]
SEND_MESSAGES [${member.hasPermission("SEND_MESSAGES") === true ? y : n}]
SEND_TTS_MESSAGES [${member.hasPermission("SEND_TTS_MESSAGES") === true ? y : n}]
MANAGE_MESSAGES [${member.hasPermission("MANAGE_MESSAGES") === true ? y : n}]
EMBED_LINKS [${member.hasPermission("EMBED_LINKS") === true ? y : n}]
ATTACH_FILES [${member.hasPermission("ATTACH_FILES") === true ? y : n}]
READ_MESSAGE_HISTORY [${member.hasPermission("READ_MESSAGE_HISTORY") === true ? y : n}]
MENTION_EVERYONE [${member.hasPermission("MENTION_EVERYONE") === true ? y : n}]
USE_EXTERNAL_EMOJIS [${member.hasPermission("USE_EXTERNAL_EMOJIS") === true ? y : n}]
EXTERNAL_EMOJIS [${member.hasPermission("EXTERNAL_EMOJIS") === true ? y : n}]
CONNECT [${member.hasPermission("CONNECT") === true ? y : n}]
SPEAK [${member.hasPermission("SPEAK") === true ? y : n}]
MUTE_MEMBERS [${member.hasPermission("MUTE_MEMBERS") === true ? y : n}]
DEAFEN_MEMBERS [${member.hasPermission("DEAFEN_MEMBERS") === true ? y : n}]
MOVE_MEMBERS [${member.hasPermission("MOVE_MEMBERS") === true ? y : n}]
USE_VAD [${member.hasPermission("USE_VAD") === true ? y : n}]
CHANGE_NICKNAME [${member.hasPermission("CHANGE_NICKNAME") === true ? y : n}]
MANAGE_NICKNAMES [${member.hasPermission("MANAGE_NICKNAMES") === true ? y : n}]
MANAGE_ROLES [${member.hasPermission("MANAGE_ROLES") === true ? y : n}]
MANAGE_WEBHOOKS [${member.hasPermission("MANAGE_WEBHOOKS") === true ? y : n}]
MANAGE_EMOJIS [${member.hasPermission("MANAGE_EMOJIS") === true ? y : n}]**
`)
    if (member.user.id === msg.guild.owner.id) {
      embed.setFooter(`${member.user.username} Ini ~~Bukan~~ Owner`)
    }
    return msg.channel.send(embed)
  }
}