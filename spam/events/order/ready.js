const Discord = require("discord.js");
const db = require("../../models/guild");
const { createList } = require("../../functions");

module.exports = {
  name: "ready",
  run: (client) => {
    setInterval(async () => {
      let data = await db.find();
      data.forEach(async (d) => {
        let guild = client.guilds.cache.get(d.id);
        if (!guild) return;
        if (!d.order.status) return;
        let channel = guild.channels.cache.get(d.order.channel);
        if (!channel) return;
        let messages = {
          size: 1,
        };
        do {
          messages = await channel.messages
            .fetch({ limit: 100 })
            .catch((err) => ({ size: 0 }));
          if (messages.size > 0) {
            await channel.bulkDelete(messages).catch((err) => 0);
          }
        } while (messages.size > 0);
        let colors_list = await createList(guild, d.colors_background);
        channel
          .send({ files: [{ name: "colors.png", attachment: colors_list }] })
          .catch(() => 0);
      });
    }, 300000);
  },
};
