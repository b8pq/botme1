const Discord = require("discord.js");
const db = require("../../models/guild");
const { checkChange } = require("../../functions");

module.exports = {
  name: "channelUpdate",
  run: async (client, oldChannel, newChannel) => {
    let perm_1 = oldChannel.permissionOverwrites.cache
      .map((p) => ({
        id: p.id,
        deny: p.deny?.toArray(),
        allow: p.allow?.toArray(),
        type: p.type,
      }))
      .sort((a, b) => parseInt(b.id) - parseInt(a.id));
    let perm_2 = newChannel.permissionOverwrites.cache
      .map((p) => ({
        id: p.id,
        deny: p.deny?.toArray(),
        allow: p.allow?.toArray(),
        type: p.type,
      }))
      .sort((a, b) => parseInt(b.id) - parseInt(a.id));
    if (JSON.stringify(perm_1) === JSON.stringify(perm_2)) return;
    let guild = newChannel.guild;
    if (!guild) return;
    const entry1 = await guild
      .fetchAuditLogs({
        type:
          perm_1.length > perm_2.length
            ? "CHANNEL_OVERWRITE_DELETE"
            : perm_1.length === perm_2.length
            ? "CHANNEL_OVERWRITE_UPDATE"
            : "CHANNEL_OVERWRITE_CREATE",
        limit: 1,
      })
      .then((audit) => audit.entries.first())
      .catch(() => 0);
    if (!entry1) return;
    const entry = entry1.executor;
    if (!entry) return;
    let target = entry1.target;
    if (target.id != newChannel.id) return;
    if (entry.id === client.user.id || entry.id === guild.ownerId) return;
    newChannel
      .edit(
        {
          permissionOverwrites: perm_1,
        },
        `Avar Store Protection.`
      )
      .catch(() => 0);
  },
};
