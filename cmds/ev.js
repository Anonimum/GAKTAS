let Djs = require('discord.js')
var os = require('os')
let token = [
            'TERTIPU KAMU BANGSAT',
            'EA MAU NGINTIP',
            'KAMU MAU TOKEN AMBIL SENDIRI SANA!',
            'NGENTOD LU PAKE AMBIL TOKEN GW!'
            ];
 
module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "456255626914299909" && message.author.id !== "661823877420417042") return message.channel.send("Kamu tidak bisa menggunakan command ini!, karena kamu bukan developer!")
    message.delete().catch(O_o=>{}); 
    let msg = message
    try {
    let codein = args.slice(0).join(' ');
    let code = eval(codein);
    if (typeof code !== 'string')
      code = require('util').inspect(code, { depth: 0 });
    if(code.includes(process.env.TOKEN)) {
      code = code.replace(bot.token, token[Math.floor(Math.random() * token.length)])
    if(code.includes(process.env.TOKEN)) {
        code = code.replace(bot.token, token[Math.floor(Math.random() * token.length)])
    }
  message.delete().catch(O_o=>{}); 
    }
    let embed = new Djs.RichEmbed()
    .setAuthor('Evaluasi')
    .setColor('WHITE')
    .addField('📥 Masuk', `\`\`\`js\n${codein}\`\`\``) 
    .addField('📤 Keluarnya', `\`\`\`js\n${code}\n\`\`\``)
    message.channel.send(embed).then(msg => msg.react('✅'))
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.react("❌"))
  }
  }

