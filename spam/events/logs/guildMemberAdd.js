const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildMemberAdd",
  run: async(client, member) => {
    if(!member.guild.me.permissions.has("ADMINISTRATOR")) return;
  let data = await db.findOne({
    id: member.guild.id
  });
  if(!data) return;
  data = data.logs.member_join;
  if(!data.status) return;
  let ch = member.guild.channels.cache.get(data.channel);
  if(!ch) return;
  let embed = new Discord.MessageEmbed()
    .setColor(data.color)
    .setFooter(member.guild.name, member.guild.iconURL({ dynamic:true }))
    .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(`**${member.user} joined the server.**`)
    .addField(`⏲️ Age of account:`, `<t:${Math.floor((new Date(member.user.createdAt)).getTime()/1000)}:R>`);
    ch.send({ embeds:[embed] }).catch(err => 0);
  }
}