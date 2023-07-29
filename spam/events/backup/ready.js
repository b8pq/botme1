const { delay, auto_backup } = require("../../functions");
const guild_db = require("../../models/guild");

module.exports = {
  name: "ready",
  run: async (client) => {
    await delay(20000);
    let data = await guild_db.find({});
    data.forEach(d => {
      if(!d.auto_backup.status) return;
      let guild = client.guilds.cache.get(d.id);
      if(!guild) return;
      auto_backup(guild);
    });
    console.log("Reloading Backup System");
  }
}