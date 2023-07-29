const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "voiceStateUpdate",
  run: async(client, oldUser, newUser) => {
    let user = await newUser.guild.members.fetch(newUser.id);
  if(!user) return;
  let oldCh = newUser.guild.channels.cache.find(c => c.id === oldUser.channelId);
  let newCh = newUser.guild.channels.cache.find(c => c.id === newUser.channelId);
  let data = await db.findOne({
    id: newUser.guild.id
  });
  if(!data) return;
  if(oldUser.channelId == null && newUser.channelId != null) {
    data = data.logs.voice_join;
    if(!data.status) return;
    let ch = newUser.guild.channels.cache.get(data.channel);
    if(!ch) return;
    let embed = new Discord.MessageEmbed()
      .setColor(data.color)
      .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic:true }))
      .setFooter(newUser.guild.name)
      .setTimestamp()
      .setDescription(`**${user} joined voice channel  \`${newCh?.name}\` .**`);
    ch.send({ embeds: [embed] }).catch(err => 0);
  } else if(oldUser.channelId != null && newUser.channelId == null) {
    data = data.logs.voice_leave;
    if(!data.status) return;
    let ch = newUser.guild.channels.cache.get(data.channel);
    if(!ch) return;
    let embed = new Discord.MessageEmbed()
      .setColor(data.color)
      .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic:true }))
      .setFooter(newUser.guild.name)
      .setTimestamp()
      .setDescription(`**${user} left voice channel  \`${oldCh?.name}\` .**`);
    const entry = await newUser.guild.fetchAuditLogs({ 
      type: "MEMBER_DISCONNECT",
      limit: 1
    }).then(audit => audit.entries.first());
    if(entry) {
      if(entry.target?.id === user.user.id) {
        await embed.addField(`Responsible Moderator`,`${entry.executor}`);
        await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
      }
    }
    ch.send({ embeds: [embed] }).catch(err => 0);
  } else if(oldUser.channelId != newUser.channelId) {
    data = data.logs.voice_move;
    if(!data.status) return;
    let ch = newUser.guild.channels.cache.get(data.channel);
    if(!ch) return;
    let embed = new Discord.MessageEmbed()
      .setColor(data.color)
      .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic:true }))
      .setFooter(newUser.guild.name)
      .setTimestamp()
      .setDescription(`**${user} changed voice channel.**`)
      .addField(`Old Channel:`, oldCh?.name || "null")
      .addField(`New Channel:`, newCh?.name || "null");
    const entry = await newUser.guild.fetchAuditLogs({ 
      type: "MEMBER_MOVE",
      limit: 1
    }).then(audit => audit.entries.first());
    if(entry) {
      if(entry.target?.id === user.user.id) {
        await embed.addField(`Responsible Moderator`,`${entry.executor}`);
        await embed.setFooter(entry.executor.tag, entry.executor.displayAvatarURL({ dynamic:true }));
      }
    }
    ch.send({ embeds: [embed] }).catch(err => 0);
  } else if((!oldUser.serverMute && newUser.serverMute) || (oldUser.serverDeaf && !newUser.serverDeaf) || (oldUser.serverMute && !newUser.serverMute) || (!oldUser.serverDeaf && newUser.serverDeaf)) {
    data = data.logs.voice_state;
    if(!data.status) return;
    let ch = newUser.guild.channels.cache.get(data.channel);
    if(!ch) return;
    let embed = new Discord.MessageEmbed()
      .setColor(data.color)
      .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic:true }))
      .setFooter(newUser.guild.name)
      .setTimestamp()
      .setDescription(`**Voice state of ${user} has been updated.**`)
      .addField(`🎙️ Server Mute`, `**${newUser.serverMute ? "True" : "False" }**`)
      .addField(`🔈 Server Defean`, `**${newUser.serverDeaf ? "True" : "False" }**`);
    ch.send({ embeds: [embed] }).catch(err => 0);
    }
  }
}