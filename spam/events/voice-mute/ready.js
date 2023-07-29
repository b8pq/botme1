const { setTime, delay } = require("../../functions");
const guild_db = require("../../models/guild");
const db1 = require("../../models/user");

module.exports = {
  name: "ready",
  run: async (client) => {
    await delay(20000);
    let data1 = await db1.find({});
    data1.forEach(async d => {
      setTime(async () => {
        let dd = await db1.findOne({
          id: d.id,
          guildId: d.guildId
        });
        if(!dd) return;
        if(((dd.vmute.s_time + dd.vmute.time) - Date.now()) > 0) return;
        if(dd.vmute.muted == false) return;
        let guild = client.guilds.cache.get(d.guildId);
        if(!guild) return;
        let member = await guild.members.fetch(d.id).catch(err => 0);
        if(!member) return;
        if(!member.voice.channelId) return;
        member.voice.setMute(false).catch(err => 0);
        dd.vmute.muted = false;
        await dd.save();
      }, d.time + d.s_time);
    });
    console.log("Reloading Voice Mute System.");
  }
}