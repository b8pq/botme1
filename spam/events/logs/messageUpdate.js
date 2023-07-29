const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "messageUpdate",
  run: async(client, oldMessage, newMessage) => {
    if(!newMessage.guild || !newMessage.author || oldMessage.content === newMessage.content) return;
  if(!oldMessage.content || !newMessage.content) return;
  if(!newMessage.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: newMessage.guild.id
  });
  if(!data) return;
  data = data.logs.update_message;
  if(!data.status) return;
  let ch = newMessage.guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setAuthor(newMessage.author.username, newMessage.author.displayAvatarURL({ dynamic:true }))
    .setFooter(newMessage.guild.name)
    .setTimestamp()
    .setDescription(`**✏️ Message sent by ${newMessage.author} edited in ${newMessage.channel}. [jumb to message](${newMessage.url})**`)
    .addField(`Old Message:`, "```\n" + oldMessage.content + "\n```")
    .addField(`New Message:`, "```\n" + newMessage.content + "\n```");
    ch.send({ embeds:[embed] }).catch(err => 0);
  }
}