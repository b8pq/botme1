const { setTime, delay } = require("../../functions");
const guild_db = require("../../models/guild");
const db = require("../../models/user");

module.exports = {
  name: "ready",
  run: async (client) => {
    await delay(20000);
    let data = await db.find({});
    data.forEach(async d => {
    if(d.prison.nolimit === true || (d.prison.time + d.prison.s_time) < Date.now()) return;
      setTime(async () => {
        let guild_data = await guild_db.findOne({
          id: d.guildId
        });
        if(!guild_data) return;
        let dd = await db.findOne({
          id: d.id,
          guildId: d.guildId
        });
        if(!dd) return;
        if(((dd.prison.s_time + dd.prison.time) - Date.now()) > 0) return;
        let guild = client.guilds.cache.get(d.guildId);
        if(!guild) return;
        let member = await guild.members.fetch(d.id).catch(err => 0);
        if(!member) return;
      if(!member.roles.cache.has(guild_data.prison.role)) return;
        await member.roles.remove(guild_data.prison.role).catch(() => 0);
        dd.prison.time = 0;
        dd.prison.s_time = 0;
        await dd.save();
      }, d.time + d.s_time);
    });
    console.log("Reloading Prison System.");
  }
}