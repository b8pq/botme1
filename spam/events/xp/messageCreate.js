const db = require("../../models/user");
const cooldown = new Map();
module.exports = {
  name: "messageCreate",
  run: async(client, message) => {
    if(!message.guild || message.author.bot) return;
    let cool = cooldown.get(message.author.id);
    if(cool > Date.now()) return;
    cooldown.set(message.author.id, Date.now() + 5000);
    let data = await db.findOne({
      id: message.author.id,
      guildId: message.guild.id
    });
    if(!data) {
      data = await db.create({
        id: message.author.id,
        guildId: message.guild.id
      });
    }
    let random = Math.floor(Math.random() * 1) + 1;
    data.xp.text += random;
    await data.save();
  }
}