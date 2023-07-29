//--------------------كل البكجات----------------------\
const express = require("express");
const app = express();
app.listen(() => console.log(""));
app.use("/ping", (req, res) => {
  res.send(new Date());
});
const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const Database = require("st.db");
const client = new Discord.Client(
  {
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES,
      Discord.Intents.FLAGS.GUILD_PRESENCES,
      Discord.Intents.FLAGS.GUILD_MEMBERS,
      Discord.Intents.FLAGS.GUILD_INVITES,
      Discord.Intents.FLAGS.GUILD_MEMBERS,
    ],
  },
  {
    disableMentions: "everyone",
    restTimeOffset: 0,
  }
);
const logs = require("discord-logs");
logs(client, {
  debug: true,
});

const cooldownn = new Set();
const moment = require(`moment`);
const { readdirSync } = require("fs");
const db = require("quick.db");
const ms = require("ms");
const { title } = require("process");
const { channel } = require("diagnostics_channel");
const { get } = require("node-superfetch");
const ytdl = require("ytdl-core");
const { fail } = require("assert");
const enmap = require("enmap");
require("discord-reply");
const canvas = require("canvas");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("arefruqaa-regular.ttf", { family: "arefruqaa" });
const { inviteTracker } = require("discord-inviter");
const axios = require("axios");
const mongoose = require("mongoose");
require("discord-banner")();
const { measureMemory } = require("vm");
const { text } = require("cheerio/lib/static");
const humanizeDuration = require("humanize-duration");
const { parse } = require("twemoji-parser");
const { DiscordMenus, ButtonBuilder, MenuBuilder } = require("discord-menus");
const { QuickDB } = require("quick.db");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const disbut = require("discord-buttons");
disbut(client);
const fs = require("fs");
mongoose
  .connect(
    "mongodb://wexigow375:4XgQf06McQpj0vs0@ac-9ggrhio-shard-00-00.ftuksez.mongodb.net:27017,ac-9ggrhio-shard-00-01.ftuksez.mongodb.net:27017,ac-9ggrhio-shard-00-02.ftuksez.mongodb.net:27017/test?replicaSet=atlas-s94h8n-shard-0&ssl=true&authSource=admin",
    {
      //تشيل process.env.database وتحط رابط الداتا بيس بين علامتين ""
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

//--------------------ايفنتات----------------------\\
let array1 = ["on", "off"];
let array = ["on", "off"];
let array33 = ["on", "off"];
let array37 = ["on", "off"];
let array6 = ["on", "off"];
let array7 = ["on", "off"];
let array5 = ["on", "off"];
let array9 = ["on", "off"];
let array11 = ["on", "off"];
client.config = require("./config.json");
const v = new Database("Voicebase.json");
canvas.registerFont("./Roboto-Bold.ttf", { family: "Roboto" });
const db1 = require("./models/welcomer");
const guild_db = require("./models/guild");
const user_db = require("./models/user");
const tempData = new Collection();
tempData.set("bots", []);
const schema = mongoose.model(
  "commandroles_",
  new mongoose.Schema({
    roles: Array,
    namet: String,
    server: String,
  })
);

process.on("unhandledRejection", (reason) => console.log(reason));
process.on("error", (err) => console.log(err));

//--------------------اساسيات البوت----------------------\\

const token = client.config.token;

const {
  VIP,
  IDSERVER,
  ADMINS,
  SAPI,
  YAPI,
  default_prefix,
  PREFIX,
  NUMBER,
  OWNER_ID,
  COLOR,
  FOOTERN,
  FOOTERP,
} = require("./config.json");
const guild = require("./models/guild");
client.vip = VIP;
client.admins = ADMINS;
client.def = default_prefix;
client.prefix = PREFIX;
client.number = NUMBER;
client.owner_id = OWNER_ID;
client.color = COLOR;
client.footer_name = FOOTERN;
client.footer_photo = FOOTERP;
client.idserver = IDSERVER;
client.sapi = SAPI;
client.yapi = YAPI;
client.commands = new Collection();
client.queue = new Map();

client.on("ready", async () => {
  console.log(`${client.user.tag} Connected`);
});

const ownersArray = [
  "262631693972668416",
  "698564120626069594",
  "429422345762111499",
];

setTimeout(async () => {
  var data = fs.readFileSync("./tokens.json");
  var parsedData = JSON.parse(data);
  var tokens_data = parsedData;
  if (!tokens_data[0]) return;

  tokens_data.forEach((token) => {
    runBotSystem(token.token).catch(() => 0);
  });
}, 3000);
const devs = ADMINS;
const prefix = PREFIX;
client.on("message", async (message) => {
  if (!message.guild || message.author.bot) return;
  if (message.content.startsWith(prefix + "atoken")) {
    if (!ownersArray.includes(message.author.id)) return;
    let args = message.content.split(" ");

    if (!args[1])
      return message.lineReplyNoMention(
        `> ❌ **One of the args is invalid!**\nUsage: ${prefix}atoken [\`bot-token\`] [\`server-id\`] [\`owner-id\`] [\`vip-number\`] [\`time\`]`
      );

    if (!args[2])
      return message.lineReplyNoMention(
        `> ❌ **One of the args is invalid!**\nUsage: ${prefix}atoken [\`bot-token\`] [\`server-id\`] [\`owner-id\`] [\`vip-number\`] [\`time\`]`
      );

    if (!args[3])
      return message.lineReplyNoMention(
        `> ❌ **One of the args is invalid!**\nUsage: ${prefix}atoken [\`bot-token\`] [\`server-id\`] [\`owner-id\`] [\`vip-number\`] [\`time\`]`
      );

    if (!args[4])
      return message.lineReplyNoMention(
        `> ❌ **One of the args is invalid!**\nUsage: ${prefix}atoken [\`bot-token\`] [\`server-id\`] [\`owner-id\`] [\`vip-number\`] [\`time\`]`
      );

    if (!args[5])
      return message.lineReplyNoMention(
        `> ❌ **One of the args is invalid!**\nUsage: ${prefix}atoken [\`bot-token\`] [\`server-id\`] [\`owner-id\`] [\`vip-number\`] [\`time\`]`
      );

    var data = fs.readFileSync("./tokens.json");
    data = JSON.parse(data);
    const token = args[1];
    existToken = data.find((tok) => tok.token == token);
    if (existToken)
      return message
        .lineReplyNoMention(`> **❌ Token already exist.**`)
        .catch(() => 0);
    let result = undefined;
    try {
      result = await runBotSystem(token);
    } catch (error) {
      return message
        .lineReplyNoMention(`> 🛑 **Error:** ${error}`)
        .then(console.log(error))
        .catch(() => 0);
    }
    if (isNaN(result))
      return message
        .lineReplyNoMention(`> 🛑 **Token Error:** ${result}`)
        .catch(() => 0);
    let i = 0;
    var oldtime = db.get(`time`);
    var time = new Date().getTime() + ms(args[5]);
    if (!db.has(`time`)) {
      db.set(`time`, []);
    }
    data.push({
      token: token,
      id: result,
      server: args[2],
      owner: args[3],
      number: args[4],
      time: time,
    });
    db.push(`time`, {
      time: time,
      timems: ms(args[5]),
      guild_id: args[2],
    });
    console.log(`Owner of the bot now is: ${devs}`);
    fs.writeFile(
      "./tokens.json",
      JSON.stringify(data, null, 4),
      "utf8",
      (err) => {
        if (err) throw err;
      }
    );
    return message
      .lineReplyNoMention(
        `**Client info 🔽 .**\n\`\`\`
Client id : ${result}
Client owner : ${args[3]}
Client server : ${args[2]}
Client number : ${args[4]}
Client time : ${time}
Client link : https://discord.com/api/oauth2/authorize?client_id=${result}&permissions=0&scope=bot
\`\`\``
      )
      .then(
        message.author.send(
          `**Bot number** _${args[4]}_ **will end on this time:** <t:${time
            .toString()
            .slice(0, 10)}:R>`
        )
      )
      .catch(() => 0);
  } else if (message.content.startsWith(prefix + "dtoken")) {
    if (!ownersArray.includes(message.author.id)) return;
    let args = message.content.split(" ");

    if (!args[1])
      return message.lineReplyNoMention(
        `> ❌ **One of the args is invalid!**\nUsage: ${prefix}dtoken [\`bot-token\`] [\`owner-id\`] `
      );

    if (!args[2])
      return message.lineReplyNoMention(
        `> ❌ **One of the args is invalid!**\nUsage: ${prefix}dtoken [\`bot-token\`] [\`owner-id\`] `
      );

    var data = fs.readFileSync("./tokens.json");
    data = JSON.parse(data);
    const tokens = args.slice(1);
    let i = 0;
    var oldtime = db.get(`time`);
    const smith_lst = oldtime.filter((guilds) => guilds !== oldtime[i]);
    db.set("time", smith_lst);
    data = data.filter((token) => !tokens.includes(token?.token || token?.id));
    fs.writeFile(
      "./tokens.json",
      JSON.stringify(data, null, 4),
      "utf8",
      (err) => {
        if (err) throw err;
      }
    );
    return message.lineReplyNoMention(`> **✅ Token deleted.**`).catch(() => 0);
  }
});

client.on(`message`, async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  const mention =
    client.users.cache.get(args[0]) || message.mentions.users.first();

  if (command === `resub`) {
    if (!ownersArray.includes(message.member.user.id)) return;
    if (!args[0])
      return message.lineReplyNoMention(
        `> :x: **Please type day or month or year**\nUsage: ${prefix}resub [\`bot-token\`] [\`server-id\`] [\`time\`]`
      );
    if (!args[1])
      return message.lineReplyNoMention(
        `> :x: **Please type day or month or year**\nUsage: ${prefix}resub [\`bot-token\`] [\`server-id\`] [\`time\`]`
      );
    if (!args[2])
      return message.lineReplyNoMention(
        `> :x: **Please type day or month or year**\nUsage: ${prefix}resub [\`bot-token\`] [\`server-id\`] [\`time\`]`
      );
    let i = 0;
    var oldtime = db.get(`time`);
    const smith_lst = oldtime.filter((guilds) => guilds !== oldtime[i]);
    var time = new Date().getTime() + ms(args[2]);
    if (!db.has(`time`)) {
      db.set(`time`, []);
    }
    var data = fs.readFileSync("./tokens.json");
    data = JSON.parse(data);
    const token = args[0];
    tokenObj = data.find((tok) => tok.token == token);
    await runBotSystem(tokenObj.token);
    message.lineReplyNoMention(
      `>>> **Premium Number :** ${
        tokenObj.number
      }\n**Premium Ends in :** <t:${time
        .toString()
        .slice(0, 10)}:R> \n**Sign in :** <@${tokenObj.owner}>`
    );

    db.push(`time`, {
      time: time,
      timems: ms(args[2]),
      guild_id: args[1],
    });
  } else if (command === `removesubs`) {
    var time = new Date().getTime();
    var oldtime = db.get(`time`);
    let i = 0;
    if (oldtime === null || !oldtime) return;
    const smith_lst = oldtime.filter((guilds) => guilds !== oldtime[i]);
    db.set(`time`, smith_lst);
    message.react(`✅`);
  } else if (command === `allvip`) {
    var time = new Date().getTime();

    var guilds = db.get(`time`);

    let i = 0;
    while (i < guilds.length) {
      if (guilds === null || !guilds) return;
      if (guilds[i].guild_id === message.guild.id) {
        var timeold = guilds[i].time + guilds[i].timems;
        var timenow = new Date().getTime();
        var time = timeold - timenow;

        message
          .lineReplyNoMention(
            `>>> **Premium Number :** ${
              tokenObj.number
            } \n**Premium Ends in :** ${humanizeDuration(Number(time), {
              round: true,
            })} \n**Sign in :** <@${tokenObj.owner}>`
          )
          .catch(() => {
            message.lineReplyNoMention(
              `>>> **Premium Number :** ${tokenObj.number} \n**Premium Ends in :** no limt \n**Sign in :** <@${tokenObj.owner}>`
            );
          });
      }
      i++;
    }
  }
});

async function runBotSystem(token) {
  const client83883 = new Discord.Client(
    {
      intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
      ],
    },
    {
      disableMentions: "everyone",
      restTimeOffset: 0,
    }
  );
  const logs = require("discord-logs");
  logs(client83883, {
    debug: true,
  });
  const tracker = new inviteTracker(client83883);

  const { WebhookClient } = require("discord.js");
  const webhookUrl =
    "https://discord.com/api/webhooks/1127747270608158782/VK6YoAgGeltexvsKHn6PoA9uIgb_iC7lThk1L5nDKZID33HP_KUFfPBonFAy1iWA4V9_"; //Discord webhok url
  const match = webhookUrl.match(/\/webhooks\/(\d+)\/([\w-]+)/);
  const webhookId = match[1];
  const webhookToken = match[2];
  const webhook = new WebhookClient({ id: webhookId, token: webhookToken });

  client83883.on(`message`, async (message) => {
    try {
      let game = db.get(`status_${message.guild.id}`) || "avar store.";
      let status = [game]; //الكلام
      let S = Math.floor(Math.random() * status.length);
      client83883.user.setActivity(status[S], {
        type: "STREAMING",
        url: "https://www.twitch.tv/idk",
      });
    } catch (err) {
      console.log(err);
    }
  });

  //--------------------بريميوم----------------------\\

  const owner_id = OWNER_ID;
  const number = NUMBER;
  const vip = VIP;

  client83883.on("ready", async () => {
    let newData = tempData.get("bots");
    newData.push(client83883);
    tempData.set(`bots`, newData);
    console.log(
      `${client83883.user.tag} Connected\nhttps://discord.com/api/oauth2/authorize?83883_id=${client83883.user.id}&permissions=0&scope=bot`
    );
    let int = setInterval(async () => {
      var data = fs.readFileSync("./tokens.json");
      data = JSON.parse(data);
      tokenObj = data.find((tokenBot) => tokenBot.token == token);
      if (!tokenObj) {
        client83883.destroy()?.catch(() => 0);
        return clearInterval(int);
      }
      if (tokenObj.server) {
        let viiip = `${tokenObj.server}`;
        client83883.guilds.cache.forEach((guild) => {
          if (viiip.includes(guild.id)) return;
          else guild.leave().catch(() => 0);
        }, 5000);
      }
    });
  });

  client83883.on("guildCreate", async (guild) => {
    let newData = tempData.get("bots");
    newData.push(client83883);
    tempData.set(`bots`, newData);

    var data = fs.readFileSync("./tokens.json");
    data = JSON.parse(data);
    tokenObj = data.find((tokenBot) => tokenBot.token == token);
    if (!tokenObj) {
      client83883.destroy()?.catch(() => 0);
      return clearInterval(int);
    }

    if (tokenObj.server) {
      let viiip = `${tokenObj.server}`;
      if (viiip.includes(guild.id)) return;
      else guild.leave().catch(() => 0);
    }
  });

  setInterval(() => {
    var time = new Date().getTime();
    var oldtime = db.get(`time`);

    if (oldtime === null || !oldtime) return;

    let i = 0;
    while (i < oldtime.length) {
      if (oldtime === null || !oldtime) return;
      var timet = oldtime[i];
      if (time > timet.time) {
        var guild = client83883.guilds.cache.get(timet.guild_id);
        setTimeout(() => {
          client83883.destroy()?.catch(() => 0);
        }, 10000);
        const smith_lst = oldtime.filter((guilds) => guilds !== oldtime[i]);
        db.set(`time`, smith_lst);
      }
      i++;
    }
  }, 1000);

  //--------------------اوامر الاونر----------------------\\

  const def = default_prefix;
  const prefix = PREFIX;

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const mention =
      client83883.users.cache.get(args[0]) || message.mentions.users.first();
    if (command === `setowner`) {
      if (
        !devs.includes(message.author.id) &&
        !owner_id.includes(message.author.id)
      )
        return;
      if (!mention)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | منشن الشخص او اكتب الايدي.`
          )
        );
      db.set(`owner_${mention.id}`, true);
      message.lineReplyNoMention(
        new Discord.MessageEmbed().setDescription(
          `> :white_check_mark: | ${mention} تم اضافة اونر جديد للبوت`
        )
      );
    } else if (command === `removeowner`) {
      if (
        !devs.includes(message.author.id) &&
        !owner_id.includes(message.author.id)
      )
        return;
      if (!mention)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | منشن الشخص او اكتب الايدي.`
          )
        );

      if (!db.get(`owner_${mention.id}`))
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | لا يمكنني العثور على هذا الشخص في قائمة الاونرات`
          )
        );

      db.delete(`owner_${mention.id}`);

      message.lineReplyNoMention(
        new Discord.MessageEmbed().setDescription(
          `> :white_check_mark: | ${mention} تم ازالة اونر من البوت`
        )
      );
    }
  });

  client83883.on(`message`, async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const mention =
      client.users.cache.get(args[0]) || message.mentions.users.first();

    if (command === `vip`) {
      var time = new Date().getTime();

      var guilds = db.get(`time`);

      let i = 0;
      while (i < guilds.length) {
        if (guilds === null || !guilds) return;
        if (guilds[i].guild_id === message.guild.id) {
          var timeold = guilds[i].time + guilds[i].timems;
          var timenow = new Date().getTime();
          var time = timeold - timenow;

          message
            .lineReplyNoMention(
              `>>> **Premium Number :** ${
                tokenObj.number
              } \n**Premium Ends in :** ${humanizeDuration(Number(time), {
                round: true,
              })} \n**Sign in :** <@${tokenObj.owner}>`
            )
            .catch(() => {
              message.lineReplyNoMention(
                `>>> **Premium Number :** ${tokenObj.number} \n**Premium Ends in :** no limt \n**Sign in :** <@${tokenObj.owner}>`
              );
            });
        }
        i++;
      }
    }
  });

  function checkOwner(id) {
    if (!id) return console.log(`Please Insert valid Id !`);
    if (!db.has(`owner_${id}`)) {
      return false;
    } else {
      return true;
    }
  }

  client83883.on("message", async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || !message.guild) return;
    if (message.content.startsWith(SerPrefix + "restart")) {
      if (
        !devs.includes(message.author.id) &&
        !checkOwner.includes(message.author.id)
      )
        return;
      await client83883.destroy();
      setTimeout(async () => {
        client83883
          .login(token)
          .then(() => {
            message.channel.send(`Restarted Succesfully!`).catch(() => 0);
          })
          .catch(() => {
            console.log(
              `${client83883.user.tag} (${client83883.user.id}) has an error with restarting.`
            );
          });
      }, 5000);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "setprefix")) {
      if (
        !devs.includes(message.author.id) &&
        !checkOwner.includes(message.author.id)
      )
        return message.react(`❌`);
      const args = message.content.split(" ").slice(1).join(" ");

      db.set(`prefix_${message.guild.id}`, args);
      message
        .lineReplyNoMention(`**>>> ✅ تم تغيير البادئة إلى \`${args}\`**`)
        .catch(() => 0)
        .catch((error) => {
          message.reply(`**> حاول خلال ساعتين**`).catch(() => 0);
        });
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "setavatar")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      if (!args) {
        message.lineReplyNoMention(
          `> ** لازم ترسل الرابط **
\`${SerPrefix}setavatar الرابط\``
        );
      }
      if (args) {
        client83883.user.setAvatar(args).catch(() => 0);
        message.react(`✅`).catch((error) => {
          message.reply(`**> حاول خلال ساعتين**`).catch(() => 0);
        });
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "setname")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      if (!args) {
        message.lineReplyNoMention(
          `> ** لازم تكتب الاسم **
\`${SerPrefix}setname Avar Armor\``
        );
      }
      if (args) {
        client83883.user.setUsername(args).catch((error) => {
          message.reply(`**> حاول خلال ساعتين**`).catch(() => 0);
        });
        message
          .lineReplyNoMention(`**>>> ✅ تم تغيير الاسم إلى \`${args}\`**`)
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "setstatus")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      if (!args) {
        message.lineReplyNoMention(
          `> ** لازم تكتب الحالة **
\`${SerPrefix}setstatus الحالة\``
        );
      }
      if (args) {
        db.set(`status_${message.guild.id}`, args);
        message.lineReplyNoMention(
          `**>>> ✅ تم تغيير الحالة إلى \`${args}\`**`
        );
      }
    }
  });

  //--------------------تعطيل الاوامر----------------------\\

  client83883.tempMsgs = new Collection();

  client83883.on("messageDelete", async (message) => {
    if (client83883.tempMsgs.has(`tempMsg_${message.id}`)) {
      let msg = await message.channel.messages
        .fetch(client83883.tempMsgs.get(`tempMsg_${message.id}`)?.repliedMsg)
        .catch(() => 0);
      if (msg) msg.delete().catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.toLowerCase().startsWith(SerPrefix + "cmd")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      const args = message.content.toLowerCase().split(" ").slice(1);
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(`> ** اكتب اسم الامر **`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          });

      if (args[0] === "ban") {
        let data = db.get(`bancmd_${message.guild.id}`);
        if (data) {
          db.delete(`bancmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`ban\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`bancmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`ban\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "prison") {
        let data = db.get(`prisoncmd_${message.guild.id}`);
        if (data) {
          db.delete(`prisoncmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`prison\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`prisoncmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`prison\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "tmute") {
        let data = db.get(`tmutecmd_${message.guild.id}`);
        if (data) {
          db.delete(`tmutecmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`text mute\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`tmutecmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`text mute\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "vmute") {
        let data = db.get(`vmutecmd_${message.guild.id}`);
        if (data) {
          db.delete(`vmutecmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`voice mute\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`vmutecmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`voice mute\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "move") {
        let data = db.get(`movecmd_${message.guild.id}`);
        if (data) {
          db.delete(`movecmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`voice move\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`movecmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`voice move\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "vkick") {
        let data = db.get(`vkickcmd_${message.guild.id}`);
        if (data) {
          db.delete(`vkickcmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`voice kick\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`vkickcmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`voice kick\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "event") {
        let data = db.get(`eventcmd_${message.guild.id}`);
        if (data) {
          db.delete(`eventcmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`event\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`eventcmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`event\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "role") {
        let data = db.get(`rolecmd_${message.guild.id}`);
        if (data) {
          db.delete(`rolecmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`role\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`rolecmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`role\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "clear") {
        let data = db.get(`clearcmd_${message.guild.id}`);
        if (data) {
          db.delete(`clearcmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`clear chat\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`clearcmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`clear chat\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "close") {
        let data = db.get(`lockcmd_${message.guild.id}`);
        if (data) {
          db.delete(`lockcmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`close chat\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`lockcmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`close chat\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "hide") {
        let data = db.get(`hidecmd_${message.guild.id}`);
        if (data) {
          db.delete(`hidecmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`hide chat\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`hidecmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`hide chat\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "colors") {
        let data = db.get(`colorcmd_${message.guild.id}`);
        if (data) {
          db.delete(`colorcmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`colors\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`colorcmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`colors\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "server") {
        let data = db.get(`servercmd_${message.guild.id}`);
        if (data) {
          db.delete(`servercmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`server\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`servercmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`server\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "user") {
        let data = db.get(`usercmd_${message.guild.id}`);
        if (data) {
          db.delete(`usercmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`user\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`usercmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`user\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "avatar") {
        let data = db.get(`avatarcmd_${message.guild.id}`);
        if (data) {
          db.delete(`avatarcmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`avatar\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`avatarcmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`avatar\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "banner") {
        let data = db.get(`bannercmd_${message.guild.id}`);
        if (data) {
          db.delete(`bannercmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`banner\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`bannercmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`banner\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else if (args[0] === "ticket") {
        let data = db.get(`ticketcmd_${message.guild.id}`);
        if (data) {
          db.delete(`ticketcmd_${message.guild.id}`);
          message
            .lineReplyNoMention(`**> تم تفعيل امر \`ticket\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        } else {
          db.set(`ticketcmd_${message.guild.id}`, "off");
          message
            .lineReplyNoMention(`**> تم تعطيل امر \`ticket\`**`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            });
        }
      } else {
        message.react("❓").catch((err) => {});
      }
    }
  });

  //--------------------كل اوامر الست----------------------\\

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `setup`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      message.guild.channels
        .create(`mutes:`, {
          type: "category",
        })
        .then(async (channel) => {
          db.set(`mutes_log${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`avar log's :`, {
          type: "category",
        })
        .then(async (channel) => {
          db.set(`category_log${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`band`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`banlog_${message.guild.id}`, channel.id);
          db.set(`banlog_`, channel.id);
        });
      message.guild.channels
        .create(`prison`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`prisonlog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`server`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`serverlog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`tmute`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat2 = db.get(`mutes_log${message.guild.id}`);
          await channel.setParent(cat2);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`mutelog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`vmute`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat2 = db.get(`mutes_log${message.guild.id}`);
          await channel.setParent(cat2);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`vmutelog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`voice-move`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`movelog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`channels`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`channellog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`add-remove-roles`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`rolelog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`bulk-delete`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`clearlog_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`edit-delete-msg`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`logmsg_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`picc`, {
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`logpic_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`in-out`, {
          topic: `log join:`,
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`logjoin_${message.guild.id}`, channel.id);
        });
      message.guild.channels
        .create(`armor`, {
          topic: `protection:`,
          type: "text",
        })
        .then(async (channel) => {
          let cat1 = db.get(`category_log${message.guild.id}`);
          await channel.setParent(cat1);
          await channel.overwritePermissions([
            {
              id: message.guild.roles.everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
          ]);
          db.set(`logsch_${message.guild.id}`, channel.id);
        });
      message.guild.roles
        .create({
          data: {
            name: `prison`,
          },
        })
        .then((role) => {
          db.set(`guild_prison_${message.guild.id}`, role.id);
          message.guild.channels.cache.forEach((channel) => {
            channel.updateOverwrite(role, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SEND_MESSAGES_IN_THREADS: false,
              START_EMBEDDED_ACTIVITIES: false,
              CREATE_PUBLIC_THREADS: false,
              CREATE_PRIVATE_THREADS: false,
            });
          });
          message.guild.roles
            .create({
              data: {
                name: `tmute`,
              },
            })
            .then((role) => {
              db.set(`guild_mute_${message.guild.id}`, role.id);
              message.guild.channels.cache.forEach((channel) => {
                channel.updateOverwrite(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                  SEND_MESSAGES_IN_THREADS: false,
                  START_EMBEDDED_ACTIVITIES: false,
                  CREATE_PUBLIC_THREADS: false,
                  CREATE_PRIVATE_THREADS: false,
                });
              });
            });
        });
      await message.lineReplyNoMention(
        new Discord.MessageEmbed()
          .setColor(`#d2d0d0`)
          .setDescription(
            `> :white_check_mark: | تم إنشاء جميع رومات اللوق رول السجن والميوت.`
          )
      );
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `removeall-roles`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      db.delete(`guild_mute_${message.guild.id}`);
      db.delete(`guild_prison_${message.guild.id}`);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed()
            .setColor(`#d2d0d0`)
            .setDescription(
              `> :white_check_mark: | تم حذف رول السجن والميوت من قاعدة البيانات.`
            )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `removeall-logs`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      db.delete(`rolelog_${message.guild.id}`);
      db.delete(`clearlog_${message.guild.id}`);
      db.delete(`mutelog_${message.guild.id}`);
      db.delete(`prisonlog_${message.guild.id}`);
      db.delete(`vmutelog_${message.guild.id}`);
      db.delete(`vkicklog_${message.guild.id}`);
      db.delete(`movelog_${message.guild.id}`);
      db.delete(`logmsg_${message.guild.id}`);
      db.delete(`logpic_${message.guild.id}`);
      db.delete(`admin_${message.guild.id}`);
      db.delete(`new_log_${message.guild.id}`);
      db.delete(`logjoin_${message.guild.id}`);
      db.delete(`picrole_${message.guild.id}`);
      db.delete(`channellog_${message.guild.id}`);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed()
            .setColor(`#d2d0d0`)
            .setDescription(
              `> :white_check_mark: | تم حذف جميع الوقات من قاعدة البيانات.`
            )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `remove-auto`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      db.delete(`autorole_${message.guild.id}`);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed()
            .setColor(`#d2d0d0`)
            .setDescription(
              `> :white_check_mark: | تم حذف الرول تلقائي من قاعدة البيانات.`
            )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const logs =
      client83883.channels.cache.get(args[0]) ||
      message.mentions.channels.first();
    if (command === `logs`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!logs)
        return message
          .lineReplyNoMention(
            `> ** منشن الروم او اكتب الايدي **
\`${SerPrefix}logs @channel\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let embed = new Discord.MessageEmbed().setColor(`#d2d0d0`).setDescription(
        `[1] - باند
[2] - سجن
[3] - ميوت كتابي
[4] - الرومات الصوتية
[5] - الرومات
[6] - الرولات
[7] - المسح
[8] - الرسائل
[9] - الصور
[10] - الدخول لسيرفر
[11] - باقي لوقات السيرفر`
      );
      const msg = await message.lineReplyNoMention(embed);
      const filter = (collected) => collected.author.id === message.author.id;
      const collected = await msg.channel
        .awaitMessages(filter, {
          max: 1,
          time: 100000,
        })
        .catch(() => {
          msg.delete();
          message.react(`❌`);
        });
      if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 0
      ) {
        collected
          .first()
          .delete()
          .catch((err) => {});
        msg.delete().catch((err) => console.log(err));
        message.react(`❌`).catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 1
      ) {
        db.set(`banlog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق الباند الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 2
      ) {
        db.set(`prisonlog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق السجن الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 3
      ) {
        db.set(`mutelog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(
                `**>>> تم تحديد لوق الاسكات الكتابي الى ${logs}**`
              )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 4
      ) {
        db.set(`voicelog_${message.guild.id}`, logs.id);
        db.set(`vmutelog_${message.guild.id}`, logs.id);
        db.set(`movelog_${message.guild.id}`, logs.id);
        db.set(`vkicklog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق الروم الصوتي الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 5
      ) {
        db.set(`channellog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق الرومات الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 6
      ) {
        db.set(`rolelog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق الرولات الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 7
      ) {
        db.set(`clearlog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق المسح الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 8
      ) {
        db.set(`logmsg_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق الرسائل الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 9
      ) {
        db.set(`logpic_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق الصور الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 10
      ) {
        db.set(`logjoin_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد لوق دخول السيرفر الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 11
      ) {
        db.set(`serverlog_${message.guild.id}`, logs.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد باقي لوقات السيرفر الى ${logs}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) >= 0
      ) {
        collected
          .first()
          .delete()
          .catch((err) => {});
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "roles")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      var roles =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((r) => r.name === args) ||
        message.guild.roles.cache.find((r) => r.id === args);
      if (!roles)
        return message
          .lineReplyNoMention(
            `> ** منشن الرول او اكتب الايدي **
\`${SerPrefix}roles @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let embed = new Discord.MessageEmbed().setColor(`#d2d0d0`).setDescription(
        `[1] - سجن
[2] - ميوت كتابي
[3] - الادمن
[4] - رول الصور
[5] - رول الهير
[6] - رول الكام`
      );
      const msg = await message.lineReplyNoMention(embed);
      const filter = (collected) => collected.author.id === message.author.id;
      const collected = await msg.channel
        .awaitMessages(filter, {
          max: 1,
          time: 100000,
        })
        .catch(() => {
          msg.delete();
          message.react(`❌`);
        });
      if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 0
      ) {
        collected
          .first()
          .delete()
          .catch((err) => {});
        msg.delete().catch((err) => console.log(err));
        message.react(`❌`).catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 1
      ) {
        db.set(`guild_prison_${message.guild.id}`, roles.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد رول السجن الى ${roles}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 2
      ) {
        db.set(`guild_mute_${message.guild.id}`, roles.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(
                `**>>> تم تحديد رول الاسكات الكتابي الى ${roles}**`
              )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 3
      ) {
        db.set(`guild_admin_${message.guild.id}`, roles.id);
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد رول الادمن الى ${roles}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 4
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        let data = db.get(`pic_${message.guild.id}`);
        if (data) {
          db.delete(`pic_${message.guild.id}`);
          message.channel
            .send(
              new Discord.MessageEmbed()
                .setColor(`#d2d0d0`)
                .setDescription(`**>>> تم ازالة رول الصور ${roles}**`)
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        } else {
          db.set(`pic_${message.guild.id}`, roles.id);
          message.channel
            .send(
              new Discord.MessageEmbed()
                .setColor(`#d2d0d0`)
                .setDescription(`**>>> تم تحديد رول الصور الى ${roles}**`)
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        }
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 5
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        let data = db.get(`here_${message.guild.id}`);
        if (data) {
          db.delete(`here_${message.guild.id}`);
          message.channel
            .send(
              new Discord.MessageEmbed()
                .setColor(`#d2d0d0`)
                .setDescription(`**>>> تم ازالة رول الهير ${roles}**`)
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        } else {
          db.set(`here_${message.guild.id}`, roles.id);
          message.channel
            .send(
              new Discord.MessageEmbed()
                .setColor(`#d2d0d0`)
                .setDescription(`**>>> تم تحديد رول الهير الى ${roles}**`)
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        }
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 6
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        message.react(`✅`);
        let data = db.get(`cam_${message.guild.id}`);
        if (data) {
          db.delete(`cam_${message.guild.id}`);
          message.channel
            .send(
              new Discord.MessageEmbed()
                .setColor(`#d2d0d0`)
                .setDescription(`**>>> تم ازالة رول اللايف ${roles}**`)
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        } else {
          db.set(`cam_${message.guild.id}`, roles.id);
          message.channel
            .send(
              new Discord.MessageEmbed()
                .setColor(`#d2d0d0`)
                .setDescription(`**>>> تم تحديد رول اللايف الى ${roles}**`)
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        }
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) >= 0
      ) {
        collected
          .first()
          .delete()
          .catch((err) => {});
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "admins")) {
      let data = await guild_db.findOne({
        id: message.guild.id,
      });
      if (!data) {
        data = await guild_db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      var roles =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((r) => r.name === args) ||
        message.guild.roles.cache.find((r) => r.id === args);
      if (!roles)
        return message
          .lineReplyNoMention(
            `> ** منشن الرول او اكتب الايدي **
\`${SerPrefix}admins @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let embed = new Discord.MessageEmbed().setColor(`#d2d0d0`).setDescription(
        `[1] - سجن
[2] - ميوت كتابي
[3] - ميوت صوتي
[4] - التنقل الصوتي
[5] - مسح الشات
[6] - اعطاء رولات
[7] - اعطاء نيو
[8] - امر تشيك`
      );
      const msg = await message.lineReplyNoMention(embed);
      const filter = (collected) => collected.author.id === message.author.id;
      const collected = await msg.channel
        .awaitMessages(filter, {
          max: 1,
          time: 100000,
        })
        .catch(() => {
          msg.delete();
          message.react(`❌`);
        });
      if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 0
      ) {
        collected
          .first()
          .delete()
          .catch((err) => {});
        msg.delete().catch((err) => console.log(err));
        message.react(`❌`).catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 1
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        db.set(`usePrison_${roles.id}`, roles.id);
        let xx = false;
        let data1 = await schema.findOne({
          namet: "prison",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({
          namet: "prison",
          server: message.guild.id,
        });
        if (!killer)
          killer = new schema({
            namet: "prison",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد ادمن السجن الى ${roles}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 2
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        let xx = false;
        let data1 = await schema.findOne({
          namet: "tmute",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({ namet: "tmute" });
        if (!killer)
          killer = new schema({
            namet: "tmute",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(
                `**>>> تم تحديد ادمن الاسكات الكتابي الى ${roles}**`
              )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 3
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        let xx = false;
        let data1 = await schema.findOne({
          namet: "vmute",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({ namet: "vmute" });
        if (!killer)
          killer = new schema({
            namet: "vmute",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(
                `**>>> تم تحديد ادمن الاسكات الصوتي الى ${roles}**`
              )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 4
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        let xx = false;
        let data1 = await schema.findOne({
          namet: "move",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({ namet: "move" });
        if (!killer)
          killer = new schema({
            namet: "move",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(
                `**>>> تم تحديد ادمن التنقل الصوتي الى ${roles}**`
              )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 5
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        let xx = false;
        let data1 = await schema.findOne({
          namet: "clear",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({ namet: "clear" });
        if (!killer)
          killer = new schema({
            namet: "clear",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد ادمن مسح الشات الى ${roles}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 6
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        let xx = false;
        let data1 = await schema.findOne({
          namet: "role",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({ namet: "role" });
        if (!killer)
          killer = new schema({
            namet: "role",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد ادمن الرولات الى ${roles}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 7
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        let xx = false;
        let data1 = await schema.findOne({
          namet: "new",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({ namet: "new" });
        if (!killer)
          killer = new schema({
            namet: "new",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد ادمن النيو الى ${roles}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) === 8
      ) {
        msg.delete().catch((err) => console.log(err));
        collected
          .first()
          .delete()
          .catch((err) => {});
        let xx = false;
        let data1 = await schema.findOne({
          namet: "check",
          server: message.guild.id,
        });
        if (data1) {
          let data = data1.roles;
          if (data.includes(roles.id)) xx = true;
          let nr = data.filter((x) => x != roles.id);
          data1.roles = nr;
          await data1.save();
          if (xx) return message.react("☑");
        }
        let killer = await schema.findOne({ namet: "check" });
        if (!killer)
          killer = new schema({
            namet: "check",
            roles: [],
            server: message.guild.id,
          });
        killer.roles.push(roles.id);
        await killer.save();
        message.react(`✅`);
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setColor(`#d2d0d0`)
              .setDescription(`**>>> تم تحديد ادمن الشك الى ${roles}**`)
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (
        !isNaN(collected.first().content) &&
        Number(collected.first().content) >= 0
      ) {
        collected
          .first()
          .delete()
          .catch((err) => {});
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `auto`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!db.get(`autorole_${message.guild.id}`))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | (${SerPrefix}setauto) حدد الرول التلقائي أولاً.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var toggle = message.content.split(" ").slice(1).join(" ");
      if (!array7.includes(toggle))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type ${command} on or ${command} off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`auto_${message.guild.id}`, toggle);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ** ${toggle} ** تم تحديد حالة الرول التلقائي الى`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "setauto")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      var role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((r) => r.name === args) ||
        message.guild.roles.cache.find((r) => r.id === args);
      if (!role)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الرول او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let data = db.get(`autorole_${message.guild.id}`);
      if (data) {
        db.delete(`autorole_${message.guild.id}`);
        message.react(`☑️`);
      } else {
        db.set(`autorole_${message.guild.id}`, role.id);
        message.react(`✅`);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const admin =
      client83883.channels.cache.get(args[0]) ||
      message.mentions.channels.first();
    if (command === `setadmin`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!admin)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الروم او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!admin) return;
      db.set(`admin_${message.guild.id}`, admin.id);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | **${admin.name}** تم تحديد شات الادمن.`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const mutelog =
      client83883.channels.cache.get(args[0]) ||
      message.mentions.channels.first();
    if (command === `setnew`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!mutelog)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الروم او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!mutelog) return;
      db.set(`new_log_${message.guild.id}`, mutelog.id);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | **${mutelog.name}** تم تحديد لوق النيو.`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const mention =
      client83883.users.cache.get(args[0]) || message.mentions.users.first();

    if (command === `addcheck`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!mention)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      db.set(`admin_${mention.id}`, true);

      message.react(`✅`);
    } else if (command === `removecheck`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!mention)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | منشن الشخص او اكتب الايدي.`
          )
        );

      if (!db.get(`admin_${mention.id}`))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على هذا الشخص في قائمة الشيك`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      db.delete(`admin_${mention.id}`);

      message.react(`✅`);
    } else if (command === `checklist`) {
      if (
        !devs.includes(message.author.id) ||
        db.get(`admin_${message.author.id}`)
      ) {
        var admin = db.all().filter((a) => a.ID.startsWith(`admin_`));

        let text = ``;
        let i = 1;

        admin.forEach((admin) => {
          text += `**\`\`${i}.\`\` <@!${admin.ID.toString().slice(6)}>**\n`;
          i++;
        });

        message
          .lineReplyNoMention(
            `**:white_check_mark: | Your Have \`\`${i}\`\` uper On \`\`${message.guild.name}\`\`**\n${text}`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على احد في قائمة الشيك`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot) return;
    if (!message.guild) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `new`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      var toggle = message.content.split(" ").slice(1).join(" ");
      if (!array33.includes(toggle))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type ${command} on or ${command} off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`new1_${message.guild.id}`, toggle);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ** ${toggle} ** تم تحديد حالة النيو الى`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `bots`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      var toggle = message.content.split(" ").slice(1).join(" ");
      if (!array5.includes(toggle))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type ${command} on or ${command} off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`bo_${message.guild.id}`, toggle);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ** ${toggle} ** تم تحديد حالة دخول البوتات الى`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `link`) {
      if (message.author.bot) return;
      if (!message.guild) return;
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      var toggle = message.content.split(" ").slice(1).join(" ");
      if (!array6.includes(toggle))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type ${command} on or ${command} off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`link1_${message.guild.id}`, toggle);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ** ${toggle} ** تم تحديد حالة ارسال روابط في الشات الى`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `antirole`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      var toggle = message.content.split(" ").slice(1).join(" ");
      if (!array.includes(toggle))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type ${command} on or ${command} off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`ad_${message.guild.id}`, toggle);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ** ${toggle} ** تم تحديد حالة حماية رولات الادمنستريتر الى`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `cdelete`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      var toggle = message.content.split(" ").slice(1).join(" ");
      if (!array1.includes(toggle))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type ${command} on or ${command} off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`cd_${message.guild.id}`, toggle);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ** ${toggle} ** تم تحديد حالة مسح الرومات الى`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.toLowerCase().startsWith(SerPrefix + "voice")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      const args = message.content.toLowerCase().split(" ").slice(1);
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | what you need ?, voice name, voice channel, on or off`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (args[0] === "on") {
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :white_check_mark: | ** on ** تم تحديد حالة فويس روم الى`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
        db.set(`voiceonoff_${message.guild.id}`, "on");
      } else if (args[0] === "off") {
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :white_check_mark: | ** off ** تم تحديد حالة فويس روم الى`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
        db.set(`voiceonoff_${message.guild.id}`, "off");
      } else if (args[0] === "name") {
        let name = args.slice(1).join(" ").substring(0, 100);
        if (!name)
          return message
            .lineReplyNoMention(
              new Discord.MessageEmbed().setDescription(
                `> :x: | type the name of the voice you want`
              )
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        db.set(`voicename_${message.guild.id}`, args);
        message.react(`✅`);
      } else if (args[0] === "channel") {
        const voiceonline =
          client83883.channels.cache.get(args[0]) ||
          message.mentions.channels.first();
        var voicename = db.get(`voicename_${message.guild.id}`);
        if (voicename == null || voicename == undefined)
          return message
            .lineReplyNoMention(
              new Discord.MessageEmbed().setDescription(
                `> :x: | (${SerPrefix}voice name) حدد اسم الروم أولاً.`
              )
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        if (!voiceonline)
          return message
            .lineReplyNoMention(
              new Discord.MessageEmbed().setDescription(
                `> :x: | منشن الروم او اكتب الايدي.`
              )
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        db.set(`voiceonline_${message.guild.id}`, voiceonline.id);
        message.react(`✅`);
      } else {
        message.react("❓").catch((err) => {});
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot) return;
    if (!message.guild) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `guild`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      var toggle = message.content.split(" ").slice(1).join(" ");
      if (!array11.includes(toggle))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type ${command} on or ${command} off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`guild_123`, toggle);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ** ${toggle} ** تم تحديد حالة تعديل اسم السيرفر و الصورة الى`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  //--------------------اللوقات----------------------\\

  const idserver = IDSERVER;
  const color = COLOR;
  const footer_name = FOOTERN;
  const footer_photo = FOOTERP;

  client83883.on(`message`, async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    message.attachments.forEach(function (attachment) {
      let chh = message.guild.channels.cache.get(
        db.fetch(`logpic_${message.guild.id}`)
      );
      if (!chh) return;

      let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.author.avatarURL({ dynamic: true }))
        .setColor(`#39adf0`)
        .setTitle(`Image sent`)
        .addField(
          "Sent in:",
          `${message.guild.name} (<#${message.channel.id}>)`,
          true
        )
        .addField("Sent by:", `<@${message.author.id}>`, false)
        .setTimestamp();
      chh.send(embed).then((message) => {
        chh.send({ files: [attachment] }).catch((err) => 0);
      });
    });
  });

  client83883.on("guildMemberRemove", async (member) => {
    if (!member.guild) return;
    if (!member.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    let ch = member.guild.channels.cache.get(
      db.fetch(`logjoin_${member.guild.id}`)
    );
    if (!ch) return;

    let embed = new Discord.MessageEmbed()
      .setAuthor(
        member.user.username,
        member.user.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `**Member left:** <@${member.user.id}>\n **Account data:** ${moment(
          member.joinedAt
        ).format("YYYY/MM/DD")}`
      )
      .setTimestamp()
      .setColor("RED");
    ch.send(embed).catch((err) => 0);
  });

  tracker.on("guildMemberAdd", async (member, inviter, invite) => {
    if (!member.guild) return;
    if (!member.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    let ch = member.guild.channels.cache.get(
      db.fetch(`logjoin_${member.guild.id}`)
    );
    if (!ch) return;
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        member.user.username,
        member.user.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(
        `**<@${member.user.id}> has been joined\nBy: <@${
          inviter.id
        }>\nInvite: ${invite.code}\nAge: <t:${parseInt(
          member.user.createdAt / 1000
        )}:R>**`
      )
      .setFooter(inviter.username, inviter.displayAvatarURL({ dynamic: true }))
      .setColor("GREEN");
    ch.send(embed).catch((err) => 0);
  });

  client83883.on("messageDeleteBulk", async (messages) => {
    const log = await messages
      .first()
      .guild.fetchAuditLogs({ type: "MESSAGE_DELETE_BULK" }); // Fetch the audit logs

    const executor = log.entries.first().executor;
    const executor2 = log.entries.first().executor.tag;
    let logmsg = await messages
      .first()
      .guild.channels.cache.get(
        db.fetch(`clearlog_${messages.first().guild.id}`)
      );
    if (!logmsg) return;
    const length = messages.array().length;
    const channel = messages.first().channel;
    const embed = new Discord.MessageEmbed()
      .setTitle(`BulkDelete`)
      .setDescription(
        `\`${length}\` messages delete\nin: <#${channel.id}>\nby: ${executor} - \`${executor2}\``
      )
      .setColor("#dd5f53")
      .setTimestamp();

    const content = messages.map(
      (message) =>
        `${moment(message.createdAt, "YYYY-MM-DD HH:mm:ss")} - ${
          message.author.tag
        } - ${message.content}`
    );
    fs.writeFileSync(`bulkdelete.txt`, content.join("\n"), (error) => {
      if (error) throw error;
    });
    await logmsg
      .send(
        embed,
        new Discord.MessageAttachment(`bulkdelete.txt`, `bulkdelete.txt`),
        { split: true }
      )
      .catch((err) => 0);
  });

  client83883.on("messageDelete", async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    const fetchedLogs = await message.guild.fetchAuditLogs({
      limit: 1,
      type: "MESSAGE_DELETE",
    });
    const deletionLog = fetchedLogs.entries.first();
    const { executor, target } = deletionLog;
    let img = message.attachments.first();
    let logmsg = message.guild.channels.cache.get(
      db.fetch(`logmsg_${message.guild.id}`)
    );
    if (!logmsg) return;

    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(
        `**Message Deleted, sender: <@${message.author.id}>, in: <#${message.channel.id}> **\`\`\` ${message.content} \`\`\``
      )
      .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setColor(color);

    let embed2 = new Discord.MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(
        `**Message Deleted, sender: <@${message.author.id}>, in: <#${message.channel.id}>, by: <@!${executor.id}> **\`\`\` ${message.content} \`\`\``
      )
      .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setColor(color);

    if (!deletionLog) return logmsg.send(embed).catch((err) => 0);

    if (target.id === message.author.id) {
      logmsg.send(embed2);
      if (img)
        msg = logmsg
          .send(
            `Sender: <@${message.author.id}> - in: ${message.channel} - by: <@!${executor.id}>
Message : ${message.content}`,
            { files: [img] }
          )
          .catch((err) => 0);
    } else {
      logmsg.send(embed);
      if (img)
        msg = logmsg
          .send(
            `Sender: <@${message.author.id}> - in ${message.channel}
Message : ${message.content}`,
            { files: [img] }
          )
          .catch((err) => 0);
    }
  });

  client83883.on("messageUpdate", (oldMessage, newMessage) => {
    if (
      !oldMessage.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG")
    )
      return;
    if (
      !newMessage.guild ||
      !newMessage.author ||
      oldMessage.content === newMessage.content
    )
      return;
    if (!oldMessage.content || !newMessage.content) return;
    let logmsg = newMessage.guild.channels.cache.get(
      db.fetch(`logmsg_${oldMessage.guild.id}`)
    );
    if (!logmsg) return;
    let messageUpdate = new Discord.MessageEmbed()
      .setAuthor(
        newMessage.author.username,
        newMessage.author.displayAvatarURL({ dynamic: true })
      )
      .setFooter(
        oldMessage.guild.name,
        oldMessage.guild.iconURL({ dynamic: true })
      )
      .setTimestamp()
      .setDescription(
        `**Message sent by: ${newMessage.author} in: ${newMessage.channel} , [jumb to message](${newMessage.url})**`
      )
      .addField(`Old Message:`, "```\n" + oldMessage.content + "\n```")
      .addField(`New Message:`, "```\n" + newMessage.content + "\n```");
    logmsg.send(messageUpdate).catch((err) => 0);
  });

  client83883.on("channelCreate", (channel) => {
    if (!channel.guild) return;
    if (!channel.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;

    let ch = channel.guild.channels.cache.get(
      db.fetch(`channellog_${channel.guild.id}`)
    );
    if (!ch) return;

    channel.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor;
      var userAvatar = logs.entries.first().executor.avatarURL;
      var userName = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL();

      if (channel.type === "text") {
        var roomType = "Text";
      } else if (channel.type === "voice") {
        var roomType = "Voice";
      } else if (channel.type === "category") {
        let channelCreate = new Discord.MessageEmbed()
          .setAuthor(userName, userAvatar)

          .setDescription(
            `**channel has been created with name:** \`${channel.name}\`\n**type:** \`${channel.type}\`\n**by:** ${userID}`
          )
          .setFooter(
            channel.guild.name,
            channel.guild.iconURL({ dynamic: true })
          )
          .setColor(color);

        return ch.send(channelCreate).catch((err) => 0);
      }

      let channelCreate = new Discord.MessageEmbed()
        .setAuthor(userName, userAvatar)

        .setDescription(
          `**channel has been created with name:** \`${channel.name}\`\n**type:** \`${channel.type}\`\n**category:** \`${channel.parent.name}\`\n**by:** ${userID}`
        )
        .setFooter(channel.guild.name, channel.guild.iconURL({ dynamic: true }))
        .setColor(color);

      ch.send(channelCreate).catch((err) => 0);
    });
  });

  client83883.on("channelUpdate", (oldChannel, newChannel) => {
    if (!newChannel.guild) return;
    if (
      !newChannel.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG")
    )
      return;

    let ch = newChannel.guild.channels.cache.get(
      db.fetch(`channellog_${newChannel.guild.id}`)
    );
    if (!ch) return;

    if (oldChannel.type === "text") {
      var channelType = "Text";
    } else if (oldChannel.type === "voice") {
      var channelType = "Voice";
    } else if (oldChannel.type === "category") {
      var channelType = "Category";
    }

    oldChannel.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;
      var userName = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL();

      if (oldChannel.name !== newChannel.name) {
        let channelUpdate = new Discord.MessageEmbed()
          .setAuthor(userName, userAvatar)

          .setDescription(
            `**channel name update from:** \`${oldChannel.name}\`, **to:** \`${newChannel.name}\`\n**channel:** ${newChannel}\n**by:** <@!${userID}>`
          )
          .setFooter(
            oldChannel.guild.name,
            oldChannel.guild.iconURL({ dynamic: true })
          )
          .setColor(color);

        ch.send(channelUpdate).catch((err) => 0);
      }
      if (oldChannel.topic !== newChannel.topic) {
        let channelTopic = new Discord.MessageEmbed()
          .setAuthor(userName, userAvatar)

          .setDescription(
            `**channel topic update from:** \`${oldChannel.topic}\`, **to:** \`${newChannel.topic}\`\n **channel:** <#${newChannel.id}>\n**by:** <@!${userID}>`
          )
          .setFooter(
            oldChannel.guild.name,
            oldChannel.guild.iconURL({ dynamic: true })
          )
          .setColor(color);

        ch.send(channelTopic).catch((err) => 0);
      }
    });
  });

  client83883.on("channelDelete", (channel) => {
    if (!channel.guild) return;
    if (!channel.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;

    let ch = channel.guild.channels.cache.get(
      db.fetch(`channellog_${channel.guild.id}`)
    );
    if (!ch) return;
    channel.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;
      var userName = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL();
      if (channel.type === "text") {
        var roomType = "Text";
      } else if (channel.type === "voice") {
        var roomType = "Voice";
      } else if (channel.type === "category") {
        var roomType = "Category";
        let channelDelete = new Discord.MessageEmbed()
          .setAuthor(userName, userAvatar)

          .setDescription(
            `**channel has been deleted with name:** \`${channel.name}\`\n**type:** \`${channel.type}\`\n**by:** <@!${userID}>`
          )
          .setFooter(
            channel.guild.name,
            channel.guild.iconURL({ dynamic: true })
          )
          .setColor(color);
        return ch.send(channelDelete).catch((err) => 0);
      }
      let channelDelete = new Discord.MessageEmbed()
        .setAuthor(userName, userAvatar)

        .setDescription(
          `**channel has been deleted with name:** \`${channel.name}\`\n**type:** \`${channel.type}\`\n**category:** \`${channel.parent.name}\`\n**by:** <@!${userID}>`
        )
        .setFooter(channel.guild.name, channel.guild.iconURL({ dynamic: true }))
        .setColor(color);
      ch.send(channelDelete).catch((err) => 0);
    });
  });

  client83883.on("roleCreate", (msg, member) => {
    if (!msg.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    let ch = msg.guild.channels.cache.get(db.fetch(`rolelog_${msg.guild.id}`));
    if (!ch) return;
    msg.guild.fetchAuditLogs().then((discordlogs) => {
      let memberid = discordlogs.entries.first().executor.id;
      let membername = discordlogs.entries.first().executor.tag;
      let memberavatar = discordlogs.entries
        .first()
        .executor.displayAvatarURL({ dynamic: true });
      let embed = new Discord.MessageEmbed()
        .setAuthor(membername, memberavatar)

        .setDescription(
          `**role has been created with name:** \`${msg.name}\`\n**by:** <@!${memberid}>`
        )
        .setFooter(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setColor(color);
      ch.send(embed).catch((err) => 0);
    });
  });

  client83883.on("roleUpdate", (oldRole, newRole) => {
    if (!newRole.guild) return;
    if (!newRole.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    let ch = newRole.guild.channels.cache.get(
      db.fetch(`rolelog_${newRole.guild.id}`)
    );
    if (!ch) return;

    oldRole.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var userName = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL();
      var roleReason = logs.entries.first().reason;

      if (oldRole.name !== newRole.name) {
        let roleUpdateName = new Discord.MessageEmbed()
          .setAuthor(userName, userAvatar)

          .setDescription(
            `**role name update from:** \`${oldRole.name}\`, **to:** \`${newRole.name}\`\n**role position:** \`${newRole.position}\`\n**by:** <@!${userID}>`
          )
          .setFooter(
            oldRole.guild.name,
            oldRole.guild.iconURL({ dynamic: true })
          )
          .setColor(color);

        ch.send(roleUpdateName).catch((err) => 0);
      }
      if (oldRole.hexColor !== newRole.hexColor) {
        if (oldRole.hexColor === "#000000") {
          var oldColor = "Default";
        } else {
          var oldColor = oldRole.hexColor;
        }
        if (newRole.hexColor === "#000000") {
          var newColor = "Default";
        } else {
          var newColor = newRole.hexColor;
        }
        let roleUpdateColor = new Discord.MessageEmbed()
          .setAuthor(userName, userAvatar)

          .setDescription(
            `**role color update, role:** \`${oldRole.name}\`, **from:** \`${oldColor}\`, **to:** \`${newColor}\`\n**role position:** \`${newRole.position}\`\n**by:** <@!${userID}>`
          )
          .setFooter(
            oldRole.guild.name,
            oldRole.guild.iconURL({ dynamic: true })
          );

        ch.send(roleUpdateColor).catch((err) => 0);
      }
    });
  });

  client83883.on("roleDelete", (msg, member) => {
    if (!msg.guild) return;
    if (!msg.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    let ch = msg.guild.channels.cache.get(db.fetch(`rolelog_${msg.guild.id}`));
    if (!ch) return;
    msg.guild.fetchAuditLogs().then((discordlogs) => {
      let memberid = discordlogs.entries.first().executor.id;
      let membername = discordlogs.entries.first().executor.tag;
      let memberavatar = discordlogs.entries
        .first()
        .executor.displayAvatarURL({ dynamic: true });
      let embed = new Discord.MessageEmbed()
        .setAuthor(membername, memberavatar)

        .setDescription(
          `**role has been deleted with name:** \`${msg.name}\`\n**by:** <@!${memberid}>`
        )
        .setFooter(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setColor(color);
      ch.send(embed).catch((err) => 0);
    });
  });

  client83883.on("guildMemberUpdate", async (oldMem, newMem) => {
    if (!newMem.guild) return;
    if (!newMem.guild.me.permissions.has("ADMINISTRATOR" && "VIEW_AUDIT_LOG"))
      return;
    let ch = newMem.guild.channels.cache.get(
      db.fetch(`rolelog_${newMem.guild.id}`)
    );
    if (!ch) return;
    if (newMem.nickname !== oldMem.nickname) {
      let chh = newMem.guild.channels.cache.get(
        db.fetch(`serverlog_${newMem.guild.id}`)
      );
      if (!chh) return;
      const entry = await newMem.guild
        .fetchAuditLogs({
          type: "MEMBER_UPDATE",
          limit: 1,
        })
        .then((audit) => audit.entries.first());
      let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(
          newMem.user.tag,
          newMem.user.displayAvatarURL({ dynamic: true })
        )
        .setFooter(newMem.guild.name, newMem.guild.iconURL({ dynamic: true }));
      if (oldMem.nickname && newMem.nickname) {
        embed.setDescription(
          `${newMem.user} **nickname has been changed.**\n**from:** \`${oldMem.nickname}\`\n**to:** \`${newMem.nickname}\`\n **by:** ${entry.executor}`
        );
      } else if (oldMem.nickname && !newMem.nickname) {
        embed.setDescription(
          `${newMem.user} **nickname has been reset.**\n**from:** \`${oldMem.nickname}\`\n**to:** \`${newMem.username}\`\n **by:** ${entry.executor}`
        );
      } else if (!oldMem.nickname && newMem.nickname) {
        embed.setDescription(
          `${newMem.user} **nickname has been changed.**\n**from:** \`${oldMem.nickname}\`\n**to:** \`${newMem.nickname}\`\n **by:** ${entry.executor}`
        );
      }
      chh.send(embed).catch((err) => 0);
    } else if (oldMem.roles.cache.size !== newMem.roles.cache.size) {
      const entry = await newMem.guild
        .fetchAuditLogs({
          type: "MEMBER_ROLE_UPDATE",
          limit: 1,
        })
        .then((audit) => audit.entries.first());
      let added_roles = newMem.roles.cache
        .filter((r) => !oldMem.roles.cache.find((rr) => rr.id === r.id))
        .map((rrr) => rrr);
      let removed_roles = oldMem.roles.cache
        .filter((r) => !newMem.roles.cache.find((rr) => rr.id === r.id))
        .map((rrr) => rrr);
      let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(
          newMem.user.tag,
          newMem.user.displayAvatarURL({ dynamic: true })
        )
        .setThumbnail(newMem.user.displayAvatarURL({ dynamic: true }))
        .setFooter(newMem.guild.name, newMem.guild.iconURL({ dynamic: true }))
        .setTitle(`Add or Remove member role`)
        .setDescription(`To: ${newMem.user}\nBy: ${entry.executor}`);
      if (removed_roles.length > 0)
        embed.addField(
          `Removed role ⛔`,
          `${removed_roles.map((r) => `<@&${r.id}>`).join(" ")}`
        );
      if (added_roles.length > 0)
        embed.addField(
          `Added role ✅`,
          `${added_roles.map((r) => `<@&${r.id}>`).join(" ")}`
        );
      ch.send(embed).catch((err) => 0);
    }
  });

  client83883.on("voiceStateUpdate", async (voiceOld, voiceNew) => {
    if (!voiceOld.guild.member(client83883.user).hasPermission("EMBED_LINKS"))
      return;
    if (
      !voiceOld.guild.member(client83883.user).hasPermission("VIEW_AUDIT_LOG")
    )
      return;

    let ch = voiceOld.guild.channels.cache.get(
      db.fetch(`vmutelog_${voiceOld.guild.id}`)
    );
    if (!ch) return;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      voiceOld.guild.fetchAuditLogs().then((discordlogs) => {
        var userID = discordlogs.entries.first().executor.id;
        var userNAME = discordlogs.entries.first().executor.username;
        var userAvatar = discordlogs.entries.first().executor.avatarURL();
        let i = 1;
        let voiceChannel = client83883.guilds.cache
          .get(voiceOld.guild.id)
          .channels.cache.get(voiceOld.channel.id);
        let members = voiceChannel.members.map((m) => `${i++}- ${m.user}`);
        let serverMutev = new Discord.MessageEmbed()
          .setThumbnail(
            voiceOld.member.user.displayAvatarURL({ dynamic: true })
          )
          .setDescription(
            `**<@${
              voiceOld.id
            }> have been voice muted.\nBy: <@${userID}>\nIn: \`${
              voiceOld.channel.name
            }\`\nmemebers:**\n${members.join("\n")}`
          )
          .setColor(color)
          .setAuthor(
            voiceOld.member.user.username,
            voiceOld.member.user.displayAvatarURL({ dynamic: true })
          )
          .setFooter(userNAME, userAvatar);

        ch.send(serverMutev);
      });

      if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
        voiceOld.guild.fetchAuditLogs().then((discordlogs) => {
          var userID = discordlogs.entries.first().executor.id;
          var userNAME = discordlogs.entries.first().executor.username;
          var userAvatar = discordlogs.entries.first().executor.avatarURL();
          let i = 1;
          let voiceChannel = client83883.guilds.cache
            .get(voiceOld.guild.id)
            .channels.cache.get(voiceOld.channel.id);
          let members = voiceChannel.members.map((m) => `${i++}- ${m.user}`);
          let serverUnmutev = new Discord.MessageEmbed()
            .setThumbnail(
              voiceOld.member.user.displayAvatarURL({ dynamic: true })
            )
            .setDescription(
              `**<@${
                voiceOld.id
              }> have been voice unmuted.\nBy: <@${userID}>\nIn: \`${
                voiceOld.channel.name
              }\`\nmemebers:**\n${members.join("\n")}`
            )
            .setColor(color)
            .setAuthor(
              voiceOld.member.user.username,
              voiceOld.member.user.displayAvatarURL({ dynamic: true })
            )
            .setFooter(userNAME, userAvatar);

          ch.send(serverUnmutev);
        });

        if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
          voiceOld.guild.fetchAuditLogs().then((discordlogs) => {
            var userID = discordlogs.entries.first().executor.id;
            var userNAME = discordlogs.entries.first().executor.username;
            var userAvatar = discordlogs.entries.first().executor.avatarURL();
            let i = 1;
            let voiceChannel = client83883.guilds.cache
              .get(voiceOld.guild.id)
              .channels.cache.get(voiceOld.channel.id);
            let members = voiceChannel.members.map((m) => `${i++}- ${m.user}`);
            let serverDeafv = new Discord.MessageEmbed()
              .setThumbnail(
                voiceOld.member.user.displayAvatarURL({ dynamic: true })
              )
              .setDescription(
                `**<@${
                  voiceOld.id
                }> have been voice deafen.\nBy: <@${userID}>\nIn: \`${
                  voiceOld.channel.name
                }\`\nmemebers:**\n${members.join("\n")}`
              )
              .setColor(color)
              .setAuthor(
                voiceOld.member.user.username,
                voiceOld.member.user.displayAvatarURL({ dynamic: true })
              )
              .setFooter(userNAME, userAvatar);

            ch.send(serverDeafv);
          });

          if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            voiceOld.guild.fetchAuditLogs().then((discordlogs) => {
              var userID = discordlogs.entries.first().executor.id;
              var userNAME = discordlogs.entries.first().executor.username;
              var userAvatar = discordlogs.entries.first().executor.avatarURL();
              let i = 1;
              let voiceChannel = client83883.guilds.cache
                .get(voiceOld.guild.id)
                .channels.cache.get(voiceOld.channel.id);
              let members = voiceChannel.members.map(
                (m) => `${i++}- ${m.user}`
              );
              let serverUnDeafv = new Discord.MessageEmbed()
                .setThumbnail(
                  voiceOld.member.user.displayAvatarURL({ dynamic: true })
                )
                .setDescription(
                  `**<@${
                    voiceOld.id
                  }> have been voice undeafen.\nBy: <@${userID}>\nIn: \`${
                    voiceOld.channel.name
                  }\`\nmemebers:**\n${members.join("\n")}`
                )
                .setColor(color)
                .setAuthor(
                  voiceOld.member.user.username,
                  voiceOld.member.user.displayAvatarURL({ dynamic: true })
                )
                .setFooter(userNAME, userAvatar);

              ch.send(serverUnDeafv);
            });

            if (
              voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
              !voiceOld.voiceChannel
            ) {
              voiceOld.guild.fetchAuditLogs().then((discordlogs) => {
                let i = 1;
                let voiceChannel = client83883.guilds.cache
                  .get(voiceOld.guild.id)
                  .channels.cache.get(voiceOld.channel.id);
                let members = voiceChannel.members.map(
                  (m) => `${i++}- ${m.user}`
                );
                let serverJoinv = new Discord.MessageEmbed()
                  .setThumbnail(
                    voiceOld.member.user.displayAvatarURL({ dynamic: true })
                  )
                  .setDescription(
                    `**<@${voiceOld.id}> have been join voice channel.\nIn: \`${
                      voiceOld.channel.name
                    }\`\nmemebers:**\n${members.join("\n")}`
                  )
                  .setColor(color)
                  .setAuthor(
                    voiceOld.member.user.username,
                    voiceOld.member.user.displayAvatarURL({ dynamic: true })
                  )
                  .setFooter(
                    voiceOld.guild.name,
                    voiceOld.guild.iconURL({ dynamic: true })
                  );

                ch.send(serverJoinv);
              });

              if (
                voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
                !voiceNew.voiceChannel
              ) {
                voiceOld.guild.fetchAuditLogs().then((discordlogs) => {
                  let i = 1;
                  let voiceChannel = client83883.guilds.cache
                    .get(voiceOld.guild.id)
                    .channels.cache.get(voiceOld.channel.id);
                  let members = voiceChannel.members.map(
                    (m) => `${i++}- ${m.user}`
                  );
                  let serverLeavev = new Discord.MessageEmbed()
                    .setThumbnail(
                      voiceOld.member.user.displayAvatarURL({ dynamic: true })
                    )
                    .setDescription(
                      `**<@${
                        voiceOld.id
                      }> have been leave voice channel.\nFrom: \`${
                        voiceOld.channel.name
                      }\`\nmemebers:**\n${members.join("\n")}**`
                    )
                    .setColor(color)
                    .setAuthor(
                      voiceOld.member.user.username,
                      voiceOld.member.user.displayAvatarURL({ dynamic: true })
                    )
                    .setFooter(
                      voiceOld.guild.name,
                      voiceOld.guild.iconURL({ dynamic: true })
                    );

                  ch.send(serverLeavev);
                });

                if (
                  voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
                  voiceNew.voiceChannel &&
                  voiceOld.voiceChannel != null
                ) {
                  voiceOld.guild.fetchAuditLogs().then((discordlogs) => {
                    let i = 1;
                    let voiceChannel = client83883.guilds.cache
                      .get(voiceOld.guild.id)
                      .channels.cache.get(voiceOld.channel.id);
                    let members = voiceChannel.members.map(
                      (m) => `${i++}- ${m.user}`
                    );
                    let voiceLeave = new Discord.MessageEmbed()
                      .setTitle("**[CHANGED VOICE ROOM]**")
                      .setColor(`#2f3136`)
                      .setThumbnail(voiceOld.user.avatarURL)
                      .setDescription(
                        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${
                          voiceOld.voiceChannel.name
                        }\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${
                          voiceNew.voiceChannel.name
                        }\`\` (ID: ${
                          voiceNew.voiceChannelID
                        })\n**User:** ${voiceOld} (ID: ${
                          voiceOld.id
                        })\n**memebers:**\n${members.join("\n")}`
                      )
                      .setTimestamp()
                      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

                    ch.send(voiceLeave);
                  });
                }
              }
            }
          }
        }
      }
    }
  });

  client83883.on("voiceStateUpdate", async (oldState, newState) => {
    let ch = newState.guild.channels.cache.get(
      db.fetch(`movelog_${newState.guild.id}`)
    );
    if (!ch) return;

    oldState.guild.fetchAuditLogs().then((discordlogs) => {
      var useR = discordlogs.entries.first().executor;
      var userTag = discordlogs.entries.first().executor.tag;
      var userAvatar = discordlogs.entries
        .first()
        .executor.avatarURL({ dynamic: true });

      let oldChannel = oldState.channel;
      let newChannel = newState.channel;
      let oldMember = oldState.member;
      let newMember = newState.member;

      if (oldState.channel && newState.channel && newChannel !== oldChannel) {
        let i = 1;
        let voiceChannel = client83883.guilds.cache
          .get(newState.guild.id)
          .channels.cache.get(newChannel.id);
        let members = voiceChannel.members.map((m) => `${i++}- ${m.user}`);
        let serverMove = new Discord.MessageEmbed()
          .setThumbnail(
            oldState.member.user.displayAvatarURL({ dynamic: true })
          )
          .setDescription(
            `**${oldMember} change channel: \`${oldChannel.name}\` => \`${
              newChannel.name
            }\`\nBy: ${useR}\nmembers:**\n ${members.join("\n")}`
          )
          .setFooter(userTag, userAvatar)
          .setColor(color)
          .setAuthor(
            oldState.member.user.username,
            oldState.member.user.displayAvatarURL({ dynamic: true })
          );
        ch.send(serverMove).catch((err) => 0);
      }
    });
  });

  //--------------------استدعائات----------------------\\

  client83883.on(`message`, async (message) => {
    if (message.content.includes("discord.gg")) {
      let database = db.get(`link1_${message.guild.id}`);
      if (!database || database === "off") return;
      if (message.member.hasPermission("ADMINISTRATOR")) return;
      let logsch = db.get(`logsch_${message.guild.id}`);
      client83883.channels.cache
        .get(logsch)
        .send(
          `<@${message.author.id}>`,
          new Discord.MessageEmbed()
            .setTitle(`**نشر رابط في الشات 🖇**`)
            .setDescription(`الرسالة: \n${message.content}`)
        )
        .catch((err) => 0);
      message.delete();
      return message.channel.send(
        `<@${message.author.id}>`,
        new Discord.MessageEmbed().setDescription(
          `ممنوع نشر الروابط، بجيح انت 😠`
        )
      );
    }
  });

  tracker.on("guildMemberAdd", (member, inviter, invite) => {
    let SerPrefix = db.get(`prefix_${member.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    let database = db.get(`bo_${member.guild.id}`);
    if (!database || database === "off") return;
    if (member.user.bot)
      return member.kick(
        `anti bot. [${SerPrefix}bots off] | by ${inviter.tag}`
      );
  });

  client83883.on("channelUpdate", async (oldChannel, newChannel) => {
    if (oldChannel.type === "dm") return;
    if (newChannel.type === "dm") return;
    if (!db.has(`on_${oldChannel.guild.id}`)) return;
    let logsch = db.get(`logsch_${oldChannel.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await oldChannel.guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_UPDATE",
    });
    const chupdater = fetchedLogs.entries.first();
    if (!chupdater) return;

    let guild = oldChannel.guild;
    const entry = chupdater.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = chupdater;
    if (db.has(`${executor.id}_chupdater`)) {
      db.add(`${executor.id}_chupdater`, 1);
    }
    if (!db.has(`${executor.id}_chupdater`)) {
      db.set(`${executor.id}_chupdater`, 1);
    }
    if (!db.has(`limitedchupdate_${oldChannel.guild.id}`)) {
      db.set(`limitedchupdate_${oldChannel.guild.id}`, 15);
    }
    let rc = newChannel.name;
    if (oldChannel.name === rc) rc = "None";
    if (db.has(`${executor.id}_chupdater`)) {
      let createchcounts = db.get(`${executor.id}_chupdater`);
      let maxcreatech = db.get(`limitedchupdate_${oldChannel.guild.id}`);
      let color = oldChannel.guild.displayHexColor;
      if (color == "#000000") color = oldChannel.guild.hoistRole.hexColor;
      let creatchembed1 = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(oldChannel.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم تعديل روم من قبل: <@${executor.id}>**`)
        .addField("اسم الروم قبل التعديل:", `${oldChannel.name}`, true)
        .addField("اسم الروم بعد التعديل:", `${rc}`, true)
        .addField("الحد المسموح لشخص:", `${maxcreatech}`, true)
        .addField("قام بتعديل:", `${createchcounts}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          `ازالة جميع الخصائص من الشخص`,
          true
        );

      let creatchembed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(oldChannel.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم تعديل روم من قبل: <@${executor.id}>**`)
        .addField("اسم الروم قبل التعديل:", `${oldChannel.name}`, true)
        .addField("اسم الروم بعد التعديل:", `${rc}`, true)
        .addField("الحد المسموح لشخص:", `${maxcreatech}`, true)
        .addField("قام بتعديل:", `${createchcounts}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          ` لم يتم اتخاذ أي إجراء`,
          true
        );

      if (
        Number(db.get(`${executor.id}_chupdater`)) <=
        Number(db.get(`limitedchupdate_${oldChannel.guild.id}`))
      ) {
        oldChannel.guild.channels.cache
          .get(db.get(`logsch_${oldChannel.guild.id}`))
          .send(creatchembed);
      }
      if (
        Number(db.get(`${executor.id}_chupdater`)) >
        Number(db.get(`limitedchupdate_${oldChannel.guild.id}`))
      ) {
        oldChannel.guild.channels.cache
          .get(db.get(`logsch_${oldChannel.guild.id}`))
          .send(creatchembed1);
        oldChannel.guild.members.cache
          .get(executor.id)
          .roles.cache.forEach((role) => {
            if (role.permissions.has("MANAGE_CHANNELS")) {
              channel.guild.members.cache
                .get(executor.id)
                .roles.remove(role.id);
            }
          });
      }
    }
    setTimeout(async () => {
      await db.set(`${executor.id}_chupdater`, 0);
    }, 60000);
  });

  client83883.on("channelCreate", async (channel) => {
    if (channel.type === "dm") return;
    if (!db.has(`on_${channel.guild.id}`)) return;
    let logsch = db.get(`logsch_${channel.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_CREATE",
    });
    const chdeletor = fetchedLogs.entries.first();
    if (!chdeletor) return;
    let guild = channel.guild;
    const entry = chdeletor.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = chdeletor;
    if (db.has(`${executor.id}_chc`)) {
      db.add(`${executor.id}_chc`, 1);
    }
    if (!db.has(`${executor.id}_chc`)) {
      db.set(`${executor.id}_chc`, 1);
    }
    if (!db.has(`limitedchc_${channel.guild.id}`)) {
      db.set(`limitedchc_${channel.guild.id}`, 15);
    }

    if (db.has(`${executor.id}_chc`)) {
      let createchcounts = db.get(`${executor.id}_chc`);
      let maxcreatech = db.get(`limitedchc_${channel.guild.id}`);
      let color = channel.guild.displayHexColor;
      if (color == "#000000") color = channel.guild.hoistRole.hexColor;
      let creatchembed1 = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(channel.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم انشاء روم من قبل: <@${executor.id}>**`)
        .addField("اسم الروم:", `${channel.name}`, true)
        .addField("الحد المسموح لشخص:", `${maxcreatech}`, true)
        .addField("تم انشاء:", `${createchcounts}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          `ازالة جميع الخصائص من الشخص`,
          true
        );

      let creatchembed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(channel.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم انشاء روم من قبل: <@${executor.id}>**`)
        .addField("اسم الروم:", `${channel.name}`, true)
        .addField("الحد المسموح لشخص:", `${maxcreatech}`, true)
        .addField("تم انشاء:", `${createchcounts}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          ` لم يتم اتخاذ أي إجراء`,
          true
        );

      if (
        Number(db.get(`${executor.id}_chc`)) <=
        Number(db.get(`limitedchc_${channel.guild.id}`))
      ) {
        channel.guild.channels.cache
          .get(db.get(`logsch_${channel.guild.id}`))
          .send(creatchembed);
      }
      if (
        Number(db.get(`${executor.id}_chc`)) >
        Number(db.get(`limitedchc_${channel.guild.id}`))
      ) {
        channel.guild.channels.cache
          .get(db.get(`logsch_${channel.guild.id}`))
          .send(creatchembed1);
        channel.guild.members.cache
          .get(executor.id)
          .roles.cache.forEach((role) => {
            if (role.permissions.has("MANAGE_CHANNELS")) {
              channel.guild.members.cache
                .get(executor.id)
                .roles.remove(role.id);
            }
          });
      }
    }
    setTimeout(async () => {
      await db.set(`${executor.id}_chc`, 0);
    }, 60000);
  });

  client83883.on("channelDelete", async (channel) => {
    if (channel.type === "dm") return;
    if (!db.has(`on_${channel.guild.id}`)) return;
    let logsch = db.get(`logsch_${channel.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_DELETE",
    });
    const chdeletor = fetchedLogs.entries.first();
    if (!chdeletor) return;
    let guild = channel.guild;
    const entry = chdeletor.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = chdeletor;
    if (db.has(`${executor.id}_chd`)) {
      db.add(`${executor.id}_chd`, 1);
    }
    if (!db.has(`${executor.id}_chd`)) {
      db.set(`${executor.id}_chd`, 1);
    }
    if (!db.has(`limitedchd_${channel.guild.id}`)) {
      db.set(`limitedchd_${channel.guild.id}`, 15);
    }

    if (db.has(`${executor.id}_chd`)) {
      let deletescount = db.get(`${executor.id}_chd`);
      let maxdeletes = db.get(`limitedchd_${channel.guild.id}`);
      let color = channel.guild.displayHexColor;
      if (color == "#000000") color = channel.guild.hoistRole.hexColor;
      let deletechembed1 = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(channel.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم حذف روم من قبل: <@${executor.id}>**`)
        .addField("اسم الروم:", `${channel.name}`, true)
        .addField("الحد المسموح لشخص:", `${deletescount}`, true)
        .addField("تم حذف:", `${maxdeletes}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          `ازالة جميع الخصائص من الشخص`,
          true
        );
      let deletechembed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(channel.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم حذف روم من قبل: <@${executor.id}>**`)
        .addField("اسم الروم:", `${channel.name}`, true)
        .addField("الحد المسموح لشخص:", `${deletescount}`, true)
        .addField("تم حذف:", `${maxdeletes}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          ` لم يتم اتخاذ أي إجراء`,
          true
        );
      if (
        Number(db.get(`${executor.id}_chd`)) <=
        Number(db.get(`limitedchd_${channel.guild.id}`))
      ) {
        channel.guild.channels.cache
          .get(db.get(`logsch_${channel.guild.id}`))
          .send(deletechembed);
      }
      if (
        Number(db.get(`${executor.id}_chd`)) >
        Number(db.get(`limitedchd_${channel.guild.id}`))
      ) {
        channel.guild.channels.cache
          .get(db.get(`logsch_${channel.guild.id}`))
          .send(deletechembed1);
        channel.guild.members.cache
          .get(executor.id)
          .roles.cache.forEach((role) => {
            if (role.permissions.has("MANAGE_CHANNELS")) {
              channel.guild.members.cache
                .get(executor.id)
                .roles.remove(role.id);
            }
          });
      }
    }
    setTimeout(async () => {
      await db.set(`${executor.id}_chd`, 0);
    }, 60000);
  });

  client83883.on("roleDelete", async (role) => {
    if (!db.has(`on_${role.guild.id}`)) return;
    let logsch = db.get(`logsch_${role.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await role.guild.fetchAuditLogs({
      limit: 1,
      type: "ROLE_DELETE",
    });
    const roledeletor = fetchedLogs.entries.first();
    if (!roledeletor) return;

    {
    }
    let guild = role.guild;
    const entry = roledeletor.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = roledeletor;
    if (db.has(`${executor.id}_rd`)) {
      db.add(`${executor.id}_rd`, 1);
    }
    if (!db.has(`${executor.id}_rd`)) {
      db.set(`${executor.id}_rd`, 1);
    }
    if (!db.has(`limitedroled_${role.guild.id}`)) {
      db.set(`limitedroled_${role.guild.id}`, 15);
    }

    if (db.has(`${executor.id}_rd`)) {
      let deletecountrole = db.get(`${executor.id}_rd`);
      let maxdeleterole = db.get(`limitedroled_${role.guild.id}`);
      let color = role.guild.displayHexColor;
      if (color == "#000000") color = role.guild.hoistRole.hexColor;
      let deleterembed1 = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(role.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم حذف رول من قبل: <@${executor.id}>**`)
        .addField("اسم الرول:", `${role.name}`, true)
        .addField("الحد المسموح لشخص:", `${deletecountrole}`, true)
        .addField("تم حذف:", `${maxdeleterole}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          `ازالة جميع الخصائص من الشخص`,
          true
        );

      let deleterembed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(role.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم حذف رول من قبل: <@${executor.id}>**`)
        .addField("اسم الرول:", `${role.name}`, true)
        .addField("الحد المسموح لشخص:", `${deletecountrole}`, true)
        .addField("تم حذف:", `${maxdeleterole}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          ` لم يتم اتخاذ أي إجراء`,
          true
        );
      if (
        Number(db.get(`${executor.id}_rd`)) <=
        Number(db.get(`limitedroled_${role.guild.id}`))
      ) {
        role.guild.channels.cache
          .get(db.get(`logsch_${role.guild.id}`))
          .send(deleterembed);
      }
      if (
        Number(db.get(`${executor.id}_rd`)) >
        Number(db.get(`limitedroled_${role.guild.id}`))
      ) {
        role.guild.channels.cache
          .get(db.get(`logsch_${role.guild.id}`))
          .send(deleterembed1);
        role.guild.members.cache
          .get(executor.id)
          .roles.cache.forEach((rolea) => {
            if (rolea.permissions.has("MANAGE_ROLES")) {
              role.guild.members.cache.get(executor.id).roles.remove(rolea.id);
            }
          });
      }
    }
    setTimeout(async () => {
      await db.set(`${executor.id}_rd`, 0);
    }, 60000);
  });

  client83883.on("roleCreate", async (role) => {
    if (!db.has(`on_${role.guild.id}`)) return;
    let logsch = db.get(`logsch_${role.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await role.guild.fetchAuditLogs({
      limit: 1,
      type: "ROLE_CREATE",
    });
    const roledeletor = fetchedLogs.entries.first();
    if (!roledeletor) return;
    let guild = role.guild;
    const entry = roledeletor.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = roledeletor;
    if (db.has(`${executor.id}_r`)) {
      db.add(`${executor.id}_r`, 1);
    }
    if (!db.has(`${executor.id}_r`)) {
      db.set(`${executor.id}_r`, 1);
    }
    if (!db.has(`limitedrole_${role.guild.id}`)) {
      db.set(`limitedrole_${role.guild.id}`, 15);
    }

    if (db.has(`${executor.id}_r`)) {
      let createcount = db.get(`${executor.id}_r`);
      let maxcreate = db.get(`limitedrole_${role.guild.id}`);
      let color = role.guild.displayHexColor;
      if (color == "#000000") color = role.guild.hoistRole.hexColor;
      let createembed1 = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(role.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم انشاء رول من قبل: <@${executor.id}>**`)
        .addField("اسم الرول:", `${role.name}`, true)
        .addField("الحد المسموح لشخص:", `${createcount}`, true)
        .addField("تم انشاء:", `${maxcreate}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          `ازالة جميع الخصائص من الشخص`,
          true
        );

      let createembed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(role.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم انشاء من قبل: <@${executor.id}>**`)
        .addField("اسم الرول:", `${role.name}`, true)
        .addField("الحد المسموح لشخص:", `${createcount}`, true)
        .addField("تم انشاء:", `${maxcreate}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          ` لم يتم اتخاذ أي إجراء`,
          true
        );

      if (
        Number(db.get(`${executor.id}_r`)) <=
        Number(db.get(`limitedrole_${role.guild.id}`))
      ) {
        role.guild.channels.cache
          .get(db.get(`logsch_${role.guild.id}`))
          .send(createembed);
      }
      if (
        Number(db.get(`${executor.id}_r`)) >
        Number(db.get(`limitedrole_${role.guild.id}`))
      ) {
        role.guild.channels.cache
          .get(db.get(`logsch_${role.guild.id}`))
          .send(createembed1);
        role.guild.members.cache
          .get(executor.id)
          .roles.cache.forEach((rolee) => {
            if (rolee.permissions.has("MANAGE_ROLES")) {
              role.guild.members.cache.get(executor.id).roles.remove(rolee.id);
            }
          });
      }
    }
    setTimeout(async () => {
      await db.set(`${executor.id}_r`, 0);
    }, 60000);
  });

  client83883.on("roleUpdate", async (oldRole, newRole) => {
    if (!db.has(`on_${oldRole.guild.id}`)) return;
    let logsch = db.get(`logsch_${oldRole.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await newRole.guild.fetchAuditLogs({
      limit: 1,
      type: "ROLE_UPDATE",
    });
    const roleu = fetchedLogs.entries.first();
    if (!roleu) return;
    let guild = oldRole.guild;
    const entry = roleu.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = roleu;
    if (db.has(`${executor.id}_ru`)) {
      db.add(`${executor.id}_ru`, 1);
    }
    if (!db.has(`${executor.id}_ru`)) {
      db.set(`${executor.id}_ru`, 1);
    }
    if (!db.has(`limitedroleu_${newRole.guild.id}`)) {
      db.set(`limitedroleu_${newRole.guild.id}`, 15);
    }
    let rn = oldRole.name;
    if (rn === oldRole.name) rn = "None";
    if (db.has(`${executor.id}_ru`)) {
      let updatecounte = db.get(`${executor.id}_ru`);
      let maxupdate = db.get(`limitedroleu_${newRole.guild.id}`);
      let color = oldRole.guild.displayHexColor;
      if (color == "#000000") color = oldRole.guild.hoistRole.hexColor;
      let updateroleembed1 = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(oldRole.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم تعديل رول من قبل: <@${executor.id}>**`)
        .addField("اسم الرول قبل التعديل:", `${oldRole.name}`, true)
        .addField("اسم الرول بعد التعديل:", `${rn}`, true)
        .addField("الحد المسموح لشخص:", `${updatecounte}`, true)
        .addField("تم تعديل:", `${maxupdate}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          `ازالة جميع الخصائص من الشخص`,
          true
        );

      let updateroleembed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
        .setThumbnail(oldRole.guild.iconURL({ dynamic: true }))
        .setDescription(`**تم تعديل رول من قبل: <@${executor.id}>**`)
        .addField("اسم الرول قبل التعديل:", `${oldRole.name}`, true)
        .addField("اسم الرول بعد التعديل:", `${rn}`, true)
        .addField("الحد المسموح لشخص:", `${updatecounte}`, true)
        .addField("تم تعديل:", `${maxupdate}`, true)
        .addField(
          "الاجراء المتخذ في هذا الشخص:",
          ` لم يتم اتخاذ أي إجراء`,
          true
        );

      if (
        Number(db.get(`${executor.id}_ru`)) <=
        Number(db.get(`limitedroleu_${newRole.guild.id}`))
      ) {
        oldRole.guild.channels.cache
          .get(db.get(`logsch_${oldRole.guild.id}`))
          .send(updateroleembed);
      }
      if (
        Number(db.get(`${executor.id}_ru`)) >
        Number(db.get(`limitedroleu_${newRole.guild.id}`))
      ) {
        oldRole.guild.channels.cache
          .get(db.get(`logsch_${oldRole.guild.id}`))
          .send(updateroleembed1);
        oldRole.guild.members.cache
          .get(executor.id)
          .roles.cache.forEach((role) => {
            if (role.permissions.has("MANAGE_ROLES")) {
              newRole.guild.members.cache
                .get(executor.id)
                .roles.remove(role.id);
            }
          });
      }
    }
    setTimeout(async () => {
      await db.set(`${executor.id}_ru`, 0);
    }, 60000);
  });

  client83883.on("guildMemberRemove", async (member) => {
    if (!db.has(`on_${member.guild.id}`)) return;
    let logsch = db.get(`logsch_${member.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_KICK",
    });
    const banlog = fetchedLogs.entries.first();
    if (!banlog) return;

    let guild = member.guild;
    const entry = banlog.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = banlog;
    if (target.id === member.id) {
      if (db.has(`${executor.id}_kicks`)) {
        db.add(`${executor.id}_kicks`, 1);
      }
      if (!db.has(`${executor.id}_kicks`)) {
        db.set(`${executor.id}_kicks`, 1);
      }

      if (!db.has(`limitedkick_${member.guild.id}`)) {
        db.set(`limitedkick_${member.guild.id}`, 15);
      }

      if (db.has(`${executor.id}_kicks`)) {
        let kickscount = db.get(`${executor.id}_kicks`);
        let maxkicks = db.get(`limitedkick_${member.guild.id}`);
        let color = member.guild.displayHexColor;
        if (color == "#000000") color = member.guild.hoistRole.hexColor;
        let kicksembed = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
          .setThumbnail(member.guild.iconURL({ dynamic: true }))
          .setDescription(
            `**تم طرد شخص من السيرفر عن طريق: <@${executor.id}>**`
          )
          .addField("الشخص:", `<@${member.user.id}>`, true)
          .addField("الحد المسموح لشخص:", `${kickscount}`, true)
          .addField("تم طرد:", `${maxkicks}`, true)
          .addField(
            "الاجراء المتخذ في هذا الشخص:",
            `ازالة جميع الخصائص من الشخص`,
            true
          );

        let kickembed1 = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
          .setThumbnail(member.guild.iconURL({ dynamic: true }))
          .setDescription(
            `**تم طرد شخص من السيرفر عن طريق: <@${executor.id}>**`
          )
          .addField("الشخص:", `<@${member.user.id}>`, true)
          .addField("الحد المسموح لشخص:", `${kickscount}`, true)
          .addField("تم طرد:", `${maxkicks}`, true)
          .addField(
            "الاجراء المتخذ في هذا الشخص:",
            ` لم يتم اتخاذ أي إجراء`,
            true
          );

        if (
          Number(db.get(`${executor.id}_kicks`)) <=
          Number(db.get(`limitedkick_${member.guild.id}`))
        ) {
          member.guild.channels.cache
            .get(db.get(`logsch_${member.guild.id}`))
            .send(kickembed1);
        }
        if (
          Number(db.get(`${executor.id}_kicks`)) >
          Number(db.get(`limitedkick_${member.guild.id}`))
        ) {
          member.guild.channels.cache
            .get(db.get(`logsch_${member.guild.id}`))
            .send(kicksembed);
          member.guild.members.cache
            .get(executor.id)
            .roles.cache.forEach((role) => {
              if (role.permissions.has("KICK_MEMBERS")) {
                member.guild.members.cache
                  .get(executor.id)
                  .roles.remove(role.id);
              }
            });
        }
      }
      setTimeout(async () => {
        await db.set(`${executor.id}_kicks`, 0);
      }, 60000);
    }
  });

  client83883.on("guildMemberRemove", async (member) => {
    if (!db.has(`on_${member.guild.id}`)) return;
    let logsch = db.get(`logsch_${member.guild.id}`);
    if (!logsch) return;
    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_BAN",
    });
    const kickLog = fetchedLogs.entries.first();
    if (!kickLog) return;

    let guild = member.guild;
    const entry = kickLog.executor;
    if (
      !devs.includes(entry.id) ||
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_prtiallow`)
    )
      return;
    const { executor, target } = kickLog;
    if (target.id === member.id) {
      if (db.has(`${executor.id}_bans`)) {
        db.add(`${executor.id}_bans`, 1);
      }
      if (!db.has(`${executor.id}_bans`)) {
        db.set(`${executor.id}_bans`, 1);
      }

      if (!db.has(`limitedban_${member.guild.id}`)) {
        db.set(`limitedban_${member.guild.id}`, 15);
      }

      if (db.has(`${executor.id}_bans`)) {
        let banscount = db.get(`${executor.id}_bans`);
        let maxbans = db.get(`limitedban_${member.guild.id}`);
        let color = member.guild.displayHexColor;
        if (color == "#000000") color = member.guild.hoistRole.hexColor;
        let bansembed = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
          .setThumbnail(member.guild.iconURL({ dynamic: true }))
          .setDescription(
            `**قام شخص باعطاء باند لشخص من السيرفر عن طريق: <@${executor.id}>**`
          )
          .addField("الشخص:", `<@${member.user.id}>`, true)
          .addField("الحد المسموح لشخص:", `${banscount}`, true)
          .addField("تم تبنيد:", `${maxbans}`, true)
          .addField(
            "الاجراء المتخذ في هذا الشخص:",
            `ازالة جميع الخصائص من الشخص`,
            true
          );

        let bansembed1 = new Discord.MessageEmbed()
          .setColor(color)
          .setAuthor(client83883.user.tag, client83883.user.displayAvatarURL())
          .setThumbnail(member.guild.iconURL({ dynamic: true }))
          .setDescription(
            `**قام شخص باعطاء باند لشخص من السيرفر عن طريق: <@${executor.id}>**`
          )
          .addField("الشخص:", `<@${member.user.id}>`, true)
          .addField("الحد المسموح لشخص:", `${banscount}`, true)
          .addField("تم تبنيد:", `${maxbans}`, true)
          .addField(
            "الاجراء المتخذ في هذا الشخص:",
            ` لم يتم اتخاذ أي إجراء`,
            true
          );
        if (
          Number(db.get(`${executor.id}_bans`)) <=
          Number(db.get(`limitedban_${member.guild.id}`))
        ) {
          client83883.channels.cache
            .get(db.get(`logsch_${member.guild.id}`))
            .send(bansembed1);
        }
        if (
          Number(db.get(`${executor.id}_bans`)) >
          Number(db.get(`limitedban_${member.guild.id}`))
        ) {
          client83883.channels.cache
            .get(db.get(`logsch_${member.guild.id}`))
            .send(bansembed);
          member.guild.members.cache
            .get(executor.id)
            .roles.cache.forEach((role) => {
              if (role.permissions.has("BAN_MEMBERS")) {
                member.guild.members.cache
                  .get(executor.id)
                  .roles.remove(role.id);
              }
            });
        }
      }
      setTimeout(async () => {
        await db.set(`${executor.id}_bans`, 0);
      }, 60000);
    }
  });

  client83883.on("messageReactionAdd", (reaction, user) => {
    if (user.bot) return;
    const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
    if (!reactionRoles) return;
    reactionRoles.forEach(async (reactionRole) => {
      if (
        (reactionRole.emoji === reaction._emoji.name ||
          reactionRole.emoji == reaction._emoji.id) &&
        reactionRole.message == reaction.message.id
      ) {
        try {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(reactionRole.role);
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  client83883.on("messageReactionRemove", (reaction, user) => {
    if (user.bot) return;
    const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
    if (!reactionRoles) return;
    reactionRoles.forEach(async (reactionRole) => {
      if (
        (reactionRole.emoji === reaction._emoji.name ||
          reactionRole.emoji == reaction._emoji.id) &&
        reactionRole.message == reaction.message.id
      ) {
        try {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(reactionRole.role);
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  client83883.on("guildMemberAdd", (tmute) => {
    let muterole1 = tmute.guild.roles.cache.find((r) => r.name === "tmute");

    if (db.get(tmute.guild.id + tmute.id)) {
      tmute.roles.add(muterole1).catch(console.error);
    }
  });

  client83883.on("guildMemberAdd", (prison) => {
    let prison1 = prison.guild.roles.cache.find((r) => r.name === "prison");

    if (db.get(`prison_member_${prison.id}`)) {
      prison.roles.add(prison1).catch(console.error);
    }
  });

  client83883.on("guildMemberAdd", (auto) => {
    let auto22 = db.get(`auto_${auto.guild.id}`);
    if (!auto22 || auto22 === "off") return;
    var autorole = auto.guild.roles.cache.find(
      (role) => role.id === db.get(`autorole_${auto.guild.id}`)
    );
    if (!autorole) return;
    auto.roles.add(autorole, `auto role.`).catch(console.error);
  });

  client83883.on("guildMemberUpdate", async (oldMember, newMember) => {
    if (!oldMember.guild) return;
    if (oldMember.roles.cache.size >= newMember.roles.cache.size) return;
    let picrole = db.get(`pic_${oldMember.guild.id}`);
    let block = db.get(`${newMember.id}_blockuser`);
    if (!block) return;
    if (newMember.roles.cache.has(picrole))
      return newMember.roles.remove(picrole).catch(() => 0);
  });

  function ReactionEmojiGrab(reactionArg) {
    const contents = reactionArg
      .substring(1, reactionArg.length - 1)
      .split(":");
    if (contents.length > 1) {
      return contents[2];
    } else {
      return reactionArg;
    }
  }

  client83883.on("guildMemberAdd", (member) => {
    let database = db.get(`new1_${member.guild.id}`);
    if (!database || database === "off") return;
    let chnnel = db.fetch(`new_log_${member.guild.id}`);
    let AcTime = moment(member.user.createdTimestamp).fromNow();
    if (AcTime < "30 days ago") {
      var new_role = member.guild.roles.cache.find(
        (role) => role.name === "new"
      );
      var embed = new Discord.MessageEmbed()
        .setDescription(
          `Suspicious Accuont Has Go To Jail ${
            member.user
          }\nAccount Since: <t:${member.user.createdTimestamp
            .toString()
            .slice(0, 10)}:R>`
        )

        .setTimestamp();

      member.roles.add(new_role, `Fake Accounts`);
      client83883.channels.cache.get(chnnel).send(embed);
    } else {
      member.roles.add(new_role, `Fake Accounts`);
      client83883.channels.cache.get(chnnel).send(embed);
    }
  });

  client83883.on("voiceStateUpdate", (oldState, newState) => {
    if (newState.channelID === null) return;

    let channel = client83883.channels.cache.get(newState.channelID);

    v.set(`${newState.guild.id}_${newState.id}`, {
      channel: channel.name,
      time: moment(Date.now()).format("YYYY/MM/DD **hh:mm**"),
    });
  });

  client83883.on("guildMemberAdd", (member) => {
    let condition = db.fetch(`${member.id}_blacklist`);
    if (condition) {
      member.guild.members.ban(member);
    }
  });

  client83883.on("guildBanRemove", (member) => {
    let condition = db.fetch(`${member.id}_blacklist`);
    if (condition) {
      member.guild.members.ban(member.user);
    }
  });

  client83883.on(`message`, async (message) => {
    try {
      var voname = db.get(`voicename_${message.guild.id}`);
      if (voname == null || voname == undefined) return;
      var ch = db.get(`voiceonline_${message.guild.id}`);
      if (ch == null || ch == undefined) return;
      let database = db.get(`voiceonoff_${message.guild.id}`);
      if (!database || database === "off") return;
      var c = client83883.channels.cache.find((c) => c.id === ch);
      setInterval(() => {
        c.setName(
          `${voname} ${
            message.guild.members.cache.filter((m) => m.voice.channel).size
          }`
        );
      }, 600000);
    } catch (err) {
      console.log(err);
    }
  });

  client83883.on("voiceStateUpdate", async (oldState, newState) => {
    let allow = db.fetch(`${newState.member.id}_allow`);
    if (allow) return;
    if (newState.channel) {
      if (newState.channel.full) {
        newState.member.voice.kick();
      }
    }
  });

  tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
    if (error) return;
    let data = await db1.findOne({
      id: member.guild.id,
    });
    if (!data || !data.welcome) return;
    if (data.welchat == "null") return;
    let channel = member.guild.channels.cache.find(
      (c) => c.id === data.welchat
    );
    if (!channel) return;
    let background;
    try {
      background = data.pic != "null" ? await canvas.loadImage(data.pic) : null;
    } catch (err) {
      background = "null";
    }
    let avatar = await canvas.loadImage(
      member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
    );
    let can = canvas.createCanvas(120, 120);
    let ctt = can.getContext("2d");
    ctt.beginPath();
    ctt.arc(60, 60, 60, 0, Math.PI * 2, true);
    ctt.closePath();
    ctt.clip();
    ctt.drawImage(avatar, 0, 0, 120, 120);
    let buff_avatar = await can.toBuffer();
    let avatar_1 = await canvas.loadImage(buff_avatar);
    let Canvas = canvas.createCanvas(data.wsize, data.hsize);

    let ctx = Canvas.getContext("2d");
    if (background != "null") {
      try {
        ctx.drawImage(background, 0, 0, data.wsize, data.hsize);
      } catch (err) {}
    }
    ctx.drawImage(
      avatar_1,
      data.xavatar,
      data.yavatar,
      data.sxavatar,
      data.syavatar
    );
    ctx.textAlign = "center";
    ctx.fillStyle = `${data.ncolor}`;
    ctx.font = `${data.sname}px "Roboto"`;
    ctx.fillText(
      member.user.username?.length > 12
        ? member.user.username.substring(0, 12) + "..."
        : member.user.username,
      data.xname,
      data.yname
    );
    let image = await Canvas.toBuffer();
    if (data.message == "null") {
      channel
        .send({
          files: [
            {
              name: "welcome.png",
              attachment: image,
            },
          ],
        })
        .catch((err) => 0);
    } else {
      let msg = data.message
        .replace("[user]", `<@${member.user.id}>`)
        .replace("[userName]", member.user.username)
        .replace("[memberCount]", member.guild.memberCount)
        .replace("[server]", member.guild.name)
        .replace(
          "[inviter]",
          inviter ? `<@${inviter.id}>` : `<@${guild.owner.id}>`
        )
        .replace(
          "[inviterName]",
          inviter ? inviter.username : `${guild.owner.username}`
        )
        .replace("[invites]", invite ? invite.count : "Unknown");
      await channel
        .send({
          files: [
            {
              name: "welcome.png",
              attachment: image,
            },
          ],
        })
        .catch((err) => 0);
      channel.send({ content: msg }).catch((err) => 0);
    }
  });

  tracker.on("error", (guild, err) => {
    return;
  });
  async function verifyColor(color) {
    try {
      let colorr = color.toString().split("#").join("");
      let data = await axios.get(
        "https://api.popcat.xyz/color/" + colorr.toUpperCase()
      );
      let info = data.data;
      if (info.error === "Not valid!") {
        return false;
      } else {
        if (info.name.toLowerCase().startsWith("invalid color")) {
          return false;
        } else {
          return info.rgb;
        }
      }
    } catch (err) {
      return false;
    }
  }

  async function createList(guild, background) {
    let x = 0;
    let y = 0;
    guild.roles.cache
      .filter((r) => String(Number(r.name)) === r.name)
      .sort((b1, b2) => b1.name - b2.name)
      .forEach((role) => {
        x += 100;
        if (x > 100 * 12) {
          x = 100;
          y += 80;
        }
      });
    var canvas = await Canvas.createCanvas(100 * 12, y + 330);
    let ctx = canvas.getContext("2d");
    if (background != "null") {
      let image = null;
      try {
        image = await Canvas.loadImage(background);
      } catch (err) {
        image = null;
      }
      if (image) {
        ctx.drawImage(image, 0, 0, 100 * 12, y + 330);
      }
    }
    ctx.fillStyle = "white";
    ctx.font = `100px Arial`;
    ctx.fillText(``, 300, 100);
    let normal_size = {
      _1: 0,
      _2: 150,
    };
    guild.roles.cache
      .filter((r) => String(Number(r.name)) === r.name)
      .sort((b1, b2) => b1.name - b2.name)
      .forEach((role) => {
        normal_size._1 += 75;
        if (normal_size._1 >= 100 * 10) {
          normal_size._1 = 75;
          normal_size._2 += 80;
        }
        ctx.fillStyle = `${role.hexColor || "#ffffff"}`;
        ctx.fillRect(normal_size._1, normal_size._2, 65, 65);
        ctx.fillStyle = "white";
        if (`${role.name}`.length > 2) {
          ctx.font = `27px Arial`;
          ctx.fillText(
            `${role.name}`,
            normal_size._1 + 12,
            normal_size._2 + 40
          );
        } else if (`${role.name}`.length > 1) {
          ctx.font = `30px Arial`;
          ctx.fillText(
            `${role.name}`,
            normal_size._1 + 18,
            normal_size._2 + 40
          );
        } else {
          ctx.font = `35px Arial`;
          ctx.fillText(
            `${role.name}`,
            normal_size._1 + 25,
            normal_size._2 + 40
          );
        }
      });
    return canvas.toBuffer();
  }

  function setTime(func, time) {
    let t = time - Date.now();
    let max = 24 * 24 * 60 * 60000;
    if (t > max) {
      setTimeout(() => {
        setTime(func, time);
      }, max);
    } else {
      setTimeout(async () => {
        await func();
      }, t);
    }
  }

  async function tempMute(member, reason, time) {
    let data = await guild_db.findOne({
      id: member.guild.id,
    });
    if (!data) return null;
    let start_time = Date.now();
    let role = member.guild.roles.cache.find(
      (r) => r.name.toLowerCase() === "tmute"
    );
    if (!role) {
      role = await member.guild.roles
        .create({
          name: "tmute",
        })
        .catch((err) => 0);
      member.guild.channels.cache.forEach(async (ch) => {
        await ch.permissionOverwrites
          .edit(role.id, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
          })
          .catch((err) => 0);
      });
    }
    let user_data = await user_db.findOne({
      id: member.user.id,
      guildId: member.guild.id,
    });
    if (!user_data) {
      user_data = await user_db.create({
        id: member.user.id,
        guildId: member.guild.id,
      });
      await user_data.save();
    }
    user_data.mute.s_time = start_time;
    user_data.mute.time = parseInt(time);
    user_data.mute.reason = reason;
    await user_data.save();
    await member.roles.add(role.id).catch((err) => 0);
    let channel = await member.guild.channels.cache.find(
      (ch) => ch.name === "tmute"
    );
    setTime(async () => {
      let dd = await user_db.findOne({
        id: member.user.id,
        guildId: member.guild.id,
      });
      if (!dd) return;
      if (dd.mute.s_time + dd.mute.time - Date.now() > 0) return;
      let guild = client83883.guilds.cache.get(dd.guildId);
      if (!guild) return;
      let membe2r = await guild.members.fetch(dd.id).catch((err) => 0);
      if (!membe2r) return;
      let role = guild.roles.cache.find(
        (r) => r.name.toLowerCase() === "tmute"
      );
      if (!role) return;
      if (!membe2r.roles.cache.has(role.id)) return;
      await membe2r.roles.remove(role).catch((err) => 0);
      dd.mute.time = 0;
      await dd.save();
      let channel = await member.guild.channels.cache.find(
        (ch) => ch.name === "tmute"
      );
      if (!channel) return;
      channel
        .send(`فك ميوت شات ${membe2r}\nالسبب \`انتهاء الوقت\``, {
          files: ["./images/file.png"],
        })
        .catch((err) => 0);
    }, time + start_time);
  }

  client83883.on("ready", async () => {
    setInterval(async () => {
      let data = await guild_db.find({});
      data.forEach(async (d) => {
        setTime(async () => {
          let dd = await user_db.findOne({
            id: d.id,
            guildId: d.guildId,
          });
          if (!dd) return;
          if (dd.mute.s_time + dd.mute.time - Date.now() > 0) return;
          let guild = client83883.guilds.cache.get(d.guildId);
          if (!guild) return;
          let member = await guild.members.fetch(d.id).catch((err) => 0);
          if (!member) return;
          let role = guild.roles.cache.find(
            (r) => r.name.toLowerCase() === "tmute"
          );
          if (!role) return;
          if (!member.roles.cache.has(role.id)) return;
          await member.roles.remove(role).catch((err) => 0);
          let channel = await guild.channels.cache.find(
            (ch) => ch.name === "tmute"
          );
          if (!channel) return;
          channel.send(`فك ميوت شات ${member}\nالسبب \`انتهاء الوقت\``, {
            files: ["./images/file.png"],
          });
          dd.mute.time = 0;
          await dd.save();
        }, d.time + d.s_time);
      });
    }, 10000);
  });

  client83883.on("guildMemberAdd", async (member) => {
    let data = await user_db.findOne({
      id: member.user.id,
      guildId: member.guild.id,
    });
    if (!data) return;
    let role = member.guild.roles.cache.find(
      (r) => r.name.toLowerCase() === "tmute"
    );
    if (!role) return;
    let time = data.mute.time + data.mute.s_time - Date.now();
    if (time < 0) return;
    member.roles.add(role).catch((err) => 0);
  });

  function checkAdmin(id) {
    if (!id) return console.log(`Please Insert valid Id !`);
    if (!db.has(`admin_${id}`)) {
      return false;
    } else {
      return true;
    }
  }

  //--------------------اوامر عاديه----------------------\\

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `close` || command === "قفل") {
      let cmd = db.get(`lockcmd_${message.guild.id}`);
      if (cmd) return;
      if (
        !message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")
      )
        return message.react(`❌`);
      if (
        !message.guild.member(client83883.user).hasPermission("MANAGE_CHANNELS")
      )
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
        SEND_MESSAGES: false,
      });
      return message
        .lineReplyNoMention(`**> 🔒 تم قفل روم <#${message.channel.id}>**`)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `open` || command === "فتح") {
      let cmd = db.get(`lockcmd_${message.guild.id}`);
      if (cmd) return;
      if (
        !message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")
      )
        return message.react(`❌`);
      if (
        !message.guild.member(client83883.user).hasPermission("MANAGE_CHANNELS")
      )
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
        SEND_MESSAGES: true,
      });
      return message
        .lineReplyNoMention(`**> 🔓 تم فتح روم <#${message.channel.id}>**`)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `hide` || command === "اخفاء") {
      let cmd = db.get(`hidecmd_${message.guild.id}`);
      if (cmd) return;
      if (
        !message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")
      )
        return message.react(`❌`);
      if (
        !message.guild.member(client83883.user).hasPermission("MANAGE_CHANNELS")
      )
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
        VIEW_CHANNEL: false,
      });
      return message
        .lineReplyNoMention(`**> تم اخفاء الروم <#${message.channel.id}>**`)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `unhide` || command === "اظهار") {
      let cmd = db.get(`hidecmd_${message.guild.id}`);
      if (cmd) return;
      if (
        !message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")
      )
        return message.react(`❌`);
      if (
        !message.guild.member(client83883.user).hasPermission("MANAGE_CHANNELS")
      )
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
        VIEW_CHANNEL: true,
      });
      return message
        .lineReplyNoMention(`**> تم اظهار الروم <#${message.channel.id}>**`)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `color` || command === "لون") {
      let cmd = db.get(`colorcmd_${message.guild.id}`);
      if (cmd) return;
      if (isNaN(args)) return message.react("❌");
      let role = message.guild.roles.cache.find((r) => r.name == args);
      if (!role) return message.react("❌");
      message.member.roles.cache
        .filter((rolee) => !isNaN(rolee.name))
        .forEach((role) => {
          message.member.roles.remove(role);
        });
      if (message.member.roles.cache.has(role.id)) {
        message.member.roles.remove(role).then(() => {
          return message.react("☑");
        });
      } else {
        message.member.roles.add(role).then(() => {
          return message.react("✅");
        });
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content === "color" || message.content.startsWith("لون")) {
      let args = message.content.split(" ").slice(1).join(" ");
      let cmd = db.get(`colorcmd_${message.guild.id}`);
      if (cmd) return;
      if (isNaN(args)) return message.react("❌");
      let role = message.guild.roles.cache.find((r) => r.name == args);
      if (!role) return message.react("❌");
      message.member.roles.cache
        .filter((rolee) => !isNaN(rolee.name))
        .forEach((role) => {
          message.member.roles.remove(role);
        });
      if (message.member.roles.cache.has(role.id)) {
        message.member.roles.remove(role).then(() => {
          return message.react("☑");
        });
      } else {
        message.member.roles.add(role).then(() => {
          return message.react("✅");
        });
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `reactrole`) {
      const args = message.content.split(" ");
      if (!args[1])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :x: | please include an emoji`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!args[2])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :x: | there must be an id for the message`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[2]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :x: | please include a valid message id`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!args[3])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :x: | please include the id of the role ID`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[3]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :x: | please include a valid ID for the role that should be given upon reaction`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let emoji = ReactionEmojiGrab(args[1]);
      if (!isNaN(emoji)) emoji = client83883.emojis.cache.get(emoji);
      try {
        const msg = await message.channel.messages.fetch(args[2]);
        await msg.react(emoji);

        db.push(`${message.guild.id}.reactionroles`, {
          message: msg.id,
          emoji: emoji.id || emoji,
          role: args[3],
        });
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :white_check_mark: | done`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } catch (e) {
        message
          .lineReplyNoMention("Error\n" + e)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `server`) {
      let cmd = db.get(`servercmd_${message.guild.id}`);
      if (cmd) return;
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return;
      let text = message.guild.channels.cache.filter(
        (r) => r.type === "text"
      ).size;
      let voice = message.guild.channels.cache.filter(
        (r) => r.type === "voice"
      ).size;
      let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(
          message.author.username,
          message.author.avatarURL({ dynamic: true })
        )
        .setTitle(`❯ Guild Name : \`${message.guild.name}\` `)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField(`❯ Guild Owner`, `» <@${message.guild.ownerID}>`, true)
        .addField(
          "❯ Guild Created",
          `» ${moment(message.guild.createdTimestamp).format(
            "YYYY/MM/DD `h:mm`"
          )}`,
          true
        )
        .addField("❯ Guild Member", `» \`${message.guild.memberCount}\` `, true)
        .addField(
          "❯ Guild Roles",
          `» \`${message.guild.roles.cache.size}\` `,
          true
        )
        .addField(
          "❯ Guild Verification",
          `» \`${message.guild.verificationLevel}\` `,
          true
        )
        .addField(
          "❯ Guild States Member",
          `» Online : \`${
            message.guild.members.cache.filter(
              (m) => m.presence.status === "online"
            ).size
          }\`\n» Do Not Distrub : \`${
            message.guild.members.cache.filter(
              (m) => m.presence.status === "dnd"
            ).size
          }\`\n» Idle : \`${
            message.guild.members.cache.filter(
              (m) => m.presence.status === "idle"
            ).size
          }\`\n» Offline : \`${
            message.guild.members.cache.filter(
              (m) => m.presence.status === "offline"
            ).size
          }\`\ `,
          false
        )
        .addField(
          "❯ Guild Rooms",
          `» All : \`${
            text + voice
          }\`\n» Text : \`${text}\`\n» Voice : \`${voice}\` `,
          true
        )
        .addField(
          "❯ Voice Online",
          `» Members : \`${
            message.guild.members.cache.filter(
              (m) => m.voice.channel && !m.user.bot
            ).size
          }\`\n» Bots : \`${
            message.guild.members.cache.filter(
              (m) => m.voice.channel && m.user.bot
            ).size
          }\`\n» All : \`${
            message.guild.members.cache.filter((m) => m.voice.channel).size
          }\``,
          true
        )
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTimestamp();

      message
        .lineReplyNoMention(embed)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
    if (command === `user`) {
      let cmd = db.get(`usercmd_${message.guild.id}`);
      if (cmd) return;
      let args = message.content.split(" ");
      let user =
        message.mentions.users.first() ||
        client83883.users.cache.get(args[1]) ||
        message.author;
      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.member;

      let voice = v.get(`${message.guild.id}_${user.id}`);
      if (!v.has(`${message.guild.id}_${message.author.id}`) === true) {
        let embed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}`, user.avatarURL({ dynamic: true }))
          .setThumbnail(user.avatarURL({ dynamic: true }))
          .setFooter(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .addField(
            "created time:",
            `${moment(user.createdTimestamp).format("YYYY/MM/DD")} \n**${moment(
              user.createdTimestamp
            ).fromNow()}**`,
            true
          )
          .addField(
            "joined time:",
            `${moment(member.joinedAt).format("YYYY/MM/DD")} \n**${moment(
              member.joinedAt
            ).fromNow()}**`,
            true
          )
          .addField("last voice:", `none \nin **none**`, true);
        message.lineReplyNoMention(embed);
      } else {
        if (!voice || !voice.channel) voice = { ...voice, channel: "**none**" };
        if (!voice.time) voice = { ...voice, time: "none" };
        let embed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}`, user.avatarURL({ dynamic: true }))
          .setThumbnail(user.avatarURL({ dynamic: true }))
          .setFooter(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .addField(
            "created time:",
            `${moment(user.createdTimestamp).format("YYYY/MM/DD")} \n**${moment(
              user.createdTimestamp
            ).fromNow()}**`,
            true
          )
          .addField(
            "joined time:",
            `${moment(member.joinedAt).format("YYYY/MM/DD")} \n**${moment(
              member.joinedAt
            ).fromNow()}**`,
            true
          )
          .addField(
            "last voice:",
            `${voice.time} \nin **${voice.channel}**`,
            true
          );
        message
          .lineReplyNoMention(embed)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `lv`) {
      if (
        !devs.includes(message.author.id) &&
        !checkOwner(message.author.id) &&
        !checkAdmin(message.author.id)
      )
        return message.react(`❌`);
      let args = message.content.split(" ");
      let user =
        message.mentions.users.first() ||
        client83883.users.cache.get(args[1]) ||
        message.author;
      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.member;
      let voice = v.get(`${message.guild.id}_${user.id}`);
      if (!v.has(`${message.guild.id}_${message.author.id}`) === true) {
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | looks like he hasn't joined an audio channel before then`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        if (!voice || !voice.channel)
          voice = {
            ...voice,
            channel: "undefined",
          };
        if (!voice.time) voice = { ...voice, time: "undefined" };

        let embed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}`, user.avatarURL({ dynamic: true }))
          .setThumbnail(message.author.avatarURL({ dynamic: true }))
          .setFooter(
            `request by: ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField("member:", `${user}`, false)
          .addField("last data:", `${voice.time}`, false)
          .addField("last channel:", `In ${voice.channel}`, false);
        message
          .lineReplyNoMention(embed)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "check")) {
      let d = await schema.findOne({ namet: "check" });
      if (
        !devs.includes(message.author.id) &&
        !checkOwner(message.author.id) &&
        !checkAdmin(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return message.react(`❌`);
      var args = message.content.split(" ").slice(1).join(" ");
      var role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((r) => r.name === args) ||
        message.guild.roles.cache.find((r) => r.id === args);
      if (!role)
        return message
          .lineReplyNoMention(
            `> ** منشن الرول او اكتب اسم الرول **
\`${SerPrefix}check admins\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var members = message.guild.members.cache.filter((m) =>
        m.roles.cache.get(role.id)
      );
      let i = 1;

      let check = members.map((m) => `**${i++}. ${m.user}**`);

      if (members.size <= 0)
        message
          .lineReplyNoMention(`**> مافي اي شخص في الرول **`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.lineReplyNoMention(check.join("\n"), {
        split: true,
      });
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `rooms`) {
      let d = await schema.findOne({ namet: "check" });
      if (
        !devs.includes(message.author.id) &&
        !checkOwner(message.author.id) &&
        !checkAdmin(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return message.react(`❌`);
      let i = 1;
      let filter = message.guild.members.cache
        .filter(
          (m) =>
            m.permissions.has("SEND_TTS_MESSAGES") &&
            m.voice.channelID == null &&
            !m.user.bot &&
            m.presence.status !== "offline"
        )
        .map((mm) => `**${i++} - ${mm.user}**`);
      if (!filter || filter.length < 1)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | looks like no one out from voice channels`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.lineReplyNoMention({
        content: filter.join("\n"),
        split: true,
      });
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `allrooms`) {
      let d = await schema.findOne({ namet: "check" });
      if (
        !devs.includes(message.author.id) &&
        !checkOwner(message.author.id) &&
        !checkAdmin(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return message.react(`❌`);
      let i = 1;
      let filter = message.guild.members.cache
        .filter(
          (m) =>
            m.permissions.has("SEND_TTS_MESSAGES") &&
            m.voice.channelID == null &&
            !m.user.bot
        )
        .map((mm) => `${mm}`);
      if (!filter || filter.length < 1)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | looks like no one out from voice channels`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.lineReplyNoMention({
        content: `**${filter.length} Members.**\n` + filter.join(", "),
        split: true,
      });
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `avatar`) {
      let cmd = db.get(`avatarcmd_${message.guild.id}`);
      if (cmd) return;
      let args = message.content.split(" ");
      let user =
        message.mentions.users.first() ||
        client83883.users.cache.get(args[1]) ||
        message.author;
      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.member;
      const embed = new Discord.MessageEmbed()
        .setTitle(`This is the avatar you want.`)
        .setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
        .setTimestamp();
      message
        .lineReplyNoMention(embed)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `banner`) {
      let cmd = db.get(`bannercmd_${message.guild.id}`);
      if (cmd) return;
      let args = message.content.split(" ");
      let user =
        message.mentions.users.first() ||
        client83883.users.cache.get(args[1]) ||
        message.author;
      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.member;
      message
        .lineReplyNoMention(await user.bannerURL())
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
      message
        .lineReplyNoMention(await user.banner)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  //--------------------اوامر الحماية----------------------\\

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (message.channel.type === "dm") return;
    let botmen = message.mentions.users.first();
    if (botmen) {
      if (botmen.id === client83883.user.id) {
      }
    }

    if (command === "info") {
      if (!devs.includes(message.author.id)) return;
      let protectionmode = "⚠️";
      let logs = db.get(`logsch_${message.guild.id}`);
      if (!logs) logs = "no log channel is selected.";
      if (db.has(`on_${message.guild.id}`)) protectionmode = "✅";
      let bans = db.get(`limitedban_${message.guild.id}`) || "off";
      let kicks = db.get(`limitedkick_${message.guild.id}`) || "off";
      let channelc = db.get(`limitedchc_${message.guild.id}`) || "off";
      let channelu = db.get(`limitedchupdate_${message.guild.id}`) || "off";
      let channeld = db.get(`limitedchd_${message.guild.id}`) || "off";
      let rolesc = db.get(`limitedrole_${message.guild.id}`) || "off";
      let roleu = db.get(`limitedroleu_${message.guild.id}`) || "off";
      let roled = db.get(`limitedroled_${message.guild.id}`) || "off";
      if (!devs.includes(message.author.id)) return;
      message
        .lineReplyNoMention(
          `> Protection info :
> - log : <#${logs}>
> - ban : \`${bans}\`
> - kick : \`${kicks}\`
> - channel create : \`${channelc}\`
> - channel update : \`${channelu}\`
> - channel delete : \`${channeld}\`
> - role create : \`${rolesc}\`
> - role update : \`${roleu}\`
> - role delete : \`${roled}\`
> - time : \`1000\``
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
    if (command === "protect") {
      if (!devs.includes(message.author.id)) return;
      if (!args[0])
        return message
          .lineReplyNoMention(
            `> Protection commands :
> ${SerPrefix}sbans
> ${SerPrefix}skicks
> ${SerPrefix}srolescreate
> ${SerPrefix}srolesupdate
> ${SerPrefix}srolesdelete
> ${SerPrefix}schannelcreate
> ${SerPrefix}schannelupdate
> ${SerPrefix}schanneldelete
> ${SerPrefix}stime (ms)`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let pick = args[0];
      if (pick === "protection") {
        message
          .lineReplyNoMention(
            `> :x: type ${SerPrefix}protection on or ${SerPrefix}protection off ..`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "sbans") {
        message
          .lineReplyNoMention(`> ❌ type ${SerPrefix}set-bans number ...`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "skicks") {
        message
          .lineReplyNoMention(`> ❌ type ${SerPrefix}set-kicks number ..`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "schannelcreate") {
        message
          .lineReplyNoMention(
            `> ❌ type ${SerPrefix}set-channelcreate number ..`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "schannelupdate") {
        message
          .lineReplyNoMention(
            `> ❌ type ${SerPrefix}set-channelupdate number ..`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "schanneldelete") {
        message
          .lineReplyNoMention(
            `> ❌ type ${SerPrefix}set-channeldelete number ..`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "srolescreate") {
        message
          .lineReplyNoMention(`> ❌ type ${SerPrefix}set-rolescreate number ..`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "srolesupdate") {
        message
          .lineReplyNoMention(`> ❌ type ${SerPrefix}set-rolesupdate number ..`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (pick === "srolesdelete") {
        message
          .lineReplyNoMention(`> ❌ type ${SerPrefix}set-rolesdelete number ..`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
    if (command === "setpro") {
      if (!devs.includes(message.author.id)) return;
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الروم او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let logsch =
        message.mentions.channels.first() ||
        message.guild.channels.cache.find((ch) => ch.id === args[0]);
      if (!logsch)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الروم او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`logsch_${message.guild.id}`, logsch.id);
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ${logsch} تم تحديد لوق الحماية الى.`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
    if (command === "protection") {
      if (!devs.includes(message.author.id)) return;
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: type ${SerPrefix}protection on or ${SerPrefix}protection off ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] !== "on" && args[0] !== "off")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: type ${SerPrefix}protection on or ${SerPrefix}protection off ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "on") {
        if (db.has(`on_${message.guild.id}`)) return message.react(`✅`);
        db.set(`on_${message.guild.id}`, "on");
        message.react(`✅`);
      }
      if (args[0] === "off") {
        if (!db.has(`on_${message.guild.id}`)) return message.react(`✅`);
        db.delete(`on_${message.guild.id}`);
        message.react(`✅`);
      }
    }
    if (command === "sbans") {
      if (!devs.includes(message.author.id)) return;
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}sbans number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}sbans number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}sbans number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedban_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "skicks") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedkick_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    if (message.channel.type === "dm") return;
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "schannelcreate") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedchc_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    if (message.channel.type === "dm") return;
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "srolescreate") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> ❌ type ${SerPrefix}${command} number ..`
          )
        );
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedrole_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    if (message.channel.type === "dm") return;
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "schannelupdate") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedchupdate_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    if (message.channel.type === "dm") return;
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "srolesupdate") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedroleu_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    if (message.channel.type === "dm") return;
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "srolesdelete") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedroled_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    if (message.channel.type === "dm") return;
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "schanneldelete") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (isNaN(args[0]))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[0] === "0")
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> ❌ type ${SerPrefix}${command} number ..`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`limitedchd_${message.guild.id}`, args[0]);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(SerPrefix)) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    //ALLOW/REMOVE
    if (command == "adwl") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على هذا الشخص`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let data = db.get(`${user.id}_giveAdminRole`);
      if (data) {
        db.delete(`${user.id}_giveAdminRole`);
        message.react(`☑`);
      } else {
        db.set(`${user.id}_giveAdminRole`, true);
        message.react(`✅`);
      }
    }
    /**************************************************************************************/
    //ADMIN WHITELIST LIST
    if (command == "adwlist") {
      let checkAuthor = db.get(`${message.author.id}_giveAdminRole`);
      if (!devs.includes(message.author.id) && !checkAuthor) return;
      let count = 1;
      const msg = message.guild.members.cache
        .filter((member) => db.get(`${member.id}_giveAdminRole`) == true)
        .map((member) => `${count++}- ${member.user}`)
        .join("\n");
      const size = message.guild.members.cache.filter(
        (member) => db.get(`${member.id}_giveAdminRole`) == true
      ).size;
      if (size > 0) {
        const list2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(
            `https://cdn.discordapp.com/attachments/964993831441428480/964994300993736714/unknown.png`
          )
          .setTitle(`**Users: ${size}**`)
          .setDescription(`${msg}`)
          .setAuthor(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );

        const list = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setDescription(`Whitelist \n${msg} \nwhite list Size ${size}`);
        message.lineReplyNoMention(list2);
      } else {
        let checkAuthor = db.get(`${message.author.id}_giveAdminRole`);
        if (devs.includes(message.author.id) && !checkAuthor) return;
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            "> :x: | there is no one in list"
          )
        );
      }
    }

    /**************************************************************************************/
    //ADD ADMINS ROLES
    if (command == "adrole") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      if (!args)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | منشن الرول او اكتب الايدي.`
          )
        );
      let roleName,
        roleid = args;
      let role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((role) => role.name === roleName) ||
        message.guild.roles.cache.find((role) => role.id === roleid);
      let there = db.fetch(`adminRoles_${message.guild.id}_${role.id}`);
      if (there) {
        db.delete(`adminRoles_${message.guild.id}_${role.id}`);
        message.react(`☑`);
      } else {
        db.set(`adminRoles_${message.guild.id}_${role.id}`, role.id);
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ${role} تم اضافة رول ممنوع `
          )
        );
      }
    }

    /**************************************************************************************/
    //SHOW ADMINS ROLES
    if (command == "adrlist") {
      let checkAuthor = db.get(`${message.author.id}_giveAdminRole`);
      if (!devs.includes(message.author.id) && !checkAuthor) return;
      let count = 1;
      let msg = db
        .all()
        .filter((data) =>
          data.ID.startsWith(`adminRoles_${message.guild.id}_`)
        );
      if (msg.length > 0) {
        var result = "";
        for (var i in msg) {
          let role = msg[i].ID.split("_")[2];

          result += `${count++}- <@&${role}> \n`;
        }
        const roleList2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(
            `https://cdn.discordapp.com/attachments/964993831441428480/964994300993736714/unknown.png`
          )
          .setDescription(`${result}`)
          .setAuthor(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );
        const roleList = new Discord.MessageEmbed()
          .setColor("ORANGE")
          .setDescription(`**Roles List**\n ${result}`);
        message.lineReplyNoMention(roleList2);
      } else {
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            "> :x: | there is no one in list"
          )
        );
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(SerPrefix)) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    //ALLOW/REMOVE
    if (command == "acwl") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على هذا الشخص`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let data = db.get(`${user.id}_giveActiveRole`);
      if (data) {
        db.delete(`${user.id}_giveActiveRole`);
        message.react(`☑`);
      } else {
        db.set(`${user.id}_giveActiveRole`, true);
        message.react(`✅`);
      }
    }
    /**************************************************************************************/
    //ADMIN WHITELIST LIST
    if (command == "acwlist") {
      let checkAuthor = db.get(`${message.author.id}_giveActiveRole`);
      if (!devs.includes(message.author.id) && !checkAuthor) return;
      let count = 1;
      const msg = message.guild.members.cache
        .filter((member) => db.get(`${member.id}_giveActiveRole`) == true)
        .map((member) => `${count++}- ${member.user}`)
        .join("\n");
      const size = message.guild.members.cache.filter(
        (member) => db.get(`${member.id}_giveActiveRole`) == true
      ).size;
      if (size > 0) {
        const list2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(
            `https://cdn.discordapp.com/attachments/964993831441428480/964994317410250802/unknown.png`
          )
          .setTitle(`**Users: ${size}**`)
          .setDescription(`${msg}`)
          .setAuthor(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );
        const list = new Discord.MessageEmbed()
          .setColor("BLUE")
          .setDescription(
            `Active-Whitelist \n${msg} \nwhite list Size ${size}`
          );
        message.lineReplyNoMention(list2);
      } else {
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            "> :x: | there is no one in list"
          )
        );
      }
    }

    /**************************************************************************************/
    //ADD ADMINS ROLES
    if (command == "acrole") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ").slice(1).join(" ");
      if (!args)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | منشن الرول او اكتب الايدي.`
          )
        );
      let roleName,
        roleid = args;
      let role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((role) => role.name === roleName) ||
        message.guild.roles.cache.find((role) => role.id === roleid);

      let there = db.fetch(`activeRoles_${message.guild.id}_${role.id}`);
      if (there) {
        db.delete(`activeRoles_${message.guild.id}_${role.id}`);
        message.react(`☑`);
      } else {
        db.set(`activeRoles_${message.guild.id}_${role.id}`, role.id);
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | ${role} تم اضافة رول تفاعلي ممنوع `
          )
        );
      }
    }

    /**************************************************************************************/
    //SHOW ADMINS ROLES
    if (command == "acrlist") {
      let checkAuthor = db.get(`${message.author.id}_giveActiveRole`);
      if (!devs.includes(message.author.id) && !checkAuthor) return;
      let count = 1;
      let msg = db
        .all()
        .filter((data) =>
          data.ID.startsWith(`activeRoles_${message.guild.id}_`)
        );
      if (msg.length > 0) {
        var result = "";
        for (var i in msg) {
          let role = msg[i].ID.split("_")[2];

          result += `${count++}- <@&${role}> \n`;
        }
        const roleList2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(
            `https://cdn.discordapp.com/attachments/964993831441428480/964994317410250802/unknown.png`
          )
          .setDescription(`${result}`)
          .setAuthor(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );
        const roleList = new Discord.MessageEmbed()
          .setColor("ORANGE")
          .setDescription(`**Active-Roles List**\n ${result}`);
        message.lineReplyNoMention(roleList2);
      } else {
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            "> :x: | there is no one in list"
          )
        );
      }
    }
  });

  client83883.on("guildMemberUpdate", (oldMember, newMember) => {
    if (!oldMember.guild) return;
    var role_ID = [];
    let state = false;
    let msg = db
      .all()
      .filter((data) =>
        data.ID.startsWith(`adminRoles_${oldMember.guild.id}_`)
      );
    if (msg.length == 0) return;
    for (var i in msg) {
      let role = msg[i].ID.split("_")[2];
      role_ID.push(role);
    }
    let chnnel = db.fetch(`admin_${oldMember.guild.id}`);
    oldMember.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var usertag = logs.entries.first().executor.tag;
      if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        var there = db.get(`${userID}_giveAdminRole`);
        if (!there) {
          {
          }
          for (let i = 0; i < role_ID.length; i++) {
            if (
              (oldMember.roles.cache.get(role_ID[i]) &&
                !newMember.roles.cache.get(role_ID[i])) ||
              (!oldMember.roles.cache.get(role_ID[i]) &&
                !newMember.roles.cache.get(role_ID[i])) ||
              (oldMember.roles.cache.get(role_ID[i]) &&
                newMember.roles.cache.get(role_ID[i]))
            ) {
            } else {
              let getRole = oldMember.guild.roles.cache.get(role_ID[i]);
              newMember.roles.remove(getRole, `Not Allowed. | by ${usertag}`);
              client83883.channels.cache
                .get(chnnel)
                .send(
                  `>>> <@${userID}> tried to give ${newMember} role **${getRole.name}** ..`
                );
            }
          }
        }
      }
    });
  });

  client83883.on("guildMemberUpdate", (oldMember, newMember) => {
    if (!oldMember.guild) return;
    var role_ID = [];
    let state = false;
    let msg = db
      .all()
      .filter((data) =>
        data.ID.startsWith(`activeRoles_${oldMember.guild.id}_`)
      );
    if (msg.length == 0) return;
    for (var i in msg) {
      let role = msg[i].ID.split("_")[2];
      role_ID.push(role);
    }
    let chnnel = db.fetch(`admin_${oldMember.guild.id}`);

    oldMember.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var usertag = logs.entries.first().executor.tag;
      if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        var there = db.get(`${userID}_giveActiveRole`);
        if (!there) {
          {
          }
          for (let i = 0; i < role_ID.length; i++) {
            if (
              (oldMember.roles.cache.get(role_ID[i]) &&
                !newMember.roles.cache.get(role_ID[i])) ||
              (!oldMember.roles.cache.get(role_ID[i]) &&
                !newMember.roles.cache.get(role_ID[i])) ||
              (oldMember.roles.cache.get(role_ID[i]) &&
                newMember.roles.cache.get(role_ID[i]))
            ) {
            } else {
              let getRole = oldMember.guild.roles.cache.get(role_ID[i]);
              newMember.roles.remove(getRole, `Not Allowed. | by ${usertag}`);
              client83883.channels.cache
                .get(chnnel)
                .send(
                  `>>> <@${userID}> tried to give ${newMember} role **${getRole.name}** ..`
                );
            }
          }
        }
      }
    });
  });

  client83883.on("channelDelete", async (channel, user) => {
    const database = db.get(`cd_${channel.guild.id}`);
    if (!database || database === "off") return;
    const logs = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then((audit) => audit.entries.first());

    if (db.get(`${logs.executor.id}_cdtiallow`)) {
      return;
    }
    channel.guild.channels
      .create(channel.name, {
        type: channel.type,
        permissionOverwrites: channel.permissionOverwrites,
        parent: channel.parentID,
        userLimit: channel.userLimit,
        topic: channel.topic,
        position: channel.setPosition,
        nsfw: channel.nsfw == undefined ? false : channel.nsfw,
        reason: `Protection | by ${logs.executor.tag}`,
      })
      .catch((err) => 0);
    channel.guild.channels.cache.get(db.get(`logsch_${channel.guild.id}`)).send(
      new Discord.MessageEmbed()
        .setColor(`#ffffff`)
        .setThumbnail(channel.guild.iconURL({ dynamic: true }))
        .setFooter("Avar store.", "https://l.top4top.io/p_2595av3kz1.png")
        .setTitle(`**مسح روم**`)
        .setDescription(
          `الشخص: <@${logs.executor.id}> - \`${logs.executor.tag}\`\nالروم: \`${channel.name}\``
        )
        .setTimestamp()
    );
  });

  client83883.on("roleUpdate", async (oldRole, newRole) => {
    const database = db.get(`cd_${oldRole.guild.id}`);
    if (!database || database === "off") return;
    let perm_1 = oldRole.permissions.toArray();
    let perm_2 = newRole.permissions.toArray();
    if (JSON.stringify(perm_1) === JSON.stringify(perm_2)) return;
    let guild = newRole.guild;
    if (!guild) return;
    const entry1 = await guild
      .fetchAuditLogs({
        type: "ROLE_UPDATE",
        limit: 1,
      })
      .then((audit) => audit.entries.first())
      .catch(() => 0);
    if (!entry1) return;
    const entry = entry1.executor;
    const entry3 = entry1.executor.tag;
    if (!entry) return;
    let target = entry1.target;
    if (target.id != newRole.id) return;
    if (
      entry.id === client83883.user.id ||
      entry.id === guild.ownerId ||
      db.get(`${entry.id}_cdtiallow`)
    )
      return;
    newRole
      .edit(
        {
          permissions: perm_1,
        },
        `not allowed | by: ${entry3}`
      )
      .catch((err) => 0);
  });

  client83883.on("guildUpdate", async (oldGuild, newGuild) => {
    let database = db.get(`guild_123`);
    if (!database || database === "off") return;
    oldGuild.fetchAuditLogs({ type: "GUILD_UPDATE" }).then((audit) => {
      if (devs.includes(audit.entries.first().executor)) {
        return;
      }
      if (newGuild.name && newGuild.name !== oldGuild.name) {
        oldGuild.fetchAuditLogs({ type: "GUILD_UPDATE" }).then((audit) => {
          let user = audit.entries.first().executor;
          let userName = audit.entries.first().executor.tag;
          if (user.id == oldGuild.ownerID || user.bot) return;
          else newGuild.setName(oldGuild.name, `not allowed | by: ${userName}`);
        });
      } else if (newGuild.icon && newGuild.icon !== oldGuild.icon) {
        oldGuild.fetchAuditLogs({ type: "GUILD_UPDATE" }).then((audit) => {
          let user = audit.entries.first().executor;
          let userName = audit.entries.first().executor.tag;
          if (user.id == oldGuild.ownerID || user.bot) return;
          else
            newGuild.setIcon(
              oldGuild.iconURL({ dynamic: true }),
              `not allowed | by: ${userName}`
            );
        });
      }
    });
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(SerPrefix)) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    //ALLOW/REMOVE
    if (command == "bl") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على هذا الشخص`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let data = db.get(`${user.id}_giveBlackList`);
      if (data) {
        db.delete(`${user.id}_giveBlackList`);
        message.react(`☑`);
      } else {
        db.set(`${user.id}_giveBlackList`, true);
        message.react(`✅`);
      }
    }
    /**************************************************************************************/
    //ADMIN WHITELIST LIST
    if (command == "blist") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let count = 1;
      const msg = message.guild.members.cache
        .filter((member) => db.get(`${member.id}_giveBlackList`) == true)
        .map((member) => `${count++}- ${member.user}`)
        .join("\n");
      const size = message.guild.members.cache.filter(
        (member) => db.get(`${member.id}_giveBlackList`) == true
      ).size;
      if (size > 0) {
        const list2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle(`Active blacklist: ${size}`)
          .setDescription(`${msg}`)
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );
        const list = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `Who can blacklist \n${msg} \nwhite list Size ${size}`
          );
        message.lineReplyNoMention(list2);
      } else {
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            "> :x: | there is no one in list"
          )
        );
      }
    }

    /**************************************************************************************/
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || message.channel.type === "dm") return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    /**************************************************************************************/
    //BLACKLIST
    if (command == "black") {
      let { member, author, content, channel, guild } = message;
      let checkAuthor = db.get(`${message.author.id}_giveBlackList`);
      if (!checkAuthor) return;
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let user =
        guild.members.cache.get(args[0]) || message.mentions.members.first();
      if (!user)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على هذا الشخص`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (user == message.author.id) return message.react("🚫");
      let owner = await message.guild.members.fetch();

      if (
        user.roles.highest.position >= member.roles.highest.position &&
        author.id !== owner.id
      )
        return message.react("🚫");
      if (!user.bannable)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | i can't ban this user`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let there = db.fetch(`${user.id}_blacklist`);
      if (there)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            ">> :x: | this user is already blacklisted"
          )
        );
      db.set(`${user.id}_blacklist`, true);
      db.set(`blacklist_${user.id}`, `${user.tag}`);
      message.guild.members.ban(user);
      message.lineReplyNoMention(
        new Discord.MessageEmbed().setDescription(
          `> :white_check_mark: | <@${user.id}> added to blacklist`
        )
      );
    }
    /**************************************************************************************/
    //UNBLACKLIST COMMAND
    if (command == "unblack") {
      let checkAuthor = db.get(`${message.author.id}_giveBlackList`);
      if (!checkAuthor) return;
      if (!args[0])
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | لا يمكنني العثور على هذا الشخص`
          )
        );
      if (isNaN(args[0]) && args[0].length != 18)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(">> :x: | id only")
        );
      let user = await client83883.users.fetch(args[0]);
      if (user == message.author.id) return message.react("🚫");
      let there = db.fetch(`${user.id}_blacklist`);
      if (!there)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            ">> :x: | this user is not blacklisted"
          )
        );

      db.delete(`${user.id}_blacklist`);
      db.delete(`blacklist_${user.id}`);
      message.guild.members.unban(user);
      message.lineReplyNoMention(
        new Discord.MessageEmbed().setDescription(
          `> :white_check_mark: | <@${user.id}> removed from blacklist`
        )
      );
    }
    /**************************************************************************************/
    //SHOW BLACKLIST LIST
    if (command == "blacklist") {
      let checkAuthor = db.get(`${message.author.id}_giveBlackList`);
      if (!checkAuthor) return;
      let count = 1;
      let msg = db.all().filter((data) => data.ID.startsWith(`blacklist_`));
      if (msg.length > 0) {
        var result = "";
        for (var i in msg) {
          let users = msg[i].ID.split("_")[1];

          result += `${count++}- <@${users}> \n`;
        }

        const blackList2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle(`Blacklisted:`)
          .setDescription(`${result}`)
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );
        const blackList = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`**Blacklisted**\n ${result}`);
        message.lineReplyNoMention(blackList2);
      } else {
        message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            "> :x: | there is no one in list"
          )
        );
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(SerPrefix)) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    //ALLOW/REMOVE
    if (command == "cdti") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على هذا الشخص`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let data = db.get(`${user.id}_cdtiallow`);
      if (data) {
        db.delete(`${user.id}_cdtiallow`);
        message.react(`☑`);
      } else {
        db.set(`${user.id}_cdtiallow`, true);
        message.react(`✅`);
      }
    }
    if (command == "cdlist") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let count = 1;
      const msg = message.guild.members.cache
        .filter((member) => db.get(`${member.id}_cdtiallow`) == true)
        .map((member) => `${count++}- ${member.user}`)
        .join("\n");
      const size = message.guild.members.cache.filter(
        (member) => db.get(`${member.id}_cdtiallow`) == true
      ).size;
      if (size > 0) {
        const list2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle(`Cdlist: ${size}`)
          .setDescription(`${msg}`)
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
        const list = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `Who can delete chanels\n${msg} \nwhite list Size ${size}`
          );
        message
          .lineReplyNoMention(list2)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              "> :x: | there is no one in list"
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(SerPrefix)) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    //ALLOW/REMOVE
    if (command == "prti") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!args[0])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | لا يمكنني العثور على هذا الشخص`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let data = db.get(`${user.id}_prtiallow`);
      if (data) {
        db.delete(`${user.id}_prtiallow`);
        message.react(`☑`);
      } else {
        db.set(`${user.id}_prtiallow`, true);
        message.react(`✅`);
      }
    }
    if (command == "prlist") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let count = 1;
      const msg = message.guild.members.cache
        .filter((member) => db.get(`${member.id}_prtiallow`) == true)
        .map((member) => `${count++}- ${member.user}`)
        .join("\n");
      const size = message.guild.members.cache.filter(
        (member) => db.get(`${member.id}_prtiallow`) == true
      ).size;
      if (size > 0) {
        const list2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle(`Prlist: ${size}`)
          .setDescription(`${msg}`)
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );
        const list = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `Who can delete chanels\n${msg} \nwhite list Size ${size}`
          );
        message
          .lineReplyNoMention(list2)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              "> :x: | there is no one in list"
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `reset`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() ||
          message.guild.members.cache.get(args[1])
      );
      if (!user)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الشخص او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.delete(`${user.id}_chupdater`);
      db.delete(`${user.id}_chc`);
      db.delete(`${user.id}_rd`);
      db.delete(`${user.id}_r`);
      db.delete(`${user.id}_ru`);
      db.delete(`${user.id}_kicks`);
      db.delete(`${user.id}_chd`);
      db.delete(`${user.id}_bans`);

      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :white_check_mark: | تم تصفير <@${user.id}> من الحماية`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  //--------------------الخط----------------------\\

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "set-line")) {
      let args = message.content.split(" ");
      let link = args[1];
      if (!link || !link.startsWith("https://"))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | ارسل الرابط تبع الخط.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (
        !link.includes(".png") &&
        !link.includes(".jpeg") &&
        !link.includes(".jpg") &&
        !link.includes(".webp")
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الرابط الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set("line", link);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `setch`) {
      let args = message.content.split(" ");
      let channel =
        message.mentions.channels.first() ||
        message.guild.channels.cache.find((c) => c.id === args[1]);
      if (!channel)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الروم او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      db.set("ch", channel.id);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `rest`) {
      db.delete("line");
      db.delete("chs");
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `line` || command === "خط") {
      if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        return;
      let line = db.fetch("line");
      message.lineReplyNoMention({ files: [line] });
      message.delete();
    }
  });

  client83883.on("message", function (message) {
    const line = db.fetch("line");
    const ch = db.fetch("ch");
    let args = message.content.split(" ").slice("").join(" ");
    if (message.author.bot) return;
    const lch = message.channel.id === ch;
    if (!lch) return false;
    if (message.content.startsWith("")) {
      message.channel
        .send({ files: [line] })
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  //--------------------كانفاس----------------------\\
  client83883.on("ready", () => {
    setInterval(async () => {
      let data = await guild_db.find();
      data.forEach(async (d) => {
        let guild = client83883.guilds.cache.get(d.id);
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
        let colors_list = await createList(guild, d.order.pic);
        channel
          .send({ files: [{ name: "colors.png", attachment: colors_list }] })
          .catch(() => 0);
      });
    }, 600000);
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.toLowerCase().startsWith(SerPrefix + "order")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      const args = message.content.toLowerCase().split(" ").slice(1);
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(`**Please type on or off.**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (args[0] === "on") {
        let data = await guild_db.findOne({
          id: message.guild.id,
        });
        if (!data) {
          data = await guild_db.create({
            id: message.guild.id,
          });
          await data.save();
        }
        data.order.status = true;
        await data.save();
        message
          .lineReplyNoMention(`**✅ Done enabled order.**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (args[0] === "off") {
        let data = await guild_db.findOne({
          id: message.guild.id,
        });
        if (!data) {
          data = await guild_db.create({
            id: message.guild.id,
          });
          await data.save();
        }
        data.order.status = false;
        await data.save();
        message
          .lineReplyNoMention(`**✅ Done disabled order.**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        message.react("❓").catch((err) => {});
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "ocolors")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let args = message.content.split(" ");
      let data = await guild_db.findOne({
        id: message.guild.id,
      });
      let link = args[1];
      if (!link || !link.startsWith("https://"))
        return message
          .lineReplyNoMention(
            `> ** ارسل رابط الخلفية **
\`${SerPrefix}ocolors الرابط\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (
        !link.includes(".png") &&
        !link.includes(".jpeg") &&
        !link.includes(".jpg") &&
        !link.includes(".webp")
      )
        return message
          .lineReplyNoMention(
            `> ** ارسل رابط الخلفية **
\`${SerPrefix}ocolors الرابط\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      try {
        let gg = await canvas.loadImage(link);
      } catch (err) {
        return message
          .lineReplyNoMention(
            `> ** ارسل رابط الخلفية **
\`${SerPrefix}ocolors الرابط\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (!data) {
        data = await guild_db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.order.pic = link;
      await data.save();
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed()
            .setImage(link)
            .setDescription(`**> خلفية الالوان**`)
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const ochat =
      client83883.channels.cache.get(args[0]) ||
      message.mentions.channels.first();
    let data = await guild_db.findOne({
      id: message.guild.id,
    });
    if (command === `ochat`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!ochat)
        return message
          .lineReplyNoMention(
            `> ** منشن الروم او اكتب الايدي **
\`${SerPrefix}ochat @channel\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!ochat) return;
      if (!data) {
        data = await guild_db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.order.channel = ochat.id;
      await data.save();
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || !message.guild) return;
    let args = message.content.split(" ");
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let data = await db1.findOne({
      id: message.guild.id,
    });
    if (args[0] === SerPrefix + "wsize") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db1.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.wsize = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "hsize") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.hsize = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "xavatar") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.xavatar = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "yavatar") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.yavatar = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "sxavatar") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.sxavatar = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "syavatar") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.syavatar = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "xname") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.xname = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "yname") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 4056 ||
        Number(args[1]) < 10
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.yname = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "sname") {
      if (
        !args[1] ||
        isNaN(Number(args[1])) ||
        Number(args[1]) > 2000 ||
        Number(args[1]) < 1
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الحجم الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.sname = Number(args[1]);
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "ncolor") {
      if (!args[1])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة اللون الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let code = await verifyColor(args[1]);
      if (!code) return message.react(`🚫`);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.ncolor = code;
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "welmessage") {
      let msg = args.slice(1).join(" ");
      if (!msg) return message.react(`🚫`);
      if (msg.length > 4000) return message.react(`🚫`);
      if (!data) {
        data = await db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.message = msg;
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "welchat") {
      let channel =
        message.mentions.channels.first() ||
        message.guild.channels.cache.find((c) => c.id === args[1]);
      if (!channel)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | منشن الروم او اكتب الايدي.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!data) {
        data = await db1.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.welchat = channel.id;
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "welcome") {
      if (!data) {
        data = await db1.create({
          id: message.guild.id,
        });
        await data.save();
      }
      if (!args[1])
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | type welcome on or welcome off.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (args[1] === "on") {
        data.welcome = true;
        await data.save();
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :white_check_mark: | ** on ** تم تحديد حالة الولكم الى`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (args[1] === "off") {
        data.welcome = false;
        await data.save();
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :white_check_mark: | ** off ** تم تحديد حالة الولكم الى`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    } else if (args[0] === SerPrefix + "data") {
      if (!data) {
        data = await db.get({
          id: message.guild.id,
        });
      }
      message.lineReplyNoMention({ content: `${data}` });
    } else if (args[0] === SerPrefix + "welpic") {
      let link = args[1];
      if (!link || !link.startsWith("https://"))
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | ارسل الرابط تبع الولكم.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (
        !link.includes(".png") &&
        !link.includes(".jpeg") &&
        !link.includes(".jpg") &&
        !link.includes(".webp")
      )
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الرابط الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      try {
        let gg = await canvas.loadImage(link);
      } catch (err) {
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `> :x: | الرجاء كتابة الرابط الصحيح.`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (!data) {
        data = await db1.create({
          id: message.guild.id,
        });
        await data.save();
      }
      data.pic = link;
      await data.save();
      message.react(`✅`);
    } else if (args[0] === SerPrefix + "weltest") {
      let member = await message.guild.members.fetch(message.author.id);
      let background;
      try {
        background =
          data.pic != "null" ? await canvas.loadImage(data.pic) : null;
      } catch (err) {
        background = "null";
      }
      let avatar = await canvas.loadImage(
        member.user.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 1024,
        })
      );
      let can = canvas.createCanvas(120, 120);
      let ctt = can.getContext("2d");
      ctt.beginPath();
      ctt.arc(60, 60, 60, 0, Math.PI * 2, true);
      ctt.closePath();
      ctt.clip();
      ctt.drawImage(avatar, 0, 0, 120, 120);
      let buff_avatar = await can.toBuffer();
      let avatar_1 = await canvas.loadImage(buff_avatar);
      let Canvas = canvas.createCanvas(data.wsize, data.hsize);

      let ctx = Canvas.getContext("2d");
      if (background != "null") {
        try {
          ctx.drawImage(background, 0, 0, data.wsize, data.hsize);
        } catch (err) {}
      }
      ctx.drawImage(
        avatar_1,
        data.xavatar,
        data.yavatar,
        data.sxavatar,
        data.syavatar
      );
      ctx.textAlign = "center";
      ctx.fillStyle = `${data.ncolor}`;
      ctx.font = `${data.sname}px "Roboto"`;
      ctx.fillText(
        member.user.username?.length > 12
          ? member.user.username.substring(0, 12) + "..."
          : member.user.username,
        data.xname,
        data.yname
      );
      let image = await Canvas.toBuffer();
      if (data.message == "null") {
        message.channel
          .send({
            files: [
              {
                name: "welcome.png",
                attachment: image,
              },
            ],
          })
          .catch((err) => 0);
      } else {
        let msg = data.message
          .replace("[user]", `[user]`)
          .replace("[userName]", `[userName]`)
          .replace("[memberCount]", `[memberCount]`)
          .replace("[server]", `[server]`);
        await message.channel
          .send({
            files: [
              {
                name: "welcome.png",
                attachment: image,
              },
            ],
          })
          .catch((err) => 0);
        message.channel.send({ content: msg }).catch((err) => 0);
      }
    } else if (args[0] === SerPrefix + "datadelete") {
      if (!data)
        return message.lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `> :x: | i can't find data for this server.`
          )
        );
      await db1.findOneAndDelete({
        id: message.guild.id,
      });
      message.react(`✅`);
    }
  });

  //--------------------امر الستنق----------------------\\
  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.content.startsWith(SerPrefix + "settings")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);

      let data = await guild_db.findOne({
        id: message.guild.id,
      });
      let data1 = await db1.findOne({
        id: message.guild.id,
      });
      if (!data) {
        data = await guild_db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      if (!data1) {
        data1 = await db1.create({
          id: message.guild.id,
        });
        await data1.save();
      }
      let role1 = `<#${db.fetch(`rolelog_${message.guild.id}`)}>`;
      if (role1 === `<#null>`) role1 = "`غير محدد`";
      let clear = `<#${db.fetch(`clearlog_${message.guild.id}`)}>`;
      if (clear === `<#null>`) clear = "`غير محدد`";
      let mute = `<#${db.fetch(`mutelog_${message.guild.id}`)}>`;
      if (mute === `<#null>`) mute = "`غير محدد`";
      let jail = `<#${db.fetch(`prisonlog_${message.guild.id}`)}>`;
      if (jail === `<#null>`) jail = "`غير محدد`";
      let vmute = `<#${db.fetch(`vmutelog_${message.guild.id}`)}>`;
      if (vmute === `<#null>`) vmute = "`غير محدد`";
      let vkick = `<#${db.fetch(`vkicklog_${message.guild.id}`)}>`;
      if (vkick === `<#null>`) vkick = "`غير محدد`";
      let move = `<#${db.fetch(`movelog_${message.guild.id}`)}>`;
      if (move === `<#null>`) move = "`غير محدد`";
      let msgg = `<#${db.fetch(`logmsg_${message.guild.id}`)}>`;
      if (msgg === `<#null>`) msgg = "`غير محدد`";
      let antirole = db.fetch(`admin_${message.guild.id}`);
      if (antirole === `<#null>`) antirole = "`غير محدد`";
      ///////

      let msg = db
        .all()
        .filter((data) =>
          data.ID.startsWith(`adminRoles_${message.guild.id}_`)
        );
      if (msg.length > 0) {
        var result = "";
        for (var i in msg) {
          let role = msg[i].ID.split("_")[2];
          result += `<@&${role}> , `;
        }
        ///////

        let mute_role = `<@&${db.get(`guild_mute_${message.guild.id}`)}>`;
        if (mute_role === `<@&null>`) mute_role = "`غير محدد`";
        let prisonrole = `<@&${db.get(`guild_prison_${message.guild.id}`)}>`;
        if (prisonrole === `<@&null>`) prisonrole = "`غير محدد`";
        ///////

        let here = `<@&${db.get(`here_${message.guild.id}`)}>`;
        if (here === `<@&null>`) here = "`غير محدد`";
        let cam = `<@&${db.get(`cam_${message.guild.id}`)}>`;
        if (cam === `<@&null>`) cam = "`غير محدد`";
        let photo = `<@&${db.get(`pic_${message.guild.id}`)}>`;
        if (photo === `<@&null>`) photo = "`غير محدد`";
        let auto = `<@&${db.get(`autorole_${message.guild.id}`)}>`;
        if (auto === `<@&null>`) auto = "`غير محدد`";
        ///////

        let protection = db.get(`on_${message.guild.id}`) || "of";
        let antir = db.get(`ad_${message.guild.id}`) || "of";
        let antic = db.get(`cd_${message.guild.id}`) || "of";
        let bots = db.get(`bo_${message.guild.id}`) || "of";
        let order = `<#${data.order.channel}>`;
        if (order === `<#null>`) order = "`غير محدد`";
        let welcome = `<#${data1.welchat}>`;
        if (welcome === `<#null>`) welcome = "`غير محدد`";
        ///////

        let d = await schema.findOne({
          namet: "prison",
          server: message.guild.id,
        });
        let d1 = await schema.findOne({
          namet: "tmute",
          server: message.guild.id,
        });
        let d2 = await schema.findOne({
          namet: "vmute",
          server: message.guild.id,
        });
        let d3 = await schema.findOne({
          namet: "clear",
          server: message.guild.id,
        });
        let d4 = await schema.findOne({
          namet: "move",
          server: message.guild.id,
        });
        let prison_admin = d ? d.roles.map((r) => `<@&${r}>`).join(" , ") : "";
        let text_mute_admin = d1
          ? d1.roles.map((r) => `<@&${r}>`).join(" , ")
          : "";
        let voice_mute_admin = d2
          ? d2.roles.map((r) => `<@&${r}>`).join(" , ")
          : "";
        let clear_admin = d3 ? d3.roles.map((r) => `<@&${r}>`).join(" , ") : "";
        let move_admin = d4 ? d4.roles.map((r) => `<@&${r}>`).join(" , ") : "";
        ///////
        var embed = new Discord.MessageEmbed().setColor(`#d2d0d0`)
          .setDescription(`اللوقات:\nلوق السجن - ${jail}\nلوق الاسكات الكتابي - ${mute}\nلوق الميوت الصوتي - ${vmute}\nلوق السحب - ${move}\nلوق الرولات - ${role1}\nلوق تعديل الرسائل - ${msgg}\nلوق مسح الرسائل - ${msgg}\nلوق المسح بالامر - ${clear}

رولات الادمن:\nادمن سجن - ${prison_admin}\nادمن الاسكات الكتابي - ${text_mute_admin}\nادمن الميوت الصوتي - ${voice_mute_admin}\nادمن مسح الشات - ${clear_admin}\nادمن السحب - ${move_admin}\nالرولات الممنوعه - ${result}

الرولات العامة:\nرول الميوت - ${mute_role}\nرول السجن - ${prisonrole}\nرول الهير - ${here}\nرول اللايف - ${cam}\nرول الصور - ${photo}\nرول تلقائي - ${auto}

باقي الاعداداد:\nحالة الحماية - \`${protection}\`\nحماية من دخول البوتات - \`${bots}\`\nحماية مسح الشاتات والرولات - \`${antic}\`\nحماية الادمنستريشن - \`${antir}\`\nشات المسح التلقائي - ${order}\nشات الولكم - ${welcome}`);
        message
          .lineReplyNoMention(embed)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        let role1 = `<#${db.fetch(`rolelog_${message.guild.id}`)}>`;
        if (role1 === `<#null>`) role1 = "`غير محدد`";
        let clear = `<#${db.fetch(`clearlog_${message.guild.id}`)}>`;
        if (clear === `<#null>`) clear = "`غير محدد`";
        let mute = `<#${db.fetch(`mutelog_${message.guild.id}`)}>`;
        if (mute === `<#null>`) mute = "`غير محدد`";
        let jail = `<#${db.fetch(`prisonlog_${message.guild.id}`)}>`;
        if (jail === `<#null>`) jail = "`غير محدد`";
        let vmute = `<#${db.fetch(`vmutelog_${message.guild.id}`)}>`;
        if (vmute === `<#null>`) vmute = "`غير محدد`";
        let vkick = `<#${db.fetch(`vkicklog_${message.guild.id}`)}>`;
        if (vkick === `<#null>`) vkick = "`غير محدد`";
        let move = `<#${db.fetch(`movelog_${message.guild.id}`)}>`;
        if (move === `<#null>`) move = "`غير محدد`";
        let msgg = `<#${db.fetch(`logmsg_${message.guild.id}`)}>`;
        if (msgg === `<#null>`) msgg = "`غير محدد`";
        let antirole = db.fetch(`admin_${message.guild.id}`);
        if (antirole === `<#null>`) antirole = "`غير محدد`";

        ///////
        let mute_role = `<@&${db.get(`guild_mute_${message.guild.id}`)}>`;
        if (mute_role === `<@&null>`) mute_role = "`غير محدد`";
        let prisonrole = `<@&${db.get(`guild_prison_${message.guild.id}`)}>`;
        if (prisonrole === `<@&null>`) prisonrole = "`غير محدد`";
        ///////
        let here = `<@&${db.get(`here_${message.guild.id}`)}>`;
        if (here === `<@&null>`) here = "`غير محدد`";
        let cam = `<@&${db.get(`cam_${message.guild.id}`)}>`;
        if (cam === `<@&null>`) cam = "`غير محدد`";
        let photo = `<@&${db.get(`pic_${message.guild.id}`)}>`;
        if (photo === `<@&null>`) photo = "`غير محدد`";
        let auto = `<@&${db.get(`autorole_${message.guild.id}`)}>`;
        if (auto === `<@&null>`) auto = "`غير محدد`";
        ///
        let protection = db.get(`on_${message.guild.id}`) || "of";
        let antir = db.get(`ad_${message.guild.id}`) || "of";
        let antic = db.get(`cd_${message.guild.id}`) || "of";
        let bots = db.get(`bo_${message.guild.id}`) || "of";
        let order = `<#${data.order.channel}>`;
        if (order === `<#null>`) order = "`غير محدد`";
        let welcome = `<#${data1.welchat}>`;
        if (welcome === `<#null>`) welcome = "`غير محدد`";

        let d = await schema.findOne({
          namet: "prison",
          server: message.guild.id,
        });
        let d1 = await schema.findOne({
          namet: "tmute",
          server: message.guild.id,
        });
        let d2 = await schema.findOne({
          namet: "vmute",
          server: message.guild.id,
        });
        let d3 = await schema.findOne({
          namet: "clear",
          server: message.guild.id,
        });
        let d4 = await schema.findOne({
          namet: "move",
          server: message.guild.id,
        });
        let prison_admin = d ? d.roles.map((r) => `<@&${r}>`).join(" , ") : "";
        let text_mute_admin = d1
          ? d1.roles.map((r) => `<@&${r}>`).join(" , ")
          : "";
        let voice_mute_admin = d2
          ? d2.roles.map((r) => `<@&${r}>`).join(" , ")
          : "";
        let clear_admin = d3 ? d3.roles.map((r) => `<@&${r}>`).join(" , ") : "";
        let move_admin = d4 ? d4.roles.map((r) => `<@&${r}>`).join(" , ") : "";

        var embed = new Discord.MessageEmbed().setColor(`#d2d0d0`)
          .setDescription(`اللوقات:\nلوق السجن - ${jail}\nلوق الاسكات الكتابي - ${mute}\nلوق الميوت الصوتي - ${vmute}\nلوق السحب - ${move}\nلوق الرولات - ${role1}\nلوق تعديل الرسائل - ${msgg}\nلوق مسح الرسائل - ${msgg}\nلوق المسح بالامر - ${clear}

رولات الادمن:\nادمن سجن - ${prison_admin}\nادمن الاسكات الكتابي - ${text_mute_admin}\nادمن الميوت الصوتي - ${voice_mute_admin}\nادمن مسح الشات - ${clear_admin}\nادمن السحب - ${move_admin}\nالرولات الممنوعه -

الرولات العامة:\nرول الميوت - ${mute_role}\nرول السجن - ${prisonrole}\nرول الهير - ${here}\nرول اللايف - ${cam}\nرول الصور - ${photo}\nرول تلقائي - ${auto}

باقي الاعداداد:\nحالة الحماية - \`${protection}\`\nحماية من دخول البوتات - \`${bots}\`\nحماية مسح الشاتات والرولات - \`${antic}\`\nحماية الادمنستريشن - \`${antir}\`\nشات المسح التلقائي - ${order}\nشات الولكم - ${welcome}`);
        message
          .lineReplyNoMention(embed)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  //--------------------اوامر الادمن----------------------\\

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(SerPrefix)) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    //ALLOW/REMOVE
    if (command == "allow") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!args[0])
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}allow @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}allow @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.set(`${user.id}_allow`, true);
      message.react(`✅`);
    }
    if (command == "remove") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!args[0])
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}remove @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}remove @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      db.delete(`${user.id}_allow`);
      message.react(`✅`);
    }
    if (command == "allowlist") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let count = 1;
      const msg = message.guild.members.cache
        .filter((member) => db.get(`${member.id}_allow`) == true)
        .map((member) => `${count++}- ${member.user}`)
        .join("\n");
      const size = message.guild.members.cache.filter(
        (member) => db.get(`${member.id}_allow`) == true
      ).size;
      if (size > 0) {
        const list2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle(`Allowlist: ${size}`)
          .setDescription(`${msg}`)
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
        const list = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `Who can delete chanels\n${msg} \nwhite list Size ${size}`
          );
        message
          .lineReplyNoMention(list2)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              "> :x: | there is no one in list"
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `block` || command === `بلوك`) {
      const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
      let cmd = db.get(`blockcmd_${message.guild.id}`);
      if (cmd) return;
      if (!message.member.hasPermission(`ADMINISTRATOR`)) return;
      if (!message.guild.member(client83883.user).hasPermission("MANAGE_ROLES"))
        return message.lineReplyNoMention(
          `>>> :x: sorry i dont have permission to do this action`
        );
      let picrole = db.get(`pic_${message.guild.id}`);
      if (!picrole)
        return message
          .lineReplyNoMention(`**> حدد رول الصور اولا**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.guild.members.cache.find(
          (m) => m.user.username === args.slice(1).join(" ")
        );
      if (!member)
        return message
          .lineReplyNoMention(`**> منشن الشخص او اكتب ايدي**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let data = db.get(`${member.id}_blockuser`);
      if (data) {
        db.delete(`${member.id}_blockuser`);
        message.react(`☑`);
      } else {
        db.set(`${member.id}_blockuser`, true);
        message.react(`✅`);
      }
    } else if (command == "blocked") {
      if (!devs.includes(message.author.id)) return;
      let count = 1;
      const msg = message.guild.members.cache
        .filter((member) => db.get(`${member.id}_blockuser`) == true)
        .map((member) => `${count++}- ${member.user}`)
        .join("\n");
      const size = message.guild.members.cache.filter(
        (member) => db.get(`${member.id}_blockuser`) == true
      ).size;
      if (size > 0) {
        const list2 = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setTitle(`**Blocked: ${size}**`)
          .setDescription(`${msg}`)
          .setAuthor(
            message.guild.name,
            message.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          );

        const list = new Discord.MessageEmbed()
          .setColor("#ffffff")
          .setDescription(`Whitelist \n${msg} \nwhite list Size ${size}`);
        message
          .lineReplyNoMention(list2)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        if (devs.includes(message.author.id)) return;
        message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              "> :x: | there is no one in list"
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `role` || command === "رول") {
      if (!message.channel.guild || message.author.bot) return;
      let cmd = db.get(`rolecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "role" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() ||
          message.guild.members.cache.get(args[1])
      );
      var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
      var role1 = message.guild.roles.cache
        .filter((r) => r.name.toLowerCase().indexOf(role) > -1)
        .first();
      if (!message.guild.member(client83883.user).hasPermission("MANAGE_ROLES"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}role @mention @role\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!role)
        return message
          .lineReplyNoMention(
            `> ** منشن الرول او اكتب الاسم **
\`${SerPrefix}role @mention @role\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!role1)
        return message
          .lineReplyNoMention(
            `> ** منشن الرول او اكتب الاسم **
\`${SerPrefix}role @mention @role\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (
        message.member.roles.highest.comparePositionTo(role1) < 1 &&
        message.author.id != message.guild.ownerID
      )
        return message
          .lineReplyNoMention(
            "**> :man_facepalming: اييش ؟ ماتقدر تعطي رول اعلى من رولك**"
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      let ch = message.guild.channels.cache.get(
        db.fetch(`rolelog_${message.guild.id}`)
      );
      let embed3 = new Discord.MessageEmbed()
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .addFields(
          {
            name: `الرتب`,
            value: `**❌ ${role1.name}**`,
            inline: true,
          },
          {
            name: `المسؤول`,
            value: `<@${message.author.id}>`,
            inline: true,
          },
          {
            name: `في`,
            value: `${message.channel}`,
            inline: true,
          },
          {
            name: `الرسالة`,
            value: `[**[Click Here](${message.url})**]\n\`\`\` ${message.content} \`\`\``,
            inline: true,
          }
        )
        .setDescription(`**Give Role ${user.user}**`)
        .setTimestamp()
        .setFooter(
          `${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .setColor("#ffffff");
      if (user.roles.cache.find((c) => c.id === role1.id))
        return user.roles
          .remove(role1, `by: ${message.author.tag} - ازالة رول`)
          .then(() => {
            message
              .lineReplyNoMention(
                new Discord.MessageEmbed()
                  .setColor(`#d2d0d0`)
                  .setDescription(
                    `> ⛔ Removed role **${role1.name}**, from ${user.user}`
                  )
              )
              .then(async (msg) => {
                client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                  channel: message.channel.id,
                  repliedMsg: msg.id,
                });
              })
              .catch(() => 0);
            ch.send(embed3).catch((err) => 0);
          })
          .catch((err) => {});
      user.roles
        .add(role1, `by: ${message.author.tag} - اضافة رول`)
        .then(() => {
          message
            .lineReplyNoMention(
              new Discord.MessageEmbed()
                .setColor(`#d2d0d0`)
                .setDescription(
                  `> ✅ Added role **${role1.name}**, to ${user.user}`
                )
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        })
        .catch((err) => {});

      let embed2 = new Discord.MessageEmbed()
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .addFields(
          {
            name: `الرتب`,
            value: `**✅ ${role1.name}**`,
            inline: true,
          },
          {
            name: `المسؤول`,
            value: `<@${message.author.id}>`,
            inline: true,
          },
          {
            name: `في`,
            value: `${message.channel}`,
            inline: true,
          },
          {
            name: `الرسالة`,
            value: `[**[Click Here](${message.url})**]\n\`\`\` ${message.content} \`\`\``,
            inline: true,
          }
        )
        .setDescription(`**Give Role ${user.user}**`)
        .setTimestamp()
        .setFooter(
          `${message.author.username}`,
          message.author.avatarURL({ dynamic: true })
        )
        .setColor("#ffffff");
      ch.send(embed2).catch((err) => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `addrole`) {
      if (!message.channel.guild || message.author.bot) return;
      let cmd = db.get(`rolecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "role" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      let args = message.content.split(" ");
      var role = message.content.split(" ").slice(1).join(" ");
      if (!role)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :x: type the name of role you want`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      message.guild.roles.create({
        data: {
          name: `${role}`,
        },
      });
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `>>> :white_check_mark: done, created role <@&${role.id}>`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `setcolor`) {
      if (!message.channel.guild || message.author.bot) return;
      let cmd = db.get(`rolecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "role" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      let args = message.content.split(" ");
      var role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((r) => r.name === args) ||
        message.guild.roles.cache.find((r) => r.id === args);
      let hex = await verifyColor(args[1]);

      if (!hex)
        return message
          .lineReplyNoMention(
            `>>> :x: type ${SerPrefix}setcolor #ffffff <role name>`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (!role)
        return message
          .lineReplyNoMention(`>>> :x: please type the name of the role`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      role.edit({
        data: {
          color: `${hex}`,
        },
      });
      message
        .lineReplyNoMention(
          `>>> :white_check_mark: done, edit role <@&${role.id}> with color ${hex}`
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "role-all")) {
      let d = await schema.findOne({ namet: "role" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      var rrole = message.content.split(" ").slice(1).join(" ");
      var role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.find((r) => r.name === rrole) ||
        message.guild.roles.cache.find((r) => r.id === rrole);
      if (!role)
        return message
          .lineReplyNoMention(
            new Discord.MessageEmbed().setDescription(
              `>>> :x: | i can't find this role ${rrole}`
            )
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.guild.members.cache.forEach(async (m) => {
        await m.roles.add(role);
      });
      message
        .lineReplyNoMention(
          new Discord.MessageEmbed().setDescription(
            `>>> :white_check_mark: | ${role.name} has been added to all the members in this server`
          )
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `clear` || command === "مسح") {
      if (message.author.bot) return;
      if (message.channel.type == "dm") return;
      let cmd = db.get(`clearcmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "clar" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      if (
        !message.guild.member(client83883.user).hasPermission("MANAGE_MESSAGES")
      )
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let args = message.content.split(" ").slice(1);
      let msgscount = parseInt(args);
      if (args > 99)
        return message.channel
          .send(`**> اسف بس م اقدر امسح فوق 100 رساله**`)
          .then((messages) => messages.delete({ timeout: 5000 }))
          .then((messages) => messages.delete(5000));
      if (!msgscount) msgscount = `99`;
      message.channel.messages
        .fetch({ limit: msgscount })
        .then((messages) => message.channel.bulkDelete(msgscount))
        .then(message.delete())
        .then((msgs) => {
          message.channel
            .send(
              `\`\`\`Clear Message Channel: ${msgs.size}\nBy: ${message.author.tag}\`\`\``
            )
            .then((messages) => messages.delete({ timeout: 3000 }));

          let ch = message.guild.channels.cache.get(
            db.fetch(`clearlog_${message.guild.id}`)
          );
          if (!ch) return;
          let embed2 = new Discord.MessageEmbed()
            .setThumbnail(message.author.avatarURL({ dynamic: true }))
            .addFields(
              {
                name: `By`,
                value: `<@${message.author.id}>`,
                inline: true,
              },
              {
                name: `In`,
                value: `${message.channel}`,
                inline: true,
              },
              {
                name: `Messages`,
                value: `${msgs.size - 1}`,
                inline: true,
              },
              {
                name: `الرسالة`,
                value: `\`\`\` ${message.content} \`\`\``,
                inline: true,
              }
            )
            .setDescription(`**Channel Cleared**`)
            .setTimestamp()
            .setColor("#ffffff");
          ch.send(embed2);
        });
    }
  });

  ///اسكت
  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;

    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const mention =
      message.guild.members.cache.get(args[0]) ||
      message.mentions.members.first();

    if (command === `اسكت` || command === "mute") {
      let cmd = db.get(`tmutecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "tmute" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      if (!message.guild.member(client83883.user).hasPermission("MANAGE_ROLES"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!mention)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}mute @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (
        mention.roles.highest.position >= message.member.roles.highest.position
      ) {
        message
          .lineReplyNoMention(
            `**> :man_facepalming: اييش ؟ صاحي انت تراه اعلى منك**`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        let role = message.guild.roles.cache.find(
          (r) => r.id.toLowerCase() === db.get(`guild_mute_${message.guild.id}`)
        );
        if (!role) {
          try {
            var createdrole = await message.guild.roles.create({
              data: {
                name: "tmute",
                permissions: [],
              },
            });
            db.set(`guild_mute_${message.guild.id}`, createdrole.id);
            message.guild.channels.cache.forEach(async (channel, id) => {
              await channel.createOverwrite(createdrole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
              });
            });
          } catch (err) {
            console.log(err);
          }
        }
        mention.roles.add(role).catch((err) => 0);
        message.react(`✅`);
        let mutes = await message.guild.channels.cache.find(
          (ch) => ch.name === "tmute"
        );
        mutes
          .send(
            `اكتب السبب خلال 30 ثانية او ينفك الميوت
||--------${message.author}--------||`
          )
          .then((msg) => {
            var filter = (reponce) => reponce.author.id === message.author.id;
            mutes
              .awaitMessages(filter, { max: 1, time: 30000 })
              .then((collected) => {
                {
                  msg.delete().catch((err) => console.log(err));
                  collected
                    .first()
                    .delete()
                    .catch((err) => {});
                }
                mutes
                  .send(
                    `اكتب الوقت [بالدقائق فقط والحد الاقصى 60] خلال 30 ثانية او ينفك الميوت
||--------${message.author}--------||`
                  )
                  .then((msg2) => {
                    mutes
                      .awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                      })
                      .then((collected2) => {
                        {
                          msg2.delete().catch((err) => console.log(err));
                          collected2
                            .first()
                            .delete()
                            .catch((err) => {});
                          var reason_selected = collected.first().content;
                          var time_selected = collected2.first().content;
                          if (
                            isNaN(time_selected) ||
                            Number(time_selected) <= 0
                          )
                            return mutes
                              .send("رقم خاطئ وانفك الميوت")
                              .then((messages) =>
                                messages.delete({ timeout: 3000 })
                              )
                              .then(mention.roles.remove(role))
                              .catch((err) => 0);
                          time_selected = Number(time_selected) * 60000;
                          tempMute(mention, reason_selected, time_selected);
                          message.react(`✅`);
                          msg.delete().catch((err) => {});
                          msg2.delete().catch((err) => {});
                          let chnnel = db.fetch(`mutelog_${message.guild.id}`);
                          if (!chnnel) return;
                          client83883.channels.cache
                            .get(chnnel)
                            .send(
                              `ميوت شات للشخص ${mention}\nالادمن ${
                                message.author
                              }\nالسبب \`${reason_selected}\`\nالمدة \`${
                                collected2.first().content
                              } دقيقه\`\n في شات ${message.channel}`,
                              { files: ["./images/file.png"] }
                            )
                            .catch((err) => console.log(err));
                        }
                      });
                  })
                  .catch(() => {
                    msg.delete().catch((err) => {});
                    mention.roles.remove(role).catch((err) => 0);
                    mutes
                      .send("انتهى الوقت وانفك الميوت")
                      .then((messages) => messages.delete({ timeout: 3000 }));
                    msg2.delete().catch((err) => {});
                  });
              });
          });
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `unmute` || command === "تكلم") {
      let cmd = db.get(`tmutecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "tmute" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      if (!message.guild.member(client83883.user).hasPermission("MANAGE_ROLES"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
      var member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.guild.members.cache.find(
          (m) => m.user.username === args.slice(1).join(" ")
        );
      if (!member)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}unmute @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (member.id === message.guild.me.id)
        return message
          .lineReplyNoMention(`**>>> ترا طفشت ويمكن ابندك  **`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let mutedrole = message.guild.roles.cache.find(
        (r) => r.id.toLowerCase() === db.get(`guild_mute_${message.guild.id}`)
      );
      if (member.roles.cache.has(mutedrole))
        return message
          .lineReplyNoMention(`**> ما عليه ميوت**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!mutedrole) {
        try {
          var createdrole = await message.guild.roles.create({
            data: {
              name: "tmute",
              permissions: [],
            },
          });
          db.set(`guild_mute_${message.guild.id}`, createdrole.id);
          message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.createOverwrite(createdrole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
            });
          });
        } catch (err) {
          console.log(err);
        }
      }
      let user_data = await user_db.findOne({
        id: member.user.id,
        guildId: message.guild.id,
      });
      if (!user_data) {
        user_data = await user_db.create({
          id: member.user.id,
          guildId: message.guild.id,
        });
        await user_data.save();
      }
      user_data.mute.time = 0;
      await user_data.save();
      member.roles.remove(mutedrole);
      message.react(`✅`);
      let mutes = await message.guild.channels.cache.find(
        (ch) => ch.name === "tmute"
      );
      if (!mutes) return;
      mutes
        .send(
          `فك ميوت شات ${member}\nالادمن ${message.author}\nفي شات ${message.channel}`,
          { files: ["./images/file.png"] }
        )
        .catch((err) => console.log(err));
      db.delete(message.guild.id + member.id);
    }
  });

  ///سجن
  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;

    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const mention =
      message.guild.members.cache.get(args[0]) ||
      message.mentions.members.first();

    if (command === `prison` || command === "سجن") {
      let cmd = db.get(`prisoncmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "prison" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      if (!message.guild.member(client83883.user).hasPermission("MANAGE_ROLES"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!mention)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}prison @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (
        mention.roles.highest.position >= message.member.roles.highest.position
      ) {
        message
          .lineReplyNoMention(
            `**> :man_facepalming: اييش ؟ صاحي انت تراه اعلى منك**`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
        if (
          db.has(
            `prison_member_${mention.id}`,
            `prison_admin_${mention.id}`,
            `prison_reason_${mention.id}`
          )
        )
          return message
            .lineReplyNoMention("**> هذا الشخص عليه سجن من قبل**")
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
      } else {
        let role = message.guild.roles.cache.find(
          (r) =>
            r.id.toLowerCase() === db.get(`guild_prison_${message.guild.id}`)
        );
        if (!role) {
          try {
            var createdrole = await message.guild.roles.create({
              data: {
                name: "prison",
                permissions: [],
              },
            });
            db.set(`guild_prison_${message.guild.id}`, createdrole.id);
            message.guild.channels.cache.forEach(async (channel, id) => {
              await channel.createOverwrite(createdrole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
              });
            });
          } catch (err) {
            console.log(err);
          }
        }
        mention.roles.add(role).catch((err) => 0);
        message.react(`✅`);
        let chnnel = db.fetch(`prisonlog_${message.guild.id}`);
        let mutes = await message.guild.channels.cache.find(
          (ch) => ch.id === chnnel
        );
        mutes
          .send(
            `اكتب السبب خلال 30 ثانية او ينفك السجن
||--------${message.author}--------||`
          )
          .then((msg) => {
            var filter = (reponce) => reponce.author.id === message.author.id;
            mutes
              .awaitMessages(filter, { max: 1, time: 30000 })
              .then((collected) => {
                {
                  msg.delete().catch((err) => console.log(err));
                  collected
                    .first()
                    .delete()
                    .catch((err) => {});
                }
                var reason_selected = collected.first().content;
                db.set(`prison_${mention.id}`, mention.id);
                db.set(`prison_member_${mention.id}`, mention.id);
                db.set(`prison_admin_${mention.id}`, message.author.id);
                db.set(`prison_reason_${mention.id}`, reason_selected);
                message.react(`✅`);
                msg.delete().catch((err) => {});
                let chnnel = db.fetch(`prisonlog_${message.guild.id}`);
                if (!chnnel) return;
                client83883.channels.cache
                  .get(chnnel)
                  .send(
                    `سجن للشخص ${mention}\nالادمن ${message.author}\nالسبب \`${reason_selected}\`\n في شات ${message.channel}`,
                    { files: ["./images/file.png"] }
                  )
                  .catch((err) => console.log(err));
              });
          });
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (
      message.content.startsWith(SerPrefix + "سجني") ||
      message.content.startsWith(SerPrefix + "myprison")
    ) {
      const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
      var member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.author ||
        message.guild.members.cache.find(
          (m) => m.user.username === args.slice(1).join(" ")
        );

      if (
        !db.has(
          `prison_member_${member.id}`,
          `prison_admin_${member.id}`,
          `prison_reason_${member.id}`
        )
      )
        return message
          .lineReplyNoMention("**> هذا الشخص ما عليه سجن**")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      const user = db.get(`prison_member_${member.id}`);
      const admin = db.get(`prison_admin_${member.id}`);
      const word = db.get(`prison_reason_${member.id}`);

      message
        .lineReplyNoMention(
          `<@${user}>
أنت في زنزانة رقم **7**.
تم سجنك من قبل الادمن : <@${admin}> 
تم سجنك بسبب : "**${word}**"`
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `عفو` || command === `unprison`) {
      let cmd = db.get(`prisoncmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "prison" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      if (!message.guild.member(client83883.user).hasPermission("MANAGE_ROLES"))
        return message
          .lineReplyNoMention(
            `>>> :x: sorry i dont have permission to do this action`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
      var member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.guild.members.cache.find(
          (m) => m.user.username === args.slice(1).join(" ")
        );
      if (!member)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}unprison @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (
        !db.has(
          `prison_member_${member.id}`,
          `prison_admin_${member.id}`,
          `prison_reason_${member.id}`
        )
      )
        return message
          .lineReplyNoMention("**> هذا الشخص ما عليه سجن**")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (member.id === message.guild.me.id)
        return message
          .lineReplyNoMention(`**>>> لا تعلييق**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let mutedrole = message.guild.roles.cache.find(
        (ro) => ro.name === "prison"
      );
      if (!mutedrole) {
        try {
          var createdrole = await message.guild.roles.create({
            data: {
              name: "prison",
              permissions: [],
            },
          });
          message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.createOverwrite(createdrole, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
            });
          });
        } catch (err) {
          console.log(err);
        }
      }
      let chnnel = db.fetch(`prisonlog_${message.guild.id}`);
      let muterole1 = message.guild.roles.cache.find(
        (r) => r.name === "prison"
      );
      member.roles.remove(muterole1);
      message.react(`✅`);
      db.delete(`prison_member_${member.id}`);
      db.delete(`prison_admin_${member.id}`);
      db.delete(`prison_reason_${member.id}`);
      db.delete(`prison_${member.id}`);
      client83883.channels.cache
        .get(chnnel)
        .send(
          `فك سجن للشخص ${member}\nالادمن ${message.author}\n في شات ${message.channel}`,
          { files: ["./images/file.png"] }
        )
        .catch((err) => console.log(err));
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `ميوت` || command === `vmute`) {
      let cmd = db.get(`vmutecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "vmute" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      if (!message.guild.member(client83883.user).hasPermission("MUTE_MEMBERS"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let member =
        message.mentions.users.first() ||
        client83883.users.cache.get(message.content.split(" ")[1]);
      var user = message.guild.member(member);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}vmute @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!message.guild.member(user).voice.channel)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}vmute @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let chnnel = db.fetch(`vmutelog_${message.guild.id}`);
      console.log(array);
      let embed4 = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `**${user.user} have been voice unmuted.\nBy: <@!${message.author.id}>**\n\`in: ${message.channel.name}\``
        )
        .setColor(`BLUE`)
        .setAuthor(
          user.user.username,
          user.user.displayAvatarURL({ dynamic: true })
        )
        .setFooter(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      var time = message.content.split(" ")[2];
      if (!time) time = "30 minutes";
      setTimeout(() => {
        message.guild.member(user).voice.setMute(false);
        client83883.channels.cache.get(chnnel).send(embed4).catch;
        console.log("silent");
      }, ms(time));
      message.guild.member(user).voice.setMute(true);

      let embed2 = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `**${user.user} have been voice muted.\nBy: <@!${message.author.id}>**\n\`in: ${message.channel.name}\``
        )
        .setColor(`RED`)
        .setAuthor(
          user.user.username,
          user.user.displayAvatarURL({ dynamic: true })
        )
        .setFooter(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      client83883.channels.cache.get(chnnel).send(embed2);
      console.log("silent");
      return message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `فك` || command === `unvmute`) {
      let cmd = db.get(`vmutecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "vmute" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      if (!message.guild.member(client83883.user).hasPermission("MUTE_MEMBERS"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let member =
        message.mentions.users.first() ||
        client83883.users.cache.get(message.content.split(" ")[1]);
      var user = message.guild.member(member);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}unvmute @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var time = message.content.split(" ")[2];
      if (!time) time = "24h";
      if (!message.guild.member(user).voice.channel)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}unvmute @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.guild.member(user).voice.setMute(false);
      let chnnel = db.fetch(`vmutelog_${message.guild.id}`);
      let embed4 = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `**${user.user} have been voice unmuted.\nBy: <@!${message.author.id}>**\n\`in: ${message.channel.name}\``
        )
        .setColor(`BLUE`)
        .setAuthor(
          user.user.username,
          user.user.displayAvatarURL({ dynamic: true })
        )
        .setFooter(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      client83883.channels.cache.get(chnnel).send(embed4).catch;
      console.log("silent");
      return message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `برا` || command === `vkick`) {
      let cmd = db.get(`vkickcmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "vmute" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() ||
          message.guild.members.cache.get(args[1])
      );
      if (!message.channel.guild || message.author.bot) return;
      if (!message.guild.member(client83883.user).hasPermission("MOVE_MEMBERS"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}vkick @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!message.guild.member(user).voice.channel)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}vkick @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let chnnel = db.fetch(`movelog_${message.guild.id}`);
      let embed2 = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `**${user.user} have been disconnect.\nBy: <@!${message.author.id}>**\n\`in: ${message.channel.name}\``
        )
        .setColor(`RED`)
        .setAuthor(
          user.user.username,
          user.user.displayAvatarURL({ dynamic: true })
        )
        .setFooter(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      client83883.channels.cache.get(chnnel).send(embed2).catch;
      console.log("silent");
      await user.voice.kick();
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `اسحب` || command === `move`) {
      let cmd = db.get(`movecmd_${message.guild.id}`);
      if (cmd) return;
      let d = await schema.findOne({ namet: "move" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() ||
          message.guild.members.cache.get(args[1])
      );
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}move @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!message.channel.guild || message.author.bot) return;
      if (!message.guild.member(client83883.user).hasPermission("MOVE_MEMBERS"))
        return message
          .lineReplyNoMention(`**> ليس لدي برمشن للقيام بهذا الإجراء**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!message.member.voice.channel)
        return message
          .lineReplyNoMention(`**> انت خارج الرومات الصوتية**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (!message.guild.member(user).voice.channel)
        return message
          .lineReplyNoMention(
            `**> \`${user.user.username}\` خارج الرومات الصوتية**`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let channel = message.member.voice.channel.id;
      let channeln = message.member.voice.channel.name;
      let channel2 = user.voice.channel.id;
      if (channel === channel2)
        return message
          .lineReplyNoMention(`**> \`${user.user.username}\` موجود في رومك**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      await user.voice.setChannel(
        channel,
        `by: ${message.author.tag} - سحب صوتي`
      );

      let chnnel = db.fetch(`movelog_${message.guild.id}`);
      let embed2 = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `**${user.user} have been moved.\nby: <@!${message.author.id}>**\n\`in: ${message.channel.name}\`\n**from: <#${channel2}>\nto: <#${channel}>**`
        )
        .setColor(`BLUE`)
        .setAuthor(
          user.user.username,
          user.user.displayAvatarURL({ dynamic: true })
        )
        .setFooter(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      client83883.channels.cache
        .get(chnnel)
        .send(embed2)
        .catch((err) => console.log(err));
      message
        .lineReplyNoMention(
          `**> ✅ ${channeln} إلى ${user.user.username} تم سحب **`
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `ودني` || command === `moveme`) {
      let cmd = db.get(`movecmd_${message.guild.id}`);
      if (cmd) return;
      let args = message.content.split(" ");
      let d = await schema.findOne({ namet: "move" });
      if (
        !devs.includes(message.author.id) &&
        !d.roles.some((r) => message.member.roles.cache.has(r))
      )
        return;

      var user = message.guild.member(
        message.mentions.users.first() ||
          message.guild.members.cache.get(args[1])
      );

      if (!user)
        return message
          .lineReplyNoMention(`**> وين تبي تروح طيب**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let voiceMember = message.member.voice.channel;
      let voiceUser = user.voice.channel;
      if (!voiceMember)
        return message
          .lineReplyNoMention(`**> انت خارج الرومات الصوتية**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!voiceUser)
        return message
          .lineReplyNoMention(
            `**> \`${user.user.username}\` خارج الرومات الصوتية**`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      message.member.voice.setChannel(
        voiceUser,
        `by: ${message.author.tag} - سحب صوتي`
      );
      message.react(`✅`);
      let ch = message.guild.channels.cache.get(
        db.fetch(`movelog_${message.guild.id}`)
      );
      if (!ch) return;
      let embed2 = new Discord.MessageEmbed()
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `**${user.user} have been move.\nBy: <@!${message.author.id}>**\n\`in: ${message.channel.name}\`\n**from: ${message.member.voice.channel}\nto: ${voiceUser}**`
        )
        .setColor(`BLUE`)
        .setAuthor(
          user.user.username,
          user.user.displayAvatarURL({ dynamic: true })
        )
        .setFooter(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      ch.send(embed2).catch((err) => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content.startsWith(SerPrefix + "addemoji")) {
      const args = message.content.split(" ").slice(1);
      if (!message.member.hasPermission("MANAGE_EMOJIS")) {
        return;
      }

      if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) {
        return message
          .lineReplyNoMention(">>> :x: please Check my permission")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }

      const emoji = args.join("");
      if (!emoji)
        return message
          .lineReplyNoMention(">>> :x: please type the emoji to add")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      let the_typed_emoji = Discord.Util.parseEmoji(emoji);

      if (the_typed_emoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${the_typed_emoji.id}.${
          the_typed_emoji.animated ? "gif" : "png"
        }`;
        const name = args.slice(1).join(" ");

        message.guild.emojis.create(
          `${link}`,
          `${name || `${the_typed_emoji.name}`}`
        );

        return message
          .lineReplyNoMention(
            "> **[ Emoji Manager ]**\n> **Emoji added**(<:" +
              the_typed_emoji.name +
              ":" +
              the_typed_emoji.id +
              "> (" +
              the_typed_emoji.name +
              ")),"
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        let CheckEmoji = parse(emoji, { assetType: "png" });
        if (!CheckEmoji[0])
          return message
            .lineReplyNoMention(">>> :x: invalied emoji")
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        message
          .lineReplyNoMention(">>> :x: invalied emoji")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot || !message.guild) return;
    var args = message.content.trim().split(/ +/);
    if (
      [
        `${SerPrefix}eventon`,
        `${SerPrefix}eventoff`,
        "edit4332323234",
      ].includes(args[0])
    ) {
      let cmd = db.get(`eventcmd_${message.guild.id}`);
      if (cmd) return;
      if (!message.member.permissions.has("MANAGE_ROLES")) return;
      message.delete();
      var id1 = "1067948080441335809"; // ايدي اول رتبة
      var id2 = "1067948080441335809"; // ايدي ثاني رتبة
      if (args[0] === "edit4332323234") {
        var role = message.mentions.roles.array(),
          method = false;
        if (["on", "off"].includes(args[1] ? args[1].toLowerCase() : "on")) {
          if (args[1] == "on") method = true;
          if (!role.length)
            return message
              .lineReplyNoMention("> You must mentions role(s)!")
              .then(async (msg) => {
                client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                  channel: message.channel.id,
                  repliedMsg: msg.id,
                });
              })
              .catch(() => 0);
          await role.forEach(async (r) => {
            await message.channel.updateOverwrite(
              r,
              {
                ATTACH_FILES: method,
              },
              `By: ${message.author.tag}`
            );
          });
          message.lineReplyNoMention(
            `> Done, ${
              method ? "added role(s) to" : "removed role(s) from"
            }  channel. (${role.map((r) => r.name).join(", ")})`
          );
        }
      } else if (
        [`${SerPrefix}eventoff`, `${SerPrefix}eventon`].includes(args[0])
      ) {
        var res = args[0] == `${SerPrefix}eventoff` ? false : true;
        var Msg = `نعتذر من الجميع ، تم تعطيل الهير والافري ون والصور عن الجميع خلال فعالية الشات وسيتم إعادتها بعد الانتهاء.\n@here`;
        if (res)
          Msg = `تم إتاحة الهير والإفري ون والصور لجميع الأعضاء ، نشكر تفهمّكم .\n@here`;
        await message.channel.updateOverwrite(
          id1,
          {
            ATTACH_FILES: res,
            EMBED_LINKS: res,
          },
          `By: ${message.author.tag}`
        );
        await message.channel.updateOverwrite(
          id2,
          {
            MENTION_EVERYONE: res,
          },
          `By: ${message.author.tag}`
        );
        message.lineReplyNoMention(`> ${Msg}`);
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.content === SerPrefix + "allbots") {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      let u = message.guild.members.cache
        .filter((k) => k.user.bot)
        .map((h) => `> <@${h.id}> (${h.id})`)
        .join(`\n`);
      message.lineReplyNoMention(u, { split: true }).catch((j) => {
        message.channel
          .send(`>>> :x: try agin`)
          .then((messages) => messages.delete({ timeout: 10000 }));
      });
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot) return;
    if (!message.guild) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `tonew`) {
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return;
      const user =
        message.guild.members.cache.get(args[0]) ||
        message.mentions.members.first();
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}tonew @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var embed = new Discord.MessageEmbed()
        .setDescription(`Suspicious Accuont Has Go To Jail <@!${user.id}>`)

        .setTimestamp();
      var new_role = message.guild.roles.cache.find(
        (role) => role.name === "new."
      );

      user.roles.add(new_role);
      message
        .lineReplyNoMention(
          `> :white_check_mark: <@!${user.id}> has add to new.`
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
      let chnnel = db.fetch(`new_log_${message.guild.id}`);
      if (!chnnel) return;
      client83883.channels.cache.get(chnnel).send(embed);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (message.author.bot) return;
    if (!message.guild) return;
    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (command === `removenew`) {
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return;
      const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
      var member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.guild.members.cache.find(
          (m) => m.user.username === args.slice(1).join(" ")
        );
      if (!member)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}removenew @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      var new_role = message.guild.roles.cache.find(
        (role) => role.name === "new"
      );
      member.roles.remove(new_role);
      message
        .lineReplyNoMention(
          `> :white_check_mark: <@!${member.id}> has remove from new.`
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (
      message.content.startsWith(SerPrefix + "photo") ||
      message.content.startsWith(SerPrefix + "صور")
    ) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      let args = message.content.split(" ").slice(1).join(" ");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!db.get(`pic_${message.guild.id}`))
        return message
          .lineReplyNoMention("**> حدد رول الصور اولا**")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}photo @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var pic_role = message.guild.roles.cache.find(
        (role) => role.id === db.get(`pic_${message.guild.id}`)
      );
      user.roles.add(pic_role);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (
      message.content.startsWith(SerPrefix + "here") ||
      message.content.startsWith(SerPrefix + "هير")
    ) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      let args = message.content.split(" ").slice(1).join(" ");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!db.get(`here_${message.guild.id}`))
        return message
          .lineReplyNoMention("**> حدد رول الهير اولا**")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}here @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var here_role = message.guild.roles.cache.find(
        (role) => role.id === db.get(`here_${message.guild.id}`)
      );
      user.roles.add(here_role);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (
      message.content.startsWith(SerPrefix + "cam") ||
      message.content.startsWith(SerPrefix + "لايف")
    ) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      let args = message.content.split(" ").slice(1).join(" ");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(message.content.split(" ")[1]);
      if (!db.get(`cam_${message.guild.id}`))
        return message
          .lineReplyNoMention("**> حدد رول الايف اولا**")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      if (!user)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}cam @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      var cam_role = message.guild.roles.cache.find(
        (role) => role.id === db.get(`cam_${message.guild.id}`)
      );
      user.roles.add(cam_role);
      message.react(`✅`);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    let d = await schema.findOne({ namet: "tmute" });
    let status = await db.get("status");
    let words = await db.get("words");
    if (!words || typeof words !== typeof []) await db.set("words", [`كسمك`]);
    for (let w = 0; w < words.length; w++) {
      if (!status) break;
      if (message.content.includes(words[w])) {
        if (message.author.bot) return;
        let chnnel = db.fetch(`mutelog_${message.guild.id}`);
        message.delete();
        message.channel.send(`${message.author} لقم ميوت.`);
        let role = message.guild.roles.cache.find(
          (role) => role.name === "tmute"
        );
        if (!role) return;
        var time_selected = `30`;
        time_selected = Number(time_selected) * 60000;
        tempMute(message.author, message.content, time_selected);
        if (!chnnel) return;
        client83883.channels.cache
          .get(chnnel)
          .send(
            `ميوت شات للشخص ${message.author}\nالسبب ||${message.content}||\nالمدة \`30 دقيقه\`\n في شات ${message.channel}`,
            { files: ["./images/file.png"] }
          )
          .catch((err) => console.log(err));
      }
    }

    if (message.content.toLowerCase().startsWith(SerPrefix + "badword")) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      const args = message.content.toLowerCase().split(" ").slice(1);
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!args[0])
        return message
          .lineReplyNoMention(
            `>>> Please specific what are you want to do.\nadd, remove, list, on or off`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      let word = args.slice(1).join(" ").substring(0, 100);
      if (args[0] === "add") {
        if (!word)
          return message.lineReplyNoMention(`>>> ❌ please provide a word`);
        if (words.includes(word))
          return message
            .lineReplyNoMention(`>>> ❌ this word already added before`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        words.push(word);
        await db.set("words", words);
        message
          .lineReplyNoMention(
            `>>> :white_check_mark: done, now anyone will type this word will git punsh mute: **${word}**`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (args[0] === "remove") {
        if (!word)
          return message
            .lineReplyNoMention(`>>> ❌ please provide a word`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        let index = words.findIndex((d) => d == word);
        if (index == -1)
          return message
            .lineReplyNoMention(`>>> ❌ this word not in badwords`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        words = words.filter((w) => w !== word);
        await db.set("words", words);
        message
          .lineReplyNoMention(
            `>>> :white_check_mark: done, word remove now anyone allowd to send this word: **${word}**`
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (args[0] === "removeall") {
        words = words.filter((w) => w !== word);
        await db.delete("words");
        message
          .lineReplyNoMention(`>>> :white_check_mark: done, all words remove`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (args[0] === "list") {
        if (words.length < 1)
          return message
            .lineReplyNoMention(
              `>>> Badwords list empty now\nAdd words and try again.`
            )
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        let embeds = [];
        let map = words.map((m) => `- ${m}`);
        let l = 20;
        for (i = 0; i < map.length; i += 20) {
          let array = map.slice(i, l);
          l += 20;
          let embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(array.join("\n"));
          embeds.push(embed);
        }
        let page = 0;
        embeds[page].setFooter(`${page + 1}/${embeds.length}`);

        if (embeds.length == 1) return message.lineReplyNoMention(embeds[0]);
        let btn_1 = new disbut.MessageButton()
          .setID("left")
          .setStyle("SECONDARY")
          .setEmoji("⬅️");
        let btn_2 = new disbut.MessageButton()
          .setID("right")
          .setStyle("SECONDARY")
          .setEmoji("➡️");
        let row = new disbut.MessageActionRow() // ↑ يجمع الخمس ازرار الي فوق ↑
          .addComponent(btn_1)
          .addComponent(btn_2);
        message.channel
          .send({ content: embeds[0], components: [row] })
          .then(async (msg) => {
            client83883.on("collect", async (button) => {
              if (button.id === "right") {
                if (page + 1 >= embeds.length) {
                  page = 0;
                } else {
                  page += 1;
                }
                embeds[page].setFooter(`${page + 1}/${embeds.length}`);
                msg
                  .edit({ content: embeds[page], components: [row] })
                  .catch((err) => 0);
              } else if (button.id === "left") {
                if (page <= 0) {
                  page = embeds.length - 1;
                } else {
                  page -= 1;
                }
                embeds[page].setFooter(`${page + 1}/${embeds.length}`);
                msg
                  .edit({ content: embeds[page], components: [row] })
                  .catch((err) => 0);
              }
            });
          });
      } else if (args[0] === "on") {
        if (status)
          return message
            .lineReplyNoMention(`>>> ❌ badwords system already enabled`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        await db.set("status", true);
        message
          .lineReplyNoMention(`>>> ✅ done, enable badwords system`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else if (args[0] === "off") {
        if (!status)
          return message
            .lineReplyNoMention(`>>> ❌ badwords system already disabled`)
            .then(async (msg) => {
              client83883.tempMsgs.set(`tempMsg_${message.id}`, {
                channel: message.channel.id,
                repliedMsg: msg.id,
              });
            })
            .catch(() => 0);
        await db.set("status", false);
        message
          .lineReplyNoMention(`>>> ✅ done, disable badwords system`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      } else {
        message.react("❓").catch((err) => {});
      }
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;

    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const member =
      message.guild.members.cache.get(args[0]) ||
      message.mentions.members.first();

    if (command == "ban") {
      let cmd = db.get(`bancmd_${message.guild.id}`);
      if (cmd) return;
      if (message.author.bot) return;
      if (!message.channel.guild) return;

      if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
        return;
      if (!message.guild.member(client83883.user).hasPermission("BAN_MEMBERS"))
        return message
          .lineReplyNoMention(">>> :x: i don't have permission")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (!member)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}ban @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (
        member.roles.highest.position >= message.member.roles.highest.position
      ) {
        return message.channel
          .send(`**> يمجنوون تبي تبند واحد اعلا منك**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      }
      if (member.id === message.guild.me.id)
        return message
          .lineReplyNoMention(`**>>> اييش ؟ تبي اوديك انت عنبر 7**`)
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (!message.guild.member(member).bannable)
        return message
          .lineReplyNoMention("**> مدري وش اقولك بس مقدر اسف")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      let reason = args.slice(1).join(" ");

      if (!reason) reason = "null";
      member.ban({
        days: 7,
        reason: `by: ${message.author.tag} - reason: ${reason}`,
      });
      message
        .lineReplyNoMention(
          `**غررررق الد^^^  \`${member.user.tag}\` :ocean: **`
        )
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
      let chnnel = db.fetch(`banlog_${message.guild.id}`);
      let embed2 = new Discord.MessageEmbed()
        .setTitle(`**Ban**`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `To: ${member.user} (\`\`${member.id}\`\`)\nBy: <@${message.author.id}>\nIn: ${message.channel}\nMessage: [**[Click Here](${message.url})**]\nReason: \`\`${reason}\`\`\nTime: \`\`No LIMIT\`\`\nunBan at: \`\`Forever\`\``
        )
        .setTimestamp()
        .setColor("blue")
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      client83883.channels.cache.get(chnnel).send(embed2);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;

    const args = message.content.slice(SerPrefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (command == "unban") {
      let cmd = db.get(`bancmd_${message.guild.id}`);
      if (cmd) return;
      if (message.author.bot) return;
      if (!message.channel.guild) return;
      if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
        return;
      if (!message.guild.member(client83883.user).hasPermission("BAN_MEMBERS"))
        return message
          .lineReplyNoMention(">>> :x: i don't have permission")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);
      let args = message.content.split(" ");
      let unbanned =
        message.mentions.users.first() || client83883.users.resolve(args[0]);
      let member = await client83883.users.fetch(unbanned);
      let ban = await message.guild.fetchBans();

      if (!unbanned)
        return message
          .lineReplyNoMention(
            `> ** منشن الشخص او اكتب الايدي **
\`${SerPrefix}unban @mention\``
          )
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (!ban.get(member.id))
        return message
          .lineReplyNoMention("**> هذا الشخص ما عليه باند")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      if (!message.guild.me.permissions.has("BAN_MEMBERS"))
        return message
          .lineReplyNoMention("**> مدري وش اقولك بس مقدر اسف")
          .then(async (msg) => {
            client83883.tempMsgs.set(`tempMsg_${message.id}`, {
              channel: message.channel.id,
              repliedMsg: msg.id,
            });
          })
          .catch(() => 0);

      var user = ban.get(member.id);
      message.guild.members.unban(member);
      message
        .lineReplyNoMention(`**تم فك الباند عن  \`${member.user.tag}\`**`)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
      let chnnel = db.fetch(`banlog_${message.guild.id}`);
      let embed2 = new Discord.MessageEmbed()
        .setTitle(`**Unban**`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `To: ${member.user} (\`\`${member.id}\`\`)\nBy: <@${message.author.id}>\nIn: ${message.channel}\nMessage: [**[Click Here](${message.url})**]`
        )
        .setTimestamp()
        .setColor("blue")
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        );
      client83883.channels.cache.get(chnnel).send(embed2);
    }
  });

  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "colors") {
      let cmd = db.get(`colorcmd_${message.guild.id}`);
      if (cmd) return;
      let data = await guild_db.findOne({
        id: message.guild.id,
      });
      if (!data) {
        data = await guild_db.create({
          id: message.guild.id,
        });
        await data.save();
      }
      let guild = client83883.guilds.cache.get(data.id);
      let colors_list = await createList(guild, data.order.pic);
      message
        .lineReplyNoMention({
          files: [{ name: "colors.png", attachment: colors_list }],
        })
        .catch(() => 0);
    }
  });

  const MenusManager = new DiscordMenus(client83883);
  client83883.on(`message`, async (message) => {
    let SerPrefix = db.get(`prefix_${message.guild.id}`);
    if (SerPrefix === null) SerPrefix = default_prefix;
    if (!message.content.startsWith(SerPrefix) || message.author.bot) return;
    const args = message.content.slice(SerPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === `help`) {
      if (!devs.includes(message.author.id) && !checkOwner(message.author.id))
        return message.react(`❌`);
      if (!message.guild.member(client83883.user).hasPermission("MANAGE_ROLES"))
        return message.lineReplyNoMention(
          `>>> :x: sorry i dont have permission to do this action`
        );

      let owners = new MessageMenuOption()
        .setLabel("Owner Commands")
        .setValue("owners");

      let adminst = new MessageMenuOption()
        .setLabel("Administrator Commands")
        .setValue("adminst");

      let admin = new MessageMenuOption()
        .setLabel("Admin Commands")
        .setValue("admins");

      let protect = new MessageMenuOption()
        .setLabel("Protection Commands ")
        .setValue("protect");

      let welcome = new MessageMenuOption()
        .setLabel("Welcome Commands")
        .setValue("welcome");

      let select = new MessageMenu()
        .setID("menu")
        .setPlaceholder(`اضغط للاختيار`)
        .setMinValues(1)
        .addOption(owners)
        .addOption(adminst)
        .addOption(admin)
        .addOption(protect)
        .addOption(welcome);

      let embed = new Discord.MessageEmbed()
        .setTitle("قائمة بجميع اوامر البوت")
        .setDescription(
          `اختار القائمة المناسبة\n[اضغط للانتقال أفار ستور](https://discord.gg/avar)`
        )
        .setColor("#d2d0d0")
        .setFooter(
          message.guild.name,
          message.guild.iconURL({ dynamic: true })
        );
      message.channel
        .send(embed, select)
        .then(async (msg) => {
          client83883.tempMsgs.set(`tempMsg_${message.id}`, {
            channel: message.channel.id,
            repliedMsg: msg.id,
          });
        })
        .catch(() => 0);
      MenusManager.on("MENU_CLICKED", async (menu) => {
        if (menu.values[0] == "owners") {
          let embed = new Discord.MessageEmbed()
            .setTitle(`اوامر الاونر`)
            .setDescription(
              `>>> \`${def}setup\` , **اعداد اللوقات ورول الميوت والسجن تلقائيا**
\`${def}admins\` , **تحديد الرولات الخاصة بالادمن**
\`${def}settings\` , **عرض إلعدادات**
\`${def}cmd\` , **تفعيل او تعطيل امر**
\`${def}logs\` , **تحديد اللوقات**
\`${def}roles\` , **تحديد الرولات**
\`${def}setavatar\` , **تغير افتار البوت عن طريق الرابط**
\`${def}setname\` , **تغير اسم البوت**
\`${def}setstatus\` , **تغير حالة البوت**
\`${def}setprefix\` , **تغير امر البوت**
[اضغط للانتقال أفار ستور](https://discord.gg/avar)`
            )
            .setColor(`#ffffff`);
          menu.reply(embed, { ephemeral: true });
        }
      });
      MenusManager.on("MENU_CLICKED", async (menu) => {
        if (menu.values[0] == "adminst") {
          let embed = new Discord.MessageEmbed()
            .setTitle(`اوامر الادمنستريتور`)
            .setDescription(
              `> \`${def}badword\` , **اضافة كلمات يعاقب كاتبها**
> \`${def}block\` , **حظر او سماح اعطاء رول الصور**
> \`${def}blocked\` , **عرض الاعضاء من عليهم بلوك صور**
> \`${def}react\` , **وضع رياكشنات تلقائية على شات محدد**
> \`${def}dreact\` , **حذف رياكشنات تلقائية على شات محدد**
> \`${def}line\` , **تحديد روم فاصل تلقائي**
> \`${def}ochat\` , **تحديد شات المسح التلقائي كل 10 دقائق**
> \`${def}ocolors\` , **تحديد رابط خلفية قائمة الالوان**
> [اضغط للانتقال أفار ستور](https://discord.gg/avar)`
            )
            .setColor(`#ffffff`);
          menu.reply(embed, { ephemeral: true });
        }
      });
      MenusManager.on("MENU_CLICKED", async (menu) => {
        if (menu.values[0] == "admins") {
          let embed = new Discord.MessageEmbed()
            .setTitle(`اوامر الادمن العامة`)
            .setDescription(
              `> \`${def}ban\` , **تبنيد شخص من السيرفر**
> \`${def}unban\` , **فك الباند من شخص**\n
> \`${def}new\` , **سجن حساب جديد - نيو**
> \`${def}unnew\` , **فك سجن النيو من شخص**\n
> \`${def}prison\` , **سجن العضو - سجن**
> \`${def}unprison\` , **اعفاء سجن العضو - عفو**
> \`${def}myprison\` , **معلومات السجن - سجني**\n
> \`${def}mute\` , **ميوت شات - اسكت**
> \`${def}unmute\` , **الغاء ميوت شات - تكلم**\n
> \`${def}vmute\` , **ميوت صوتي للعضو**
> \`${def}unvmute\` , **الغاء الميوت الصوتي للعضو**\n
> \`${def}move\` , **سحب عضو من الروم - اسحب**
> \`${def}moveme\` , **الذهاب الى روم صوتي - ودني**\n
> \`${def}allow\` , **سماح لعضو بدخول روم مليان**
> \`${def}remove\` , **ازالة عضو من دخول روم مليان**\n
> \`${def}eventon\` , **تفعيل الهير والصور**
> \`${def}eventoff\` , **تعطيل الهير والصور**\n
> \`${def}photo\` , **اعطاء او ازالة رول الصور - صور**
> \`${def}here\` , **اعطاء او ازالة رول الهير - هير**
> \`${def}cam\` , **اعطاء او ازالة رول اللايف - لايف**\n
> \`${def}role\` , **اعطاء او ازالة رول - رول **
> \`${def}check\` , **التشييك ع الاعضاء برول معين **
> \`${def}rooms\` , **منشن الادمن برا الرومات**\n
> \`${def}addcheck\` , **سماح لشخص باستخدام امر تشيك و الرومات**
> \`${def}removecheck\` , **ازالة شخص من استخدام امر تشيك و الرومات**
> \`${def}checklist\` , **رؤية الاشخاص الذي بامكانهم استخدام امر تشيك و الرومات**
> \`${def}lv\` , **رؤية اخر دخول لشخص في الرومات الصوتيه**\n
> \`${def}addemoji\` , **emoj اخذ ايموجي من سيرفرات اخرى **
> \`${def}clear\` , **مسح شات او رسايل شخص - مسح**
> \`${def}lock\` , **قفل شات محدد - قفل**
> \`${def}unlock\` , **فتح شات محدد - فتح**\n
> \`${def}colors\` , **قائمة الالوان - الوان**
> \`${def}color\` , **اختيار لون - لون**
> \`${def}user\` , **معلومات الحساب**
> \`${def}server\` , **معلومات السيرفر**
> \`${def}avatar\` , **اخذ افتار**
> \`${def}banner\` , **اخذ بنر**
> [اضغط للانتقال أفار ستور](https://discord.gg/avar)`
            )
            .setColor(`#ffffff`);
          menu.reply(embed, { ephemeral: true });
        }
      });
      MenusManager.on("MENU_CLICKED", async (menu) => {
        if (menu.values[0] == "welcome") {
          let embed = new Discord.MessageEmbed()
            .setTitle(`اوامر الولكم`)
            .setDescription(
              `>>> \`${def}wsize\` , **تحديد حجم عرض الصورة**
\`${def}hsize\` , **تحديد حجم ارتفاع الصورة**
\`${def}xavatar\` , **تحديد موقع الافتار بالعرض **
\`${def}yavatar\` , **تحديد موقع الاسم بالارتفاع**
\`${def}xname\` , **تحديد موقع الاسم بالعرض**
\`${def}yname\` , **تحديد موقع الاسم  بالارتفاع**
\`${def}sname\` , **تعيين حجم الاسم**
\`${def}ncolor\` , **تعيين لون اسم الترحيب**
\`${def}syavatar\` , **تحديد حجم الافتار بالطول**
\`${def}sxavatar\` , **تحديد حجم الافتار بالعرض**
\`${def}welmessage\` , **تعيين رسالة ترحيب (استخدم للعضو [user] و للدعوة [inviter])**
\`${def}welpic\` , **وضع صورة الترحيب بإستخدام رابط **
\`${def}welchat\` , **تحديد شات ترحيب**
\`${def}welcome\` , **تشغيل الترحيب أو إيقافه**
\`${def}weltest\` , **تجربة صورة الترحيب**
[اضغط للانتقال أفار ستور](https://discord.gg/avar)`
            )
            .setColor(`#ffffff`);
          menu.reply(embed, { ephemeral: true });
        }
      });
      MenusManager.on("MENU_CLICKED", async (menu) => {
        if (menu.values[0] == "protect") {
          let embed = new Discord.MessageEmbed()
            .setTitle(`اوامر الحماية`)
            .setDescription(
              `> \`${def}bl\` , **اضافة او ازالة تصريح لاستخدام امر بلاك لست**
> \`${def}blist\` , **عرض المصرحين لهم باستخدام امر بلاك لست**
> \`${def}black\` , **منع شخص وتبنيده من السيرفر نهائيا**
> \`${def}unblack\` , **فك البلاك لست من الشخص**
> \`${def}blacklist\` , **عرض الاشخاص الممنوع دخولهم للسيرفر**\n
> \`${def}protection [on/off]\` , **تفعيل او تعطيل الحماية**
> \`${def}cdelete [on/off]\` , **حماية مسح الشاتات والرولات**
> \`${def}bots [on/off]\` , **حماية دخول البوتات**
> \`${def}badwords [on/off]\` , **تفغيل او تعطيل كلمات يعاقب كاتبها**\n
> \`${def}antirole [on/off]\` , **حماية رولات الادمنستريشن**
> \`${def}cdti\` , **اضافة او ازالة تصريح لمسح رولات وشاتات واضافة ادمن**
> \`${def}cdlist\` , **عرض المصرحين لمسح رولات وشاتات واضافة ادمن**\n
> \`${def}adrole\` , **اضافة رول ممنوع**
> \`${def}adrlist\` , **عرض الرولات الممنوعه**
> \`${def}adwl\` , **تصريح لشخص لاعطاء رول ممنوع معين**
> \`${def}adwlist\` , **عرض قائمة التصريح لرول ممنوع معين**\n
> \`${def}protect\` , **للاطلاع علا اوامر الحماية اكثر**
> [اضغط للانتقال أفار ستور](https://discord.gg/avar)`
            )
            .setColor(`#ffffff`);
          menu.reply(embed, { ephemeral: true });
        }
      });

      MenusManager.on("MENU_CLICKED", async (menu) => {
        if (menu.values[0] == "ticket") {
          let embed = new Discord.MessageEmbed()
            .setTitle(`اوامر التكت`)
            .setDescription(
              `>>> \`${def}cmd ticket\` , **تحدد حالة التكت**
\`${def}tcat\` , **تحديد ملف التكت**
\`${def}tadmin\` , **تحدد رول الاداره**
\`${def}tlog\` ,  **تحدد لوق التكت**
\`${def}achat\` , **تحديد شات قبول التكت**
\`${def}tmessage\` , ** تحديد رساله التكت استخدم [user] لو تبي تمنشن الشخص**
\`${def}tbanner\` , **تحدد بنر التكت رابط فقط**
[اضغط للانتقال أفار ستور](https://discord.gg/avar)`
            )
            .setColor(`#ffffff`);
          menu.reply(embed, { ephemeral: true });
        }
      });
    }
  });

  client83883.on("message", async (message) => {
    if (message.content.startsWith(prefix + "add")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) return;
      if (message.guild.premiumTier < 2) {
        return message.lineReplyNoMention(
          ">>> The server must have at level 2 boosts"
        );
      }
      const args = message.content.split(" ");
      const roleid = args[1];
      const role = message.guild.roles.cache.find((r) => r.id === roleid);
      if (!role) {
        return message.lineReplyNoMention(
          `>>> Could not find a role with the id ${roleid}.`
        );
      }
      const url = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
      if (!args[2] || !url.test(args[2])) {
        return message.lineReplyNoMention(
          ">>> Please provide a valid image URL."
        );
      }
      const imageAttachment = new Discord.MessageAttachment(
        args[2],
        "role-icon.png"
      );
      role.setIcon(imageAttachment.attachment);
      message.lineReplyNoMention(`>>> Role icon updated for ${role.name}.`);
    }
  });

  //--------------------دخول للبوت----------------------\\
  let result = await client83883
    .login(token)
    .then(() => {
      return client83883.user.id;
    })
    .catch((err) => {
      return err.message;
    });
  return result;
}

process.on("uncaughtException", console.log);

process.on("unhandledRejection", console.log);

process.on("rejectionHandled", console.log);

client.login(token);
