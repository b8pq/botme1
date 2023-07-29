const db = require("../../models/guild");

module.exports = {
  name: "guildMemberUpdate",
  run: async (client, oldMember, newMember) => {
    if(oldMember.roles.cache.size >= newMember.roles.cache.size) return;
    let data = await db.findOne({
      id: newMember.guild.id
    });
    if(!data || !data.block.users.length) return;
    if(!data.block.users.find(m => m == newMember.user.id)) return;
    if(newMember.roles.cache.has(data.picrole)) return newMember.roles.remove(data.picrole).catch(() => 0);
  }
}