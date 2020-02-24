const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const IdUser = await client.fetchUser(args[0])
  if(!IdUser) return message.channel.send(`Mohon sertakan id orang yg ingin di dm`)
  
  IdUser.send(args.slice(0).join(' '))
  message.channel.send(`📨Pesan Terkirim`)
}