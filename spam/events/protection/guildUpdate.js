const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildUpdate",
  run: async(client, oldGuild, newGuild) => {
    let data = await db.findOne({
      id: newGuild.id
    });
    if(!data || !data.protection.guild) return;
    if(oldGuild.vanityURLCode != newGuild.vanityURLCode) {
      if(!oldGuild.vanityURLCode) return;
      if(newGuild.premiumSubscriptionCount < 14) return;
      let entry1 = await newGuild.fetchAuditLogs({ type: "GUILD_UPDATE", limit: 1 }).then(audit => audit.entries.first()).catch(err => 0);
      if(!entry1) return;
      let user = entry1.executor;
      let changes = entry1.changes;
      if(changes[0]?.key != "vanity_url_code") return;
      if(user.id == newGuild.ownerId || user.id == client.user.id || data.owners.includes(user.id)) return;
      client.api.guilds(newGuild.id, 'vanity-url').patch({
        data: {
          code: oldGuild.vanityURLCode
        },
        reason: "Guild Protection"
      }).catch(() => 0);
      newGuild.members.ban(user.id, { reason: "Change vanityURL" }).catch(() => 0);
    } else if(oldGuild.name != newGuild.name) {
      let entry1 = await newGuild.fetchAuditLogs({ type: "GUILD_UPDATE", limit: 1 }).then(audit => audit.entries.first()).catch(err => 0);
      if(!entry1) return;
      let user = entry1.executor;
      if(user.id == newGuild.ownerId || user.id == client.user.id || data.owners.includes(user.id)) return;
      newGuild.setName(oldGuild.name).catch(() => 0);
      newGuild.members.ban(user.id, { reason: "Change name" }).catch(() => 0);
    } else if(oldGuild.icon != newGuild.icon) {
      if(!oldGuild.icon) return;
      let entry1 = await newGuild.fetchAuditLogs({ type: "GUILD_UPDATE", limit: 1 }).then(audit => audit.entries.first()).catch(err => 0);
      if(!entry1) return;
      let user = entry1.executor;
      if(user.id == newGuild.ownerId || user.id == client.user.id || data.owners.includes(user.id)) return;
      newGuild.setIcon(data.protection.avatar == "null" ? null : data.protection.avatar).catch(() => 0);
      newGuild.members.ban(user.id, { reason: "Change icon" }).catch(() => 0);
    } else if(oldGuild.banner != newGuild.banner) {
      if(!oldGuild.banner) return;
      if(newGuild.premiumSubscriptionCount < 14) return;
      let entry1 = await newGuild.fetchAuditLogs({ type: "GUILD_UPDATE", limit: 1 }).then(audit => audit.entries.first()).catch(err => 0);
      if(!entry1) return;
      let user = entry1.executor;
      if(user.id == newGuild.ownerId || user.id == client.user.id || data.owners.includes(user.id)) return;
      newGuild.setBanner(data.protection.banner == "null" ? null : data.protection.banner).catch(() => 0);
      newGuild.members.ban(user.id, { reason: "Change banner" }).catch(() => 0);
    }
  }
}