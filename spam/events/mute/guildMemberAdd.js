const { setTime, delay } = require("../../functions");
const guild_db = require("../../models/guild");
const db = require("../../models/user");

module.exports = {
  name: "guildMemberAdd",
  run: async (client, member) => {
    let data = await db.findOne({
      id: member.user.id,
      guildId: member.guild.id
    });
    if(!data) return;
    let role = member.guild.roles.cache.find(r => r.name.toLowerCase() === "muted");
    if(!role) return;
    let time = (data.mute.time + data.mute.s_time) - Date.now();
    if(time < 0) return;
    member.roles.add(role).catch(err => 0);
  }
}