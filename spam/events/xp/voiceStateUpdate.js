const db = require("../../models/user");

module.exports = {
  name: "voiceStateUpdate",
  run: async(client, oldState, newState) => {
    if(oldState.channelId) return;
    if(!newState.channelId) return;
    let member = await newState.guild.members.fetch(newState.id).catch(() => 0);
    if(!member || member.user.bot) return;
    let data = await db.findOne({
      id: member.user.id,
      guildId: newState.guild.id
    });
    if(!data) {
      data = await db.create({
        id: member.user.id,
        guildId: newState.guild.id
      });
    }
    let interval = setInterval(async () => {
      member = await newState.guild.members.fetch(newState.id).catch(() => 0);
      if(!member || !member.voice.channelId) return clearInterval(interval);
      let random = Math.floor(Math.random() * 1) + 1;
      data.xp.voice += random;
      await data.save();
    }, 5000);
  }
}