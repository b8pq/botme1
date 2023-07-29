const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "messageCreate",
  run: async(client, message) => {
    if(!message.guild || message.author.id == client.user.id) return;
    let data = await db.findOne({
      id: message.guild.id
    });
    if(!data || !data.line.length) return;
    let lines = data.line.filter(l => l.channel == message.channel.id);
    if(!lines.length) return;
    lines.forEach(line => {
      message.channel.send({ files: [line.line] }).catch(() => 0);
    });
  }
}