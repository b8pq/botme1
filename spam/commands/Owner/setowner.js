const Discord = require("discord.js");
const devs = require("../../config.json").devs;
const db = require("../../models/bot");

module.exports = {
  name: "setowner",
  description: "This command for bot's developer only.",
  usage: "This command for bot's developer only.",
  aliases: [],
  run: async (client, message, args, data) => {
  if (
!devs.includes(message.author.id) && message.author.id != message.guild.ownerId)
return;
    let user = args[0]
      ? message.mentions.members.first() ||
        (await message.guild.members.fetch(args[0]).catch(() => 0))
      : null;
    if (!user || user.user.bot)
      return message.reply({ content: `❌ Please provide valid user.` });
    let bot_data = await db.findOne({
      id: client.user.id,
    });
    if (!bot_data) {
      bot_data = await db.create({
        id: client.user.id,
      });
    }
    bot_data.ownerId = user.user.id;
    await bot_data.save();
    message.reply({ content: `✅ Done setup new owner.` });
  },
};
