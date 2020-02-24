const { get } = require("node-superfetch");

exports.run = async (client, message, args, color, prefix) => {
  const user = message.mentions.users.first();
  if(!user) return message.reply(`**Tag Orang OI**`)
  if(user.id === message.author.id) return message.channel.send(`**Kamu ~~bisa~~ hack dirimu sendiri**`)
  message.channel.send(`~~Memulai hacking~~...`).then(m => {
        setTimeout(() =>{
          m.edit(`Username: **${user.username}**`).then(m => {
              setTimeout(()=> {m.edit(`Gmail: **${user.username}@gmail.com**`).then(m => {
              setTimeout(()=> {m.edit(`Mendapatkan Password`).then(m => {
             setTimeout(()=> {m.edit(`Sudah Terkirim ke **DM**`).then(m => {
                            setTimeout(()=> {m.edit(`Cie Yang Percaya`)
                          }, 5000)
                        })
                      }, 5000)
                    })
                  }, 5000)
                })
              }, 5000)
            })
            }, 5000)
})
}
exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "hack",
    description: "Me-hack orang yang di mention",
    usage: "hack @user"
}
