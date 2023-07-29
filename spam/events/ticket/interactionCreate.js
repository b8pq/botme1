const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "interactionCreate",
  run: async(client, inter) => {
    if(!inter.isButton()) return;
    if(inter.customId === "close_ticket") {
      let id = inter.channel.topic;
      if(!id) return;
      id = id.split("\n")[1];
      if(!id) return;
      id = id.slice(7);
      if(isNaN(id) || id != inter.user.id) return inter.reply({ content: `You must be ticket admin to close it.`, ephemeral: true });
      await inter.reply({ content: `Ticket will be close after some seconds.` });
      setTimeout(() => {
        inter.channel.delete().catch(() => 0);
      }, 5000);
    } else if(inter.customId.startsWith("ticket")) {
      let data = await db.findOne({
        id: inter.guild.id
      });
      if(!data || (!inter.member.roles.cache.has(data.ticket.role) && !inter.member.permissions.has("ADMINISTRATOR"))) return inter.reply({ content: `Missing Access`, ephemeral: true });
      let channel = inter.guild.channels.cache.get(inter.customId.split("_")[1]);
      if(!channel) return inter.message.delete().catch(() => 0);
      let topic = channel.topic;
      if(!topic) return;
      topic = topic.split("\n");
      topic[1] = `admin: ${inter.user.id}`;
      topic = topic.join("\n");
      channel.setTopic(topic).catch(() => 0);
      channel.send({ content: `Ticket was accepted by: ${inter.user}` }).catch(() => 0);
      await inter.reply({ content: `Done, you was claimed ticket ${channel}`, ephemeral: true });
      inter.message.delete().catch(() => 0);
    }
  }
}