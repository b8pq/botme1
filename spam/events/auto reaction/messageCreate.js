const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "messageCreate",
  run: async(client, message) => {
    if(!message.guild || message.author.id == client.user.id) return;
    let data = await db.findOne({
      id: message.guild.id
    });
    if(!data || !data.react.length) return;
    let reactions = data.react.filter(l => l.channel == message.channel.id);
    if(!reactions.length) return;
    reactions.forEach(reaction => {
      message.react(reaction.emoji).catch(() => 0);
    });
  }
}