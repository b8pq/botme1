const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildMemberAdd",
  run: async(client, member) => {
    let data = await db.findOne({
      id: member.guild.id
    });
    if(!data || !data.auto.status) return;
    member.roles.add(data.auto.role).catch(() => 0);
  }
}