const db1 = require("../../models/user");

module.exports = {
  name: "voiceStateUpdate",
  run: async (client, oldState, newState) => {
    if(!oldState.channelId && newState.channelId) {
      let data = await db1.findOne({
        id: newState.id,
        guildId: newState.guild.id
      });
      if(!data) return;
      let user = await newState.guild.members.fetch(newState.id).catch(() => 0);
      if(!user) return;
      if((data.vmute.s_time + data.vmute.time) <= Date.now()) {
        if(!data.vmute.muted) return;
        user.voice.setMute(false).catch(() => 0);
        data.vmute.muted = false;
        await data.save();
      } else {
        if(data.vmute.muted) return;
        user.voice.setMute(true).catch(() => 0);
        data.vmute.muted = true;
        await data.save();
      }
    }
  }
}