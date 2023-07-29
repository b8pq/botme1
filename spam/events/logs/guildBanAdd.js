const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildBanAdd",
  run: async(client, ban) => {
    let guild = ban.guild;
  let user = ban.user;
  if(!guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: guild.id
  });
  if(!data) return;
  data = data.logs.ban_add;
  if(!data.status) return;
  let ch = guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setAuthor(user.tag, user.displayAvatarURL({ dynamic:true }))
    .setFooter(guild.name, guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(`✈️ ${user} banned from the server.`);
  const entry = await guild.fetchAuditLogs({ 
    type: "GUILD_BAN_ADD",
    limit: 1
  }).then(audit => audit.entries.first());
  if(entry) {
    if(entry.target.id === user.id) {
      await embed.addField(`Responsible Moderator`,`${entry.executor}`);
      await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
    }
  }
  ch.send({ embeds:[embed] }).catch(err => 0);
  }
}