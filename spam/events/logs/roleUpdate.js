const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "roleUpdate",
  run: async(client, oldRole, newRole) => {
    if(!newRole.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: newRole.guild.id
  });
  if(!data) return;
  if(oldRole.name === newRole.name) return;
  data = data.logs.update_role;
  if(!data.status) return;
  let ch = newRole.guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setAuthor(newRole.guild.name, newRole.guild.iconURL({ dynamic:true }))
    .setFooter(newRole.guild.name)
    .setTimestamp()
    .setDescription(`**👨‍👨‍👦 \`${newRole.name}\` has been updated**`)
    .addField("Old Name:", oldRole.name)
    .addField("New Name:", newRole.name);
  const entry = await newRole.guild.fetchAuditLogs({ 
    type: "ROLE_UPDATE",
    limit: 1
  }).then(audit => audit.entries.first());
  if(entry) {
    if(entry.target.id === newRole.id) {
      await embed.addField(`Responsible Moderator`,`${entry.executor}`);
      await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
    }
  }
    ch.send({ embeds:[embed] }).catch(err => 0);
  }
}