const Discord = require("discord.js");

module.exports = {
  name: "bio",
  alias: ['biodata'],
  run: async (bot, msg, args, data) => {
    let prefix = data.prefix;
    let nama = args[0];
    let umur = args[1];
    let asal = args[2];
    let gender = args[3];
    let game = args.slice(4).join(" ");
    if (!nama || !umur || !Number(umur) || !asal || !gender || !game) {
      return msg.channel.send(`${prefix}bio <Nama> <Umur> <Asal> <Gender> <Game >`)
    }
    let Embed = new Discord.RichEmbed()
    .setColor(msg.member.displayHexColor === "#000000" ? "GREEN" : msg.member.displayHexColor)
    .setThumbnail(msg.author.displayAvatarURL)
    .setDescription(`Bio: **${msg.member}**
Nama: **${nama}**
Umur: **${umur}**
Asal: **${asal}**
Gender: **${gender}**
Game: **${game}**
    `)
    return msg.channel.send(Embed)
  }
}
