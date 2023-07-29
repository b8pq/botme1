const Discord = require("discord.js");
const db = require("../../models/guild");
const { createList } = require("../../functions");

module.exports = {
  name: "ready",
  run: (client) => {
    setInterval(async () => {
      let data = await db.find();
      data.forEach(async d => {
        let guild = client.guilds.cache.get(d.id);
        if(!guild) return;
        if(!d.voice.status) return;
        let channel = guild.channels.cache.get(d.voice.channel);
        if(!channel) return;
        let members = await guild.members.fetch();
        members = members.filter(m => m.voice.channelId);
        channel.setName(d.voice.message.replace("00", `${members.size}`)).catch(() => 0);
      });
    }, 180000);
  }
}