const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
        const daerah = args.join(" ");
  
        if (!daerah) {
            return message.channel.send("Usage: /jadwalsholat <kota>")
                .then(m => m.delete(5000));
        }

        const url = `https://rest.farzain.com/api/shalat.php?id=${daerah}&apikey=21AuixDfnVIOkjlCOlfVcZJQe`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Tidak Menemukan Jadwal Sholat Di Kota Itu")
                .then(m => m.delete(5000));
        }

        const jadwal = res.respon;

        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField(`Jadwal Sholat Di Kota: ${daerah}`, stripIndents`**- Shubuh:** ${jadwal.shubuh}
            **- Dzuhur:** ${jadwal.dzuhur}
            **- Ashar:** ${jadwal.ashar}
            **- Maghrib:** ${jadwal.maghrib}
            **- Isya:** ${jadwal.isya}`)
        message.channel.send(embed);


}