const db = require("../../models/guild");

module.exports = {
  name: "messageCreate",
  run: async (client, message) => {
    if(!message.guild || !message.member || message.author.bot || !message.content) return;
    let data = await db.findOne({
      id: message.guild.id
    });
    if(!data) {
      data = await db.create({
        id: message.guild.id
      });
      await data.save();
    }
    let prefix = data.prefix;
    let args = message.content.split(" ");
    if(!args[0].startsWith(prefix)) return;
    let cmd = args[0].slice(prefix.length)?.toLowerCase();
    if(!cmd) return;
    let find = client.commands.find(c => c.name === cmd || c.aliases?.includes(cmd));
    if(!find) return;
    if(data.commands.includes(find.name)) return;
    try{
      await find.run(client, message, args.slice(1), data);
    } catch(err) {
      console.log(err);
    }
  }
}