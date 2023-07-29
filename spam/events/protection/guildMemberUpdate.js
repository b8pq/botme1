const db = require("../../models/guild");
const { pBackup } = require("../../functions");

module.exports = {
  name: "guildMemberUpdate",
  run: async (client, oldMem, newMem) => {
    let newRoles = newMem.roles.cache.filter(r => !oldMem.roles.cache.get(r));
    let oldRoles = oldMem.roles.cache.filter(r => !newMem.roles.cache.get(r));
    if(newRoles.size <= 0 && oldRoles.size <= 0) return;
    let guild = newMem.guild;
    if (!guild) return;
    let data = await db.findOne({
      id: guild.id
    });
    if(data && (data.protection.roles.status || data.protection.channels.status)) {
      pBackup(guild);
    }
  }
}