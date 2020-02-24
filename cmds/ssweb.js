const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
        const website = args.join(" ");
  
        if (!website) {
            return message.reply("Maybe it's useful to actually search for someone...!")
                .then(m => m.delete(5000));
        }

        const url = `https://image.thum.io/get/width/1200/http://${website}`;
        
        await message.channel.send({files: [
          {
            attachment: url,
            name: "web.png"
          }
          ]})
          
    };