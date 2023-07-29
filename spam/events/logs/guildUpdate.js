const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildUpdate",
  run: async(client, oldGuild, newGuild) => {
    if(!newGuild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: newGuild.id
  });
  if(!data) return;
  if(oldGuild.name === newGuild.name) return;
  data = data.logs.server_update;
  if(!data.status) return;
  let ch = newGuild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setAuthor(newGuild.name, newGuild.iconURL({ dynamic:true }))
    .setFooter(newGuild.name)
    .setTimestamp()
    .setDescription(`**Server Update.**`)
    .addField("Old Name:", oldGuild.name)
    .addField("New Name:", newGuild.name);
  const entry = await newGuild.fetchAuditLogs({ 
    type: "GUILD_UPDATE",
    limit: 1
  }).then(audit => audit.entries.first());
  if(entry) {
    await embed.addField(`Responsible Moderator`,`${entry.executor}`);
    await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
  }
    ch.send({ embeds:[embed] }).catch(err => 0);
  }
}