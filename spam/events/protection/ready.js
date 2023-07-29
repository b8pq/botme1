const db = require("../../models/guild");
const { pBackup } = require("../../functions");

module.exports = {
  name: "ready",
  run: async (client) => {
    let data = await db.find();
    data.forEach(d => {
      let guild = client.guilds.cache.get(d.id);
      if(!guild) return;
      if(d.protection.roles.status || d.protection.channels.status) {
        pBackup(guild);
      }
    });
  }
}