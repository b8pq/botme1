const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "roleUpdate",
  run: async (client, oldRole, newRole) => {
    let perm_1 = oldRole.permissions.toArray();
    let perm_2 = newRole.permissions.toArray();
    if(JSON.stringify(perm_1) === JSON.stringify(perm_2)) return;
    let guild = newRole.guild;
    if (!guild) return;
    let data = await db.findOne({
      id: guild.id
    });
    if (!data || !data.protection.permissions) return;
    const entry1 = await guild.fetchAuditLogs({
      type: 'ROLE_UPDATE',
      limit: 1
    }).then(audit => audit.entries.first()).catch(() => 0);
    if(!entry1) return;
    const entry = entry1.executor;
    if (!entry) return;
    let target = entry1.target;
    if (target.id != newRole.id) return;
    if (entry.id === client.user.id || entry.id === guild.ownerId || data.owners.includes(entry.id)) return;
    newRole.edit({
      permissions: perm_1
    }).catch(err => 0);
  }
}