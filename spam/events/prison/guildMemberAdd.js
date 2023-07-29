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
    let guild_data = await guild_db.findOne({
      id: data.guildId
    });
    if(!guild_data) return;
    let role = member.guild.roles.cache.find(r => r.id === guild_data.prison.role);
    if(!role) return;
    let time = (data.prison.time + data.prison.s_time) - Date.now();
    if(time < 0) return;
    member.roles.add(role).catch(err => 0);
  }
}