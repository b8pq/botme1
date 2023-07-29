const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildMemberUpdate",
  run: async(client, oldMem, newMem) => {
    if(!newMem.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: newMem.guild.id
  });
  if(!data) return;
  if(newMem.nickname !== oldMem.nickname) {
    data = data.logs.member_nick_update;
    if(!data.status) return;
    let ch = newMem.guild.channels.cache.get(data.channel);
    if(!ch) return;
    let embed = new Discord.MessageEmbed()
      .setColor(data.color)
      .setAuthor(newMem.user.tag, newMem.user.displayAvatarURL({ dynamic:true }))
      .setFooter(newMem.guild.name, newMem.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    if(oldMem.nickname && newMem.nickname) {
      embed.setDescription(`${newMem.user}'s nickname has been changed.`);
    } else if(oldMem.nickname && !newMem.nickname) {
      embed.setDescription(`${newMem.user}'s nickname has been reset.`);
    } else if(!oldMem.nickname && newMem.nickname) {
      embed.setDescription(`${newMem.user}'s nickname has been changed.`);
    }
    if(oldMem.nickname) embed.addField(`Old Nickname`, oldMem.nickname);
    if(newMem.nickname) embed.addField(`New Nickname`, newMem.nickname);
    const entry = await newMem.guild.fetchAuditLogs({ 
      type: "MEMBER_UPDATE",
      limit: 1
    }).then(audit => audit.entries.first());
    if(entry) {
      if(entry.target.id === newMem.user.id) {
        await embed.addField(`Responsible Moderator`,`${entry.executor}`);
        await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
      }
    }
    ch.send({ embeds:[embed] }).catch(err => 0);
  } else if(oldMem.roles.cache.size !== newMem.roles.cache.size) {
    data = data.logs.member_roles_update;
    if(!data.status) return;
    let ch = newMem.guild.channels.cache.get(data.channel);
    if(!ch) return;
    let added_roles = newMem.roles.cache.filter(r => !oldMem.roles.cache.find(rr => rr.id === r.id)).map(rrr => rrr);
    let removed_roles = oldMem.roles.cache.filter(r => !newMem.roles.cache.find(rr => rr.id === r.id)).map(rrr => rrr);
    let embed = new Discord.MessageEmbed()
      .setColor(data.color)
      .setAuthor(newMem.user.tag, newMem.user.displayAvatarURL({ dynamic:true }))
      .setFooter(newMem.guild.name, newMem.guild.iconURL({ dynamic: true }))
      .setTimestamp()
      .setDescription(`**✍️ ${newMem.user} has been updated.**`);
      if(removed_roles.length > 0) embed.addField(`Roles`, `${removed_roles.map(r => `⛔ ${r.name}`).join("\n")}`);
    if(added_roles.length > 0) embed.addField(`Roles`, `${added_roles.map(r => `✅ ${r.name}`).join("\n")}`);
    const entry = await newMem.guild.fetchAuditLogs({ 
      type: "MEMBER_ROLE_UPDATE",
      limit: 1
    }).then(audit => audit.entries.first());
    if(entry) {
      if(entry.target.id === newMem.user.id) {
        await embed.addField(`Responsible Moderator`,`${entry.executor}`);
        await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
      }
    }
    ch.send({ embeds:[embed] }).catch(err => 0);
    }
  }
}