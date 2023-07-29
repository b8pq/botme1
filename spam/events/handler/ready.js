const db = require("../../models/bot");

module.exports = {
  name: "ready",
  run: async (client) => {
    console.log(client.user.tag);
    let data = await db.findOne({
      id: client.user.id,
    });
    if (!data) {
      data = await db.create({
        id: client.user.id,
      });
      await data.save();
    }
  },
};
