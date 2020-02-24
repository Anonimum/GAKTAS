const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const {color} = require('./config.json');
const { Canvas } = require("canvas-constructor");
const { resolve, join } = require("path");
const { Attachment } = require("discord.js");
const { get } = require("snekfetch");
const fs = require("fs");
const superagent = require("superagent");
const queue = new Map();
const ytdl = require("ytdl-core");


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('message', async message => {
  if (message.content === "hae") {
message.channel.send("hae Juga Bang :3")
}
});


client.on('message', async message => {
  if (message.content === "halo") {
    message.reply('halo Sayank');
  }
});

client.on('message', async message => {
  if (message.content === "sepi") {
message.channel.send("Iy Sepi Kayak Hati Ku :(")
}
});

client.on('message', async message => {
  if (message.content === "assalamualaikum") {
message.channel.send("waalaikumsalam warahmatullahi wabarakatuh")
}
});

client.on('message', async message => {
  if (message.content === "jorok") {
message.channel.send("Bersihin Biar ngga Jorok")
}
});

client.on('message', async message => {
  if (message.content === "waalaikumsalam warahmatullahi wabarakatuh") {
message.channel.send("alhambdullilah ada yg jawab")
}
});

client.on('message', async message => {
  if (message.content === "skuy") {
message.channel.send("https://pbs.twimg.com/media/DS3UhMeVAAAnocf.jpg")
message.channel.send("Dari kecil kita di ajarin Sopan dan santun , dah gede di ajain so fun dan santuy")
}
});


client.on('message', async message => {

    let prefix = 's!'; // UBAH PREFIX DISINI
  
   if (message == `<@${client.user.id}>` || message == `<@!${client.user.id}>`) {
  let embed = new Discord.RichEmbed()
    .setColor("AQUA")
    .setDescription(`Halo ${message.member} Ini Prefix Ku :3" ${prefix}\n${prefix}Help Buat Info lain`)
    message.channel.send(embed)
    }
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    if (!msg.startsWith(prefix)) return;
    if (sender.bot) return;
    
    try {
        let commandFile = require(`./cmds/${cmd}.js`); 
        commandFile.run(client, message, args, color, queue); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.username} ran the command: ${cmd} on ${message.guild.name}`);
    }
    if (message.content === '--') {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.leave();
            console.log("left a channel");
        } else {    }
    }
if (cmd === "nusantara")
  {
      message.member.voiceChannel.join()
                    .then(connection => {
    console.log("joined channel");
    const pokesamwan = [ 
      `https://www.youtube.com/watch?v=jdgfD8ac6ao`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Tet6_BlStEM`,
      `https://www.youtube.com/watch?v=M-P4QBt-FWw`,
      `https://www.youtube.com/watch?v=XimX18tJitU `, // promo
      `https://www.youtube.com/watch?v=jjYpd6X41VA`,
      `https://www.youtube.com/watch?v=MBdVXkSdhwU`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Y5q7etvf8_o`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=MRAOKsDtdCQ`,
      `https://www.youtube.com/watch?v=YnMRjO3UdN8`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=qU98N9K8Hpg`,
      `https://www.youtube.com/watch?v=RBMKRfY9C7c`,
      `https://www.youtube.com/watch?v=GXNqgT308f0` // promo

        
    ];
const wordAnswer = pokesamwan[Math.floor(Math.random() * pokesamwan.length)]
      	const dispatcher = connection.playStream(ytdl(`${wordAnswer}`))
        	connection.dispatcher.setVolumeLogarithmic(1);
    message.channel.send({embed: new Discord.RichEmbed()
                    .setAuthor(message.author.tag,message.author.avatarURL)
                    .setDescription(`😊 **Nusantara Radio Demo - STASIUN MUSIC DISCORD !!**`)
.setColor("RANDOM")
                         })
function tetew() {
    console.log("joined channel");
    const pokesamwan = [ 
      `https://www.youtube.com/watch?v=jdgfD8ac6ao`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Tet6_BlStEM`,
      `https://www.youtube.com/watch?v=M-P4QBt-FWw`,
      `https://www.youtube.com/watch?v=XimX18tJitU `, // promo
      `https://www.youtube.com/watch?v=jjYpd6X41VA`,
      `https://www.youtube.com/watch?v=MBdVXkSdhwU`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Y5q7etvf8_o`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=MRAOKsDtdCQ`,
      `https://www.youtube.com/watch?v=YnMRjO3UdN8`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=qU98N9K8Hpg`,
      `https://www.youtube.com/watch?v=RBMKRfY9C7c`,
      `https://www.youtube.com/watch?v=GXNqgT308f0` // promo
    ];
const wordAnswer = pokesamwan[Math.floor(Math.random() * pokesamwan.length)]

      	const dispatcher = connection.playStream(ytdl(`${wordAnswer}`))
        	connection.dispatcher.setVolumeLogarithmic(1);
}; setInterval(tetew, 225000)
                        
 })

  }
if (cmd === "keluar")
  {
      message.member.voiceChannel.leave()
  }
});

client.login(process.env.TOKEN);

    client.on("ready", () => {
    setInterval(() => {
     const status = [
      `Dibuat Oleh @KatanyaMboy#8039`,
      `Prefix s!`,
      `${client.guilds.size} Server`,
      `${client.channels.size} Voice Channels`,
      `${client.users.size} Users`
         
    ];
     let random = Math.floor(Math.random() * status.length)
     client.user.setPresence({ game: { name: status[random], type: "PLAYING", url: "https://www.twitch.tv/itzmboybot"}});
  }, 5000);
})

client.on("ready", async () => {
    console.log(`Logged in as : ${client.user.tag}`);
    console.log(`${client.user.username} is ready!`)
});

client.on("guildMemberAdd", async (member, client, message, args, level) => {
  var namam = member.user.username
  var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
  async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    var {body: background} = await superagent.get("https://media.discordapp.net/attachments/556039294502830081/558985065212674080/naruto_2.jpg");
    var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
    var {body: botavatar} = await superagent.get("https://media.discordapp.net/attachments/556039294502830081/558984959541510144/Screenshot_1.png");
    return new Canvas(856, 376)
    .addImage(avatar, 100, 50, 256, 256, 128)
    .setColor('BLUE')
    .setTextFont('50px System')
    .setTextAlign('center')
    .setTextFont('30px Arial')
    .addImage(background, 0, 0, 856, 376)
    .addImage(botavatar, 0, 0, 856, 376)
    .addText("WELCOME", 625, 105)
    .addText(`${jadim}#${member.user.discriminator}`, 625, 145)
    .addRoundImage(avatar, 135, 10, 256, 256, 128)
    .toBufferAsync();
  }
  var welcome = JSON.parse(fs.readFileSync("./asset/welcome.json", "utf8"))
  if (!welcome[member.guild.id]) {
    welcome[member.guild.id] = {
      welcome: 0
    };
  }
  let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
  if (!channel) return;
  channel.send(new Discord.Attachment(await createCanvas()));
});

client.on("guildMemberRemove", async (member, client, message, args, level) => {
  var namam = member.user.username
  var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
  async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    var {body: background} = await superagent.get("https://media.discordapp.net/attachments/556039294502830081/558985065212674080/naruto_2.jpg");
    var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
    var {body: botavatar} = await superagent.get("https://media.discordapp.net/attachments/556039294502830081/558984959541510144/Screenshot_1.png");
    return new Canvas(856, 376)
    .addImage(avatar, 100, 50, 256, 256, 128)
    .setColor('BLUE')
    .setTextFont('50px System')
    .setTextAlign('center')
    .setTextFont('30px Arial')
    .addImage(background, 0, 0, 856, 376)
    .addImage(botavatar, 0, 0, 856, 376)
    .addText("GoodBye", 625, 105)
    .addText(`${jadim}#${member.user.discriminator}`, 625, 145)
    .addRoundImage(avatar, 135, 10, 256, 256, 128)
    .toBufferAsync();
  }
  var welcome = JSON.parse(fs.readFileSync("./asset/welcome.json", "utf8"))
  if (!welcome[member.guild.id]) {
    welcome[member.guild.id] = {
      welcome: 0
    };
  }
  let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
  if (!channel) return;
  channel.send(new Discord.Attachment(await createCanvas()));
});

