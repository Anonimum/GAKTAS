const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
    let result = Math.floor(Math.random() * 100)
    let job = [ "Pengemis", "Pengamen", "Maling", "Pedagang", "Youcubel", "Nelayan", "Patani", "Sikopat", "Tenaga kerja Indonesia", "Hekel", "Developer" ]
    let jobr = Math.floor(Math.random() * job.length)
    message.channel.send(`💸 | kamu Bekerja Sebagai **${job[jobr]}** Dan Mendapatkan \**$${result}\**`)
    db.add(`${message.author.id}.balance`, result)
}

exports.help = {
    name: "jobs"
}