const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "channelDelete",
  run: async(client, channel) => {
    if(!channel.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: channel.guild.id
  });
  if(!data) return;
  data = data.logs.delete_channel;
  if(!data.status) return;
  let ch = channel.guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setAuthor(channel.guild.name, channel.guild.iconURL({ dynamic:true }))
    .setFooter(channel.guild.name)
    .setTimestamp()
    .setDescription(`**🏠 Channel Deleted: \`${channel.name}\`**`);
  const entry = await channel.guild.fetchAuditLogs({ 
    type: "CHANNEL_DELETE",
    limit:1
  }).then(audit => audit.entries.first());
  if(entry) {
    if(entry.target.id === channel.id) {
      await embed.addField(`Responsible Moderator`,`${entry.executor}`);
      await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
    }
  }
  ch.send({ embeds:[embed] }).catch(err => 0);
  }
}