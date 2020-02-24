const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarUser;
  let patrick = new Discord.RichEmbed()
.setAuthor('Mboy', bot.user.avatarURL)
.setDescription('<Dont Follow Your Dreams Follow My instagram @KatannyaMboy')
.addField('🛠MODERATOR🛠',`\`s!ban\` \`s!warn\` \`s!mute\` \`s!clear\``)
.addField('😄FUN😄',`\`s!hack\` \`s!slap\` \`s!hug\`\n \`s!bond\` \`s!ascii\` \`s!ngudud\` \`s!anunyamboy\`  \`s!animeme\`\n \`s!Meme\` \`s!Ngudud\` \`s!cat\` \`s!dog\`\n \`s!Discosheep\` \`s!membercount\` \`s!jobs\` \`s!JadwalSholat\` \`s!gif\``)
.addField('<:zombie:671373645553074197>Minecraft<:zombie:671373645553074197>',`\`s!McIp\` \`s!Mcnick\` \`s!mcskin\` \`s!hypecel\``)
.addField('😈NSFW😈',`\`s!Neko\` \`s!hentai\` \`s!kisu\``)
.addField('🎤Music🎤',`\`s!join\` \`s!leave\` \`s!play\` \`s!pause\`\n \`s!resume\` \`s!volume\` \`s!stop\` \`s!skip\`\n \`s!np\` \`s!queue\``)
.addField('🎉utils🎉', `\`s!avatar\` \`s!userinfo\` \`s!instagram\` \`s!icon\`\n \`s!emojiinfo\` \`s!ping\` \`s!perm\` \`s!serverrole\``)
.addField('ℹ️ InfoBot ℹ️', `\`s!info\` \`s!invite\``)
.addField('»Instagram Dev',`[\`Tekan Ini\`](https://www.instagram.com/mboy6912/)`)
.setImage('https://media1.tenor.com/images/1790730db8a11c17024d66ed5afcdd5b/tenor.gif?itemid=15621852')
.setColor("RANDOM")
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
