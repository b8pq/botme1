const guild_db = require("../../models/guild");
let join_map = new Map();

module.exports = {
  name: "guildMemberAdd",
  run: async(client, member) => {
    let data = await guild_db.findOne({
      id: member.guild.id
    });
    if(!data) return;
    
    //enter
    if(data.spam.enter.status) {
      let d = join_map.get(member.guild.id);
      if(!d) d = 0;
      d += 1;
      join_map.set(member.guild.id, d);
      if(d > data.spam.enter.limit) {
        await member.ban({ reason: "Spam enter" }).catch(() => 0);
      }
      setTimeout(() => {
        join_map.set(member.guild.id, 0);
      }, data.spam.enter.time * 1000);
    }

    ///under age
    if(data.spam.new.status) {
      let time = Date.now() - (new Date(member.user.createdTimestamp)).getTime();
      if(time <= (data.spam.new.time * 24 * 60 * 60000)) {
        await member.ban({ reason: "Tokens Protection" }).catch(() => 0);
      }
    }
    
  }
}