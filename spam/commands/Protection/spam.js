const Discord = require("discord.js");

module.exports = {
  name: "spam",
  description: "Setup spam settings.",
  usage: `
{prefix}spam create
{prefix}spam show
{prefix}spam message [on/off]
{prefix}spam chat [on/off]
{prefix}spam enter [on/off]
{prefix}spam new [on/off]
{prefix}spam reply [on/off]
{prefix}spam long [on/off]
{prefix}spam log [channel]
`,
  aliases: [],
  run: async (client, message, args, data) => {
    if (
      !data.owners.includes(message.author.id) &&
      message.author.id != message.guild.ownerId
    )
      return message.reply({
        content: `**❌ You must be owner to use this command.**`,
      });
    if (!args[0]) {
      message.content = `#help spam`;
      client.commands
        .find((c) => c.name === "help")
        .run(client, message, message.content.split(" ").slice(1), data);
      return;
    }
    if (args[0] === "create") {
      data.spam.message.status = true;
      data.spam.message.limit = 4;
      data.spam.message.time = 2;
      data.spam.new.status = true;
      data.spam.new.time = 30;
      data.spam.enter.status = true;
      data.spam.enter.limit = 10;
      data.spam.enter.time = 4;
      data.spam.chat.status = true;
      data.spam.chat.limit = 20;
      data.spam.chat.time = 5;
      data.spam.reply = true;
      data.spam.long = true;
      await data.save();
      message.reply({ content: `**✅ Done setup best spam settings.**` });
    } else if (args[0] === "show") {
      let embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setFooter({ text: message.guild.name })
        .addField(
          `Spam Message:`,
          `Status: **${data.spam.message.status ? "on" : "off"}**\nlimit: **${
            data.spam.message.limit
          }** message in **${data.spam.message.time}s**`,
          true
        )
        .addField(
          `Spam Chat.`,
          `Status: **${data.spam.chat.status ? "on" : "off"}**\nlimit: **${
            data.spam.chat.limit
          }** message in **${data.spam.chat.time}s**`,
          true
        )
        .addField(
          `Spam Enter.`,
          `Status: **${data.spam.enter.status ? "on" : "off"}**\nlimit: **${
            data.spam.enter.limit
          }** members in **${data.spam.enter.time}s**`,
          true
        )
        .addField(
          `New Account.`,
          `Status: **${data.spam.new.status ? "on" : "off"}**\ntime: **${
            data.spam.new.time
          } days or low**`,
          true
        )
        .addField(
          `Reply Message.`,
          `Status: **${data.spam.reply ? "on" : "off"}**`,
          true
        )
        .addField(
          `Long Message.`,
          `Status: **${data.spam.long ? "on" : "off"}**`,
          true
        )
        .addField(
          `Anti Words.`,
          `Status: **${data.spam.badwords.status ? "on" : "off"}**`,
          true
        )
        .addField(`Log Channel.`, `<#${data.spam.log}>`, true);
      message.reply({ embeds: [embed] });
    } else if (args[0] === "message") {
      if (!args[1] || (args[1] != "on" && args[1] != "off"))
        return message.reply({ content: `**Please type on or off.**` });
      if (args[1] === "on") {
        data.spam.message.status = true;
        let msg = await message.reply({
          content: `**how much the limit ? type a number.**`,
        });
        let collect = await message.channel.awaitMessages({
          filter: (m) => m.author.id === message.author.id,
          max: 1,
        });
        msg.delete().catch(() => 0);
        collect
          .first()
          .delete()
          .catch(() => 0);
        if (
          isNaN(collect.first().content) ||
          parseInt(collect.first().content) < 1
        )
          return message.reply({
            content: `**❌ Invalid number was provided.**`,
          });
        data.spam.message.limit = parseInt(collect.first().content);
        msg = await message.reply({
          content: `**how much time ? type a number in secends.**`,
        });
        collect = await message.channel.awaitMessages({
          filter: (m) => m.author.id === message.author.id,
          max: 1,
        });
        msg.delete().catch(() => 0);
        collect
          .first()
          .delete()
          .catch(() => 0);
        if (
          isNaN(collect.first().content) ||
          parseInt(collect.first().content) < 1
        )
          return message.reply({
            content: `**❌ Invalid number was provided.**`,
          });
        data.spam.message.time = parseInt(collect.first().content);
        await data.save();
        message.reply({ content: `**✅ Done setup spam message settings.**` });
      } else if (args[1] === "off") {
        if (!data.spam.message.status)
          return message.reply({
            content: `**❌ Spam message already disabled.**`,
          });
        data.spam.message.status = false;
        await data.save();
        message.reply({ content: `**✅ Done disabled spam message.**` });
      }
    } else if (args[0] === "chat") {
      if (!args[1] || (args[1] != "on" && args[1] != "off"))
        return message.reply({ content: `**Please type on or off.**` });
      if (args[1] === "on") {
        data.spam.chat.status = true;
        let msg = await message.reply({
          content: `**how much the limit ? type a number.**`,
        });
        let collect = await message.channel.awaitMessages({
          filter: (m) => m.author.id === message.author.id,
          max: 1,
        });
        msg.delete().catch(() => 0);
        collect
          .first()
          .delete()
          .catch(() => 0);
        if (
          isNaN(collect.first().content) ||
          parseInt(collect.first().content) < 1
        )
          return message.reply({
            content: `**❌ Invalid number was provided.**`,
          });
        data.spam.chat.limit = parseInt(collect.first().content);
        msg = await message.reply({
          content: `**how much time ? type a number in secends.**`,
        });
        collect = await message.channel.awaitMessages({
          filter: (m) => m.author.id === message.author.id,
          max: 1,
        });
        msg.delete().catch(() => 0);
        collect
          .first()
          .delete()
          .catch(() => 0);
        if (
          isNaN(collect.first().content) ||
          parseInt(collect.first().content) < 1
        )
          return message.reply({
            content: `**❌ Invalid number was provided.**`,
          });
        data.spam.chat.time = parseInt(collect.first().content);
        await data.save();
        message.reply({ content: `**✅ Done setup spam chat settings.**` });
      } else if (args[1] === "off") {
        if (!data.spam.chat.status)
          return message.reply({
            content: `**❌ Spam chat already disabled.**`,
          });
        data.spam.chat.status = false;
        await data.save();
        message.reply({ content: `**✅ Done disabled spam chat.**` });
      }
    } else if (args[0] === "enter") {
      if (!args[1] || (args[1] != "on" && args[1] != "off"))
        return message.reply({ content: `****Please type on or off.**.**` });
      if (args[1] === "on") {
        data.spam.enter.status = true;
        let msg = await message.reply({
          content: `**how much the limit ? type a number.**`,
        });
        let collect = await message.channel.awaitMessages({
          filter: (m) => m.author.id === message.author.id,
          max: 1,
        });
        msg.delete().catch(() => 0);
        collect
          .first()
          .delete()
          .catch(() => 0);
        if (
          isNaN(collect.first().content) ||
          parseInt(collect.first().content) < 1
        )
          return message.reply({
            content: `**❌ Invalid number was provided.**`,
          });
        data.spam.enter.limit = parseInt(collect.first().content);
        msg = await message.reply({
          content: `**how much time ? type a number in secends.**`,
        });
        collect = await message.channel.awaitMessages({
          filter: (m) => m.author.id === message.author.id,
          max: 1,
        });
        msg.delete().catch(() => 0);
        collect
          .first()
          .delete()
          .catch(() => 0);
        if (
          isNaN(collect.first().content) ||
          parseInt(collect.first().content) < 1
        )
          return message.reply({
            content: `**❌ Invalid number was provided.**`,
          });
        data.spam.enter.time = parseInt(collect.first().content);
        await data.save();
        message.reply({ content: `**✅ Done setup spam enter settings.**` });
      } else if (args[1] === "off") {
        if (!data.spam.enter.status)
          return message.reply({
            content: `**❌ Spam enter already disabled.**`,
          });
        data.spam.enter.status = false;
        await data.save();
        message.reply({ content: `**✅ Done disabled spam enter.**` });
      }
    } else if (args[0] === "new") {
      if (!args[1] || (args[1] != "on" && args[1] != "off"))
        return message.reply({ content: `**Please type on or off.**` });
      if (args[1] === "on") {
        data.spam.new.status = true;
        let msg = await message.reply({
          content: `**How old should the account be to add new ? type a number of days.**`,
        });
        let collect = await message.channel.awaitMessages({
          filter: (m) => m.author.id === message.author.id,
          max: 1,
        });
        msg.delete().catch(() => 0);
        collect
          .first()
          .delete()
          .catch(() => 0);
        if (
          isNaN(collect.first().content) ||
          parseInt(collect.first().content) < 1
        )
          return message.reply({
            content: `**❌ Invalid number was provided.**`,
          });
        data.spam.new.time = parseInt(collect.first().content);
        await data.save();
        message.reply({ content: `**✅ Done setup spam new settings.**` });
      } else if (args[1] === "off") {
        if (!data.spam.new.status)
          return message.reply({
            content: `**❌ Spam new already disabled.**`,
          });
        data.spam.new.status = false;
        await data.save();
        message.reply({ content: `**✅ Done disabled spam new.**` });
      }
    } else if (args[0] === "reply") {
      if (!args[1] || (args[1] != "on" && args[1] != "off"))
        return message.reply({ content: `**Please type on or off.**` });
      if (args[1] === "on") {
        if (data.spam.reply)
          return message.reply({
            content: `**❌ Spam reply already enabled.**`,
          });
        data.spam.reply = true;
        await data.save();
        message.reply({ content: `**✅ Done enabled spam reply.**` });
      } else if (args[1] === "off") {
        if (!data.spam.reply)
          return message.reply({
            content: `**❌ Spam reply already disabled.**`,
          });
        data.spam.reply = false;
        await data.save();
        message.reply({ content: `✅ Done disabled spam reply.` });
      }
    } else if (args[0] === "long") {
      if (!args[1] || (args[1] != "on" && args[1] != "off"))
        return message.reply({ content: `**Please type on or off.**` });
      if (args[1] === "on") {
        if (data.spam.long)
          return message.reply({
            content: `**❌ Spam long already enabled.**`,
          });
        data.spam.long = true;
        await data.save();
        message.reply({ content: `**✅ Done enabled spam long.**` });
      } else if (args[1] === "off") {
        if (!data.spam.log)
          return message.reply({
            content: `**❌ Spam long already disabled.**`,
          });
        data.spam.long = false;
        await data.save();
        message.reply({ content: `**✅ Done disabled spam long.**` });
      }
    } else if (args[0] === "log") {
      let channel =
        message.mentions.channels.first() ||
        message.guild.channels.cache.get(args[1]);
      if (
        !channel ||
        (channel.type != "GUILD_NEWS" && channel.type != "GUILD_TEXT")
      )
        return message.reply({
          content: `**❌ Please provide valid channel.**`,
        });
      data.spam.log = channel.id;
      await data.save();
      message.reply({ content: `**✅ Done setup spam log.**` });
    }
  },
};
