const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "channelUpdate",
  run: async(client, oldCh, newCh) => {
    if(!newCh.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: newCh.guild.id
  });
  if(!data) return;
  data = data.logs.update_channel;
  if(!data.status) return;
  let ch = newCh.guild.channels.cache.get(data.channel);
  if(!ch) return;
  if(newCh.name !== oldCh.name) {
    let embed = new Discord.MessageEmbed()
      .setColor(data.color)
      .setAuthor(newCh.guild.name, newCh.guild.iconURL({ dynamic:true }))
      .setFooter(newCh.guild.name)
      .setTimestamp()
      .setDescription(`**🏠 Channel Updated: \`${newCh.name}\`**`)
      .addField(`Old name`, oldCh.name)
      .addField(`New name`, newCh.name);
    const entry = await newCh.guild.fetchAuditLogs({ 
      type: "CHANNEL_UPDATE",
      limit:1
    }).then(audit => audit.entries.first());
    if(entry) {
      if(entry.target.id === newCh.id) {
        await embed.addField(`Responsible Moderator`,`${entry.executor}`);
        await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
      }
    }
    ch.send({ embeds:[embed] }).catch(err => 0);
    }
  }
}