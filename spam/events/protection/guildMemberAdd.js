const Discord = require("discord.js");
const db = require("../../models/guild");

module.exports = {
  name: "guildMemberAdd",
  run: async(client, member) => {
    if(!member.user.bot) return;
    let data = await db.findOne({
      id: member.guild.id
    });
    if(!data || !data.protection.bots) return;
    member.kick("AntiBots Protection.").catch(() => 0);
  }
}