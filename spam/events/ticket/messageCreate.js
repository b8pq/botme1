const Discord = require("discord.js");
const db = require("../../models/user");
const guild_db = require("../../models/guild");

module.exports = {
  name: "messageCreate",
  run: async(client, message) => {
    if(!message.guild || !message.member || message.author.bot) return;
    if(message.content != "ادارة" && message.content != "اداره") return;
    let data = await guild_db.findOne({
      id: message.guild.id
    });
    if(!data || !data.ticket.status) return;
    let user_data = await db.findOne({
      id: message.author.id,
      guildId: message.guild.id
    });
    if(user_data && user_data.tblack) return message.reply({ content: `❌ You are blacklisted from open tickets.` });
    let find = message.guild.channels.cache.find(c => c.topic && c.topic.split("\n")[0]?.slice(6) === message.author.id);
    if(find) return message.reply({ content: `❌ You already have a ticket ${find}` });
    let req_channel = message.guild.channels.cache.get(data.ticket.request);
    if(!req_channel) return message.reply({ content: `❌ Please tell owner to resetup ticket system.` });
    message.delete().catch(() => 0);
    let permissions = [
      {
        id: message.guild.id,
        deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      },
      {
        id: message.author.id,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      }
    ]
    let role = message.guild.roles.cache.get(data.ticket.role);
    if(role) {
      permissions.push({
        id: role.id,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      });
    }
    let embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription("React with 🔒 to close the ticket");
    let btn = new Discord.MessageButton()
      .setStyle("SECONDARY")
      .setCustomId(`close_ticket`)
      .setEmoji("🔒");
    let row = new Discord.MessageActionRow()
      .addComponents(btn);
    let channel = await message.guild.channels.create(message.author.username, {
      type: "GUILD_TEXT",
      permissionOverwrites: permissions,
      parent: data.ticket.category,
      topic: `user: ${message.author.id}\nadmin: waiting for accept`
    }).catch(err => 0);
    if(!channel) return;
    await channel.send({ content: data.ticket.message.replace("[user]", `${message.author}`).replace("[support]", `<@&${data.ticket.role}>`), embeds: [embed], components: [row], files: [data.ticket.image] }).catch(() => 0);
    let info_embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setAuthor({ name: message.author.tag + " (ID: " + message.author.id + ")", iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      .setDescription(`${message.author}\nName: ${message.author.tag}\nID: ${message.author.id}\nTicket: ${channel}`);
    let row_1 = new Discord.MessageActionRow()
      .addComponents(new Discord.MessageButton().setEmoji("✅").setStyle("SECONDARY").setLabel("Accept").setCustomId(`ticket_${channel.id}`));
    req_channel.send({ embeds: [info_embed], components: [row_1] }).catch(() => 0);
  }
}