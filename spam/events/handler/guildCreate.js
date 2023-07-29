const Discord = require("discord.js");
const db = require("../../models/bot");

module.exports = {
  name: "guildCreate",
  run: async(client, guild) => {
    let data = await db.findOne({
      id: client.user.id
    });
    if(!data) {
      data = await db.create({
        id: client.user.id
      });
      await data.save();
    }
    if(isNaN(data.guildId)) {
      data.guildId = guild.id;
      await data.save();
    } else {
      if(data.guildId == guild.id) return;
      guild.leave();
    }
  }
}