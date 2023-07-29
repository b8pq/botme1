const guild_db = require("../../models/guild");
const { tempMute } = require("../../functions");
let zakhrafa = ["*", "/", ".", "_", "-"];
let message_map = new Map();
let chat_map = new Map();

module.exports = {
  name: "messageCreate",
  run: async (client, message) => {
    if (
      !message.guild ||
      !message.member ||
      !message.content ||
      message.author.id === client.user.id
    )
      return;
    if (
      message.member.permissions.has("ADMINISTRATOR") ||
      message.member.permissions.has("MANAGE_GUILD")
    )
      return;
    let data = await guild_db.findOne({
      id: message.guild.id,
    });
    if (!data) return;

    //badwords
    if (data.spam.badwords.status) {
      let content = message.content;
      zakhrafa.forEach((z) => {
        content = content?.split(z).join("");
      });
      if (content) {
        let fil = data.spam.badwords.words.filter((w) =>
          content.toLowerCase().includes(w.toLowerCase())
        );
        if (fil.length > 0) {
          message.delete().catch(() => 0);
          await tempMute(
            message.member,
            `Badwords (||${fil.join(", ")}||)`,
            3153600000000
          );
          message.channel.send({
            content: `${message.author} muted for sending badwords.`,
          });
          return;
        }
      }
    }

    //long messages
    if (data.spam.long) {
      if (message.content.length > 500) {
        message.delete().catch(() => 0);
        await tempMute(message.member, `Long message`, 2700000);
        message.channel.send({
          content: `${message.author} muted for sending long message.`,
        });
        return;
      }
    }
    //reply message
    if (data.spam.reply) {
      if (message.mentions.repliedUser) {
        message.delete().catch(() => 0);
        await tempMute(message.member, `Reply message`, 2700000);
        message.channel.send({
          content: `${message.author} muted for replied to message.`,
        });
        return;
      }
    }

    //message spam
    if (data.spam.message.status) {
      let d = message_map.get(message.channel.id + message.author.id);
      if (!d) d = 0;
      d += 1;
      message_map.set(message.channel.id + message.author.id, d);
      if (d >= data.spam.message.limit) {
        await tempMute(message.member, `Spam messages`, 2700000);
        let msgs = await message.channel.messages
          .fetch({ limit: 50 })
          .catch(() => 0);
        if (msgs) {
          msgs = msgs
            .filter((m) => m.author.id == message.author.id)
            .map((mm) => mm);
          if (msgs.length) {
            msgs = msgs.slice(0, data.spam.message.limit);
            message.channel.bulkDelete(msgs).catch(() => 0);
          }
        }
        message.channel.send({
          content: `${message.author} muted for spam messages.`,
        });
      }
      setTimeout(() => {
        message_map.set(message.channel.id + message.author.id, 0);
      }, data.spam.message.time * 1000);
    }

    //chat spam
    if (data.spam.chat.status) {
      let d = chat_map.get(message.channel.id);
      if (!d) d = 0;
      d += 1;
      chat_map.set(message.channel.id, d);
      if (d >= data.spam.chat.limit) {
        await message.channel.permissionOverwrites
          .edit(message.guild.id, {
            SEND_MESSAGES: false,
          })
          .catch(() => 0);
        let msgs = await message.channel.messages
          .fetch({ limit: data.spam.chat.limit })
          .catch(() => 0);
        if (msgs) {
          message.channel.bulkDelete(msgs).catch(() => 0);
        }
        message.channel
          .send({ content: `Channel locked for spam chat.` })
          .catch(() => 0);
      }
      setTimeout(() => {
        chat_map.set(message.channel.id, 0);
      }, data.spam.chat.time * 1000);
    }
  },
};
