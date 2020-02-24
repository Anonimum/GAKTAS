let Discord = require("discord.js")
exports.run = async (client, message, args) => {        
const users = client.users;

        const searchTerm = args[0];
        if (!searchTerm) {
            return message.channel.send('Please provide a search term.');
        }

        const matches = users.filter(u =>u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
        if (!matches) {
            return message.channel.send('No username matches');
        }
        else {
let embed = new Discord.RichEmbed()
.setTitle("User Finder")
.setDescription(matches.map(u => u.tag).join('\n, '))
   .setColor("#36393f")
            return message.channel.send(embed);
        }
};
exports.help = {
  name: 'findusers',
  aliases: []
};