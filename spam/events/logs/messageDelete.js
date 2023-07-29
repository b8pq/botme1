const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "messageDelete",
  run: async(client, message) => {
    if(!message.guild || !message.member || (!message.content && message.attachments.filter(i => i.contentType.startsWith("image")).size < 1)) return;
  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: message.guild.id
  });
  if(!data) return;
  data = data.logs.delete_message;
  if(!data.status) return;
  let ch = message.guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic:true }))
    .setFooter(message.guild.name)
    .setTimestamp()
    .setDescription(`**🗑️ Message sent by ${message.author} deleted in ${message.channel}**${message.content ? `\n${message.content}` : ""}`);
    if(message.attachments.filter(m => m.contentType.startsWith("image")).size > 0) embed.setImage(message.attachments.filter(m => m.contentType.startsWith("image")).first().url);
  const entry = await message.guild.fetchAuditLogs({ 
    type: "MESSAGE_DELETE",
    limit: 1
  }).then(audit => audit.entries.first());
  if(entry) {
    if(entry.target.id == message.author.id) {
      await embed.addField(`Responsible Moderator`,`${entry.executor}`);
      await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
    }
  }
    ch.send({ embeds:[embed] }).catch(err => 0);
  }
}