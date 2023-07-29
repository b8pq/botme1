const { setTime, delay } = require("../../functions");
const guild_db = require("../../models/guild");
const db = require("../../models/user");

module.exports = {
  name: "ready",
  run: async (client) => {
    await delay(20000);
    let data = await db.find({});
  data.forEach(async d => {
    setTime(async () => {
      let dd = await db.findOne({
        id: d.id,
        guildId: d.guildId
      });
      if(!dd) return;
      if(((dd.mute.s_time + dd.mute.time) - Date.now()) > 0) return;
      let guild = client.guilds.cache.get(d.guildId);
      if(!guild) return;
      let member = await guild.members.fetch(d.id).catch(err => 0);
      if(!member) return;
      let role = guild.roles.cache.find(r => r.name.toLowerCase() === "muted");
        if(!role) return;
        if(!member.roles.cache.has(role.id)) return;
        await member.roles.remove(role).catch(err => 0);
        dd.mute.time = 0;
        await dd.save();
      }, d.time + d.s_time);
    });
    console.log("Reloading Mute System.");
  }
}