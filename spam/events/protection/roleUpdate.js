const Discord = require("discord.js");
const db = require("../../models/guild");
const { protection_db, action, pBackup } = require("../../functions");

module.exports = {
  name: "roleUpdate",
  run: async (client, oldRole, newRole) => {
    let guild = newRole.guild;
    if (!guild) return;
    let data = await db.findOne({
      id: guild.id
    });
    if (!data || !data.protection.roles.status) return;
    pBackup(guild);
    if(oldRole.name === newRole.name) return;
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
    let data1 = protection_db.get(entry.id);
    if (!data1) {
      data1 = {
        bans: 0,
        channels: 0,
        roles: 0
      }
    }
    data1.roles += 1;
    await protection_db.set(entry.id, data1);
    if (data1.roles >= data.protection.roles.limit) {
      let me = await guild.members.fetch(entry.id).catch(() => 0);
      if(!me) return;
      let acc = await action(me, data.protection.roles.punishment);
      if(!acc) return;
      if(data.protection.roles.punishment != "remove member roles") {
        let owner = await guild.members.fetch(guild.ownerId).catch(() => 0);
        if(!owner) return;
        let embed = new Discord.MessageEmbed()
          .setDescription(`${me} updated more roles.\nBackup code: \`${acc}\``);
        owner.send({ embeds: [embed] }).catch(() => 0);
      }
    }
    setTimeout(async () => {
      data1.roles = 0;
      await protection_db.set(entry.id, data1);
    }, 60000);
  }
}
