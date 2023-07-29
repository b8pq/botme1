require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({ partials:["MESSAGE","CHANNEL", "USER", "GUILD_MEMBER"], intents:["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS", "GUILD_INVITES", "GUILD_BANS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "GUILD_PRESENCES"], allowedMentions: { parse: ['users', 'roles'], repliedUser: false } });
module.exports.client = client;
require("mongoose").connect(process.env.database, { useNewUrlParser: true, useUnifiedTopology: true });
for(let handler of ["message", "event"]) require("./handlers/" + handler)(client);
process.on("unhandledRejection", (reason) => console.log(reason));
process.on("error", (err) => console.log(err));
client.login(process.env.token);