const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildBanRemove",
  run: async(client, user) => {
    let guild = user.guild;
  if(!guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: guild.id
  });
  if(!data) return;
  data = data.logs.ban_remove;
  if(!data.status) return;
  let ch = guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic:true }))
    .setFooter(guild.name, guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(`🛬 ${user.user} unbanned.`);
  const entry = await guild.fetchAuditLogs({ 
    type: "GUILD_BAN_REMOVE",
    limit: 1
  }).then(audit => audit.entries.first());
  if(entry) {
    if(entry.target.id === user.user.id) {
      await embed.addField(`Responsible Moderator`,`${entry.executor}`);
      await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
    }
  }
  ch.send({ embeds:[embed] }).catch(err => 0);
  }
}