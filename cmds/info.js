const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    description: "Makasih Udh Dinvite loh =)",
    fields: [{
        name: "Developers",
        value: "Developers Ganteng Mboy#8039 <:sip:674798311663730688>  "
      },
      {
        name: "Feedback",
        value: "[Discord Server Family](https://discord.gg/MHDsxWw)"
      },
      {
        name: "prefixs",
        value: "m!help"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Bukan Komunitas=)"
    }
  }
});
}
module.exports.help = {
name:"?info"
}