const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildMemberRemove",
  run: async(client, member) => {
    if(!member.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: member.guild.id
  });
  if(!data) return;
  data = data.logs.member_leave;
  if(!data.status) return;
  let ch = member.guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setFooter(member.guild.name, member.guild.iconURL({ dynamic:true }))
    .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(`**${member.user} left.**`);
  const entry = await member.guild.fetchAuditLogs({ 
    type: "MEMBER_KICK",
    limit:1
  }).then(audit => audit.entries.first());
  if(entry) {
    if(entry.target.id === member .user.id) {
      await embed.addField(`Responsible Moderator`,`${entry.executor}`);
      await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
    }
  }
    ch.send({ embeds:[embed] }).catch(err => 0);
  }
}