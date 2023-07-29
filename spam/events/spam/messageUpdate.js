const guild_db = require("../../models/guild");
const { tempMute } = require("../../functions");
let zakhrafa = ["*", "/", ".", "_", "-"];

module.exports = {
  name: "messageUpdate",
  run: async(client, oldMessage, message) => {
    if(!message.guild || !message.member || !message.content || message.author.id === client.user.id) return;
    if(oldMessage.content == message.content) return;
    if(message.member.permissions.has("ADMINISTRATOR") || message.member.permissions.has("MANAGE_GUILD")) return;
    let data = await guild_db.findOne({
      id: message.guild.id
    });
    if(!data) return;
    
    //badwords
    if(data.spam.badwords.status) {
      let content = message.content;
      zakhrafa.forEach(z => {
        content = content?.split(z).join("");
      });
      if(content) {
        let fil = data.spam.badwords.words.filter(w => content.toLowerCase().includes(w.toLowerCase()));
        if(fil.length > 0) {
          message.delete().catch(() => 0);
          await tempMute(message.member, `Badwords (||${fil.join(", ")}||)`, 3153600000000);
          message.channel.send({ content: `${message.author} muted for sending badwords.` });
          return;
        }
      }
    }
    
    //long messages
    if(data.spam.long) {
      if(message.content.length > 500) {
        message.delete().catch(() => 0);
        await tempMute(message.member, `Long message`, 3153600000000);
        message.channel.send({ content: `${message.author} muted for sending long message.` });
        return;
      }
    }
    
  }
}