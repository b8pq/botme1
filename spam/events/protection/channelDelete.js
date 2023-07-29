const Discord = require("discord.js");
const db = require("../../models/guild");
const { protection_db, action, pBackup, backChannel } = require("../../functions");

module.exports = {
  name: "channelDelete",
  run: async (client, channel) => {
    let guild = channel.guild;
    if (!guild) return;
    let data = await db.findOne({
      id: guild.id
    });
    if (!data || !data.protection.channels.status) return;
    const entry1 = await guild.fetchAuditLogs({
      type: 'CHANNEL_DELETE',
      limit: 1
    }).then(audit => audit.entries.first()).catch(() => 0);
    if(!entry1) return pBackup(guild);
    const entry = entry1.executor;
    if (!entry) return pBackup(guild);
    let target = entry1.target;
    if (target.id != channel.id) return pBackup(guild);
    if (entry.id === client.user.id || entry.id === guild.ownerId || data.owners.includes(entry.id)) return pBackup(guild);
    let data1 = protection_db.get(entry.id);
    if (!data1) {
      data1 = {
        bans: 0,
        channels: 0,
        roles: 0
      }
    }
    data1.channels += 1;
    await protection_db.set(entry.id, data1);
    if (data1.channels >= data.protection.channels.limit) {
      let me = await guild.members.fetch(entry.id).catch(() => 0);
      if(me) {
        let acc = await action(me, data.protection.channels.punishment);
        if(acc) {
          if(data.protection.channels.punishment != "remove member roles") {
            let owner = await guild.members.fetch(guild.ownerId).catch(() => 0);
            if(owner) {
              let embed = new Discord.MessageEmbed()
                .setDescription(`${me} deleted more channels.\nBackup code: \`${acc}\``);
              owner.send({ embeds: [embed] }).catch(() => 0);
            }
          }
        }
      }
    }
    await backChannel(channel);
    pBackup(guild);
    setTimeout(async () => {
      data1.channels = 0;
      await protection_db.set(entry.id, data1);
    }, 60000);
  }
}
