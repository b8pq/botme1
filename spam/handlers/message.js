const fs = require("fs");

module.exports = (client) => {
  client.commands = [];
  fs.readdirSync('./commands').forEach(folder => {
    let files = fs.readdirSync(`./commands/${folder}`).filter(f => f.endsWith('.js'));
    files.forEach(file => {
      let data = require(`../commands/${folder}/${file}`);
      if(!data || !data.name) return;
      client.commands.push(data);
    });
  });
  console.log(client.commands.map((c, i) => `${i+=1}- ${c.name}`).join("\n") + "\n\n- Total Commands: " + client.commands.length + "\n");
}