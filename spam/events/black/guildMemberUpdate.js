const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildMemberUpdate",
  run: async(client, oldMem, newMem) => {
    if(!newMem.guild.me.permissions.has("MANAGE_ROLES")) return;
    let data = await db.findOne({
      id: newMem.guild.id
    });
    if(!data) return;
    if(oldMem.roles.cache.size < newMem.roles.cache.size) {
      let added_roles = newMem.roles.cache.filter(r => !oldMem.roles.cache.find(rr => rr.id == r.id) && data.black.find(rrr => rrr == r.id));
      if(added_roles.size < 1) return;
      let entry = await newMem.guild.fetchAuditLogs({ 
        type: "MEMBER_ROLE_UPDATE",
        limit: 1
      }).then(audit => audit.entries.first());
      if(!entry) return;
      if(entry.target.id != newMem.user.id) return;
      if(entry.executor.id == newMem.guild.ownerId || data.owners.find(o => o == entry.executor.id)) return;
      added_roles.forEach(r => newMem.roles.remove(added_roles).catch(() => 0));
    }
  }
}