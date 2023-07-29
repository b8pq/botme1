const client = require("../index").client;
const Canvas = require("canvas");
Canvas.registerFont("saaud.ttf", { family: "Arial" });
const db = require("../models/user");
const ms = require("ms");
const guild_db = require("../models/guild");
const pb_db = require("../models/protection_backup");
const backup_db = require("../models/backups");
const Discord = require("discord.js");

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

function checkColor(color) {
  let check = /^#([0-9a-f]{3}){1,2}$/i;
  return check.test(color);
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function createList(guild, background) {
  let x = 50;
  let y = 75;
  guild.roles.cache
    .filter((r) => !isNaN(r.name) && r.name != "0")
    .sort((b1, b2) => b1.name - b2.name)
    .forEach((role) => {
      x += 50;
      if (x >= 50 * 10) {
        x = 50;
        y += 50;
      }
    });
  var canvas = await Canvas.createCanvas(550, y);
  var ctx = await canvas.getContext("2d");
  if (background != "null") {
    let image = null;
    try {
      image = await Canvas.loadImage(background);
    } catch (err) {
      image = null;
    }
    if (image) {
      ctx.drawImage(image, 0, 0, 580, y + 80);
    }
  }
  let normal_size = {
    _1: -25,
    _2: 25,
  };
  ctx.fillStyle = `#FFFFFF`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  guild.roles.cache
    .filter((r) => !isNaN(r.name) && Number(r.name) > 0)
    .sort((b1, b2) => b1.name - b2.name)
    .forEach((role) => {
      normal_size._1 += 50;
      if (normal_size._1 >= 50 * 10) {
        normal_size._1 = 25;
        normal_size._2 += 50;
      }
      ctx.fillStyle = `${role.color != 0 ? role.hexColor : `#B9BBBE`}`;
      ctx.shadowColor = "#FFFFFF";
      ctx.shadowBlur = 1;
      ctx.fillRect(normal_size._1, normal_size._2, 40, 40);
      ctx.fillStyle = `#FFFFFF`;
      let num = role.name.toString();
      if (num.length < 2) {
        ctx.font = `bold 25px Arial`;
      } else if (num.length < 3) {
        ctx.font = `bold 22.5px Arial`;
      } else {
        ctx.font = `bold 20px Arial`;
      }
      ctx.shadowColor = "black";
      ctx.shadowBlur = 5;
      ctx.fillText(num, normal_size._1 + 20, normal_size._2 + 20);
      ctx.shadowBlur = 0;
    });
  return canvas.toBuffer();
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
  let user_data = await db.findOne({
    id: member.user.id,
    guildId: member.guild.id,
  });
  if (!user_data) {
    user_data = await db.create({
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
  let channel = member.guild.channels.cache.find((c) => c.id === data.spam.log);
  if (channel) {
    let embed = new Discord.MessageEmbed().setDescription(
      `${member} muted by me for protection\nReason: ${reason}\nTime: ${ms(
        time
      )}`
    );
    channel.send({ embeds: [embed] }).catch((err) => 0);
  }
  setTime(async () => {
    let dd = await db.findOne({
      id: member.user.id,
      guildId: member.guild.id,
    });
    if (!dd) return;
    if (dd.mute.s_time + dd.mute.time - Date.now() > 0) return;
    let guild = client.guilds.cache.get(dd.guildId);
    if (!guild) return;
    let membe2r = await guild.members.fetch(dd.id).catch((err) => 0);
    if (!membe2r) return;
    let role = guild.roles.cache.find((r) => r.name.toLowerCase() === "tmute");
    if (!role) return;
    if (!membe2r.roles.cache.has(role.id)) return;
    await membe2r.roles.remove(role).catch((err) => 0);
    dd.mute.time = 0;
    await dd.save();
  }, time + start_time);
}

async function createWelcome(member, inviter, invite) {
  let owner = await member.guild.members.fetch(member.guild.ownerId);
  let data = await guild_db.findOne({
    id: member.guild.id,
  });
  if (!data || !data.welcome.status) return;
  if (data.welcome.channel == "null") return;
  let channel = member.guild.channels.cache.find(
    (c) => c.id === data.welcome.channel
  );
  if (!channel) return;
  let background;
  try {
    background = await Canvas.loadImage(data.welcome.background.image);
  } catch (err) {
    background = null;
  }
  let avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
  );
  let can = Canvas.createCanvas(250, 250);
  let ctt = can.getContext("2d");
  ctt.beginPath();
  ctt.arc(125, 125, 125, 0, Math.PI * 2, true);
  ctt.closePath();
  ctt.clip();
  ctt.drawImage(avatar, 0, 0, 250, 250);
  let buff_avatar = await can.toBuffer();
  let avatar_1 = await Canvas.loadImage(buff_avatar);
  let canvas = await Canvas.createCanvas(
    data.welcome.background.width,
    data.welcome.background.height
  );
  let ctx = canvas.getContext("2d");
  if (background) {
    try {
      ctx.drawImage(
        background,
        0,
        0,
        data.welcome.background.width,
        data.welcome.background.height
      );
    } catch (err) {}
  }
  ctx.drawImage(
    avatar_1,
    data.welcome.avatar.x,
    data.welcome.avatar.y,
    data.welcome.avatar.width,
    data.welcome.avatar.height
  );
  ctx.textAlign = "center";
  ctx.fillStyle = `${data.welcome.name.color}`;
  ctx.font = `${data.welcome.name.size}px Arial`;
  ctx.fillText(
    member.user.username?.length > 12
      ? member.user.username.substring(0, 11) + "..."
      : member.user.username,
    data.welcome.name.x,
    data.welcome.name.y
  );
  let image = await canvas.toBuffer();
  if (data.welcome.message == "null") {
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
    let msg = data.welcome.message
      .replace("[user]", `<@${member.user.id}>`)
      .replace("[userName]", member.user.username)
      .replace("[memberCount]", member.guild.memberCount)
      .replace("[server]", member.guild.name)
      .replace("[inviter]", `${inviter}`)
      .replace("[inviterName]", `${inviter?.username}`)
      .replace("[invites]", `${invite?.count}`);
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
}

async function restore(guild, backup_id) {
  let data = await guild_db.findOne({
    id: guild.id,
  });
  if (!data || !data.protection.backup.length) return false;
  let index = data.protection.backup.findIndex((b) => b.id === backup_id);
  if (index === -1) return false;
  let backup_data = data.protection.backup[index];
  backup_data.roles.forEach(async (info) => {
    let role = guild.roles.cache.get(info.id);
    if (!role) return;
    await role
      .edit({
        permissions: info.permissions,
      })
      .catch((err) => console.log(err));
  });
  data.protection.backup.splice(index, 1);
  await data.save();
  return true;
}

async function action(member, action) {
  let data = await guild_db.findOne({
    id: member.guild.id,
  });
  if (!data) return null;
  if (action === "remove member roles") {
    member.roles.cache.forEach(async (r) => {
      await member.roles.remove(r.id).catch(() => 0);
    });
    return true;
  } else if (
    action ===
    "remove permissions from member roles and send backup code to owner"
  ) {
    let gg = {
      id: `${Date.now()}`,
      roles: [],
    };
    gg.roles = member.roles.cache.map((r) => ({
      id: r.id,
      permissions: r.permissions?.toArray(),
    }));
    data.protection.backup.push(gg);
    await data.save();
    member.roles.cache.forEach(async (r) => {
      await r
        .edit({
          permissions: [],
        })
        .catch(() => 0);
    });
    return gg.id;
  } else if (
    action === "remove permissions from all roles and send backup code to owner"
  ) {
    let gg = {
      id: `${Date.now()}`,
      roles: [],
    };
    gg.roles = member.guild.roles.cache.map((r) => ({
      id: r.id,
      permissions: r.permissions?.toArray(),
    }));
    data.protection.backup.push(gg);
    await data.save();
    member.guild.roles.cache.forEach(async (r) => {
      await r
        .edit({
          permissions: [],
        })
        .catch(() => 0);
    });
    return gg.id;
  } else return null;
}

let protection_db = new Map();

async function checkChange(oldCh, newCh) {
  let first = oldCh.permissionOverwrites.cache.filter(
    (o) =>
      !newCh.permissionOverwrites.cache.find(
        (oo) =>
          oo.id === o.id &&
          oo.allow?.toArray() === o.allow?.toArray() &&
          oo.deny?.toArray() === o.deny?.toArray()
      )
  );
  let first_1 = newCh.permissionOverwrites.cache.filter(
    (o) =>
      !oldCh.permissionOverwrites.cache.find(
        (oo) =>
          oo.id === o.id &&
          oo.allow?.toArray() === o.allow?.toArray() &&
          oo.deny?.toArray() === o.deny?.toArray()
      )
  );
  if (first.size > 0 || first_1.size > 0) return true;
  return false;
}

async function pBackup(guild) {
  let data = await pb_db.findOne({
    id: guild.id,
  });
  if (!data) {
    data = await pb_db.create({
      id: guild.id,
    });
    await data.save();
  }
  let categories = [];
  let channells = [];
  let roles = [];

  //categories
  let category = await guild.channels.cache.filter(
    (c) => c.type === "GUILD_CATEGORY"
  );
  await category.forEach(async (ca) => {
    let channels = guild.channels.cache.filter((p) => p.parentId === ca.id);
    let chs;
    if (channels.size > 0) {
      chs = channels
        .sort((a, b) => a.position - b.position)
        .map((n) => `${n.id}`);
    } else {
      chs = [];
    }
    let GG = {
      id: ca.id,
      position: ca.position,
      channels: chs,
    };
    await categories.push(GG);
  });

  //channels
  let channel = await guild.channels.cache.filter(
    (c) => c.type !== "GUILD_CATEGORY"
  );
  await channel.forEach(async (cl) => {
    let GC = {
      id: cl.id,
      position: cl.position,
    };
    await channells.push(GC);
  });
  let mbbs;
  try {
    mbbs = await guild.members.fetch().catch((err) => null);
  } catch (err) {
    mbbs = null;
  }
  //roles
  await guild.roles.cache.forEach(async (role) => {
    let mbs = mbbs
      ? mbbs.filter((m) => m.roles.cache.has(role.id))
      : guild.members.cache.filter((m) => m.roles.cache.has(role.id));
    let members;
    if (mbs.size > 0) {
      members = mbs.map((r) => `${r.user.id}`);
    } else {
      members = [];
    }
    let GR = {
      id: role.id,
      position: role.position,
      members: members,
    };
    await roles.push(GR);
  });
  data.categories = categories;
  data.channels = channells;
  data.roles = roles;
  await data.save().catch((err) => {});
  return data;
}

async function backChannel(channel) {
  try {
    let data = await pb_db.findOne({
      id: channel.guild.id,
    });
    let array = channel.permissionOverwrites.cache.map((c) => c);
    if (channel.type === "GUILD_CATEGORY") {
      let position;
      let channels;
      if (data == null) {
        position = 0;
        channels = [];
      } else {
        let category = data.categories.find((d) => d.id === channel.id);
        if (!category) {
          position = data.categories.length + 1;
          channels = [];
        } else {
          position = category.position;
          channels = category.channels;
        }
      }
      await channel.guild.channels
        .create(`${channel.name}`, {
          type: channel.type,
          position: position,
          permissionOverwrites: array,
          reason: "Max protection",
        })
        .then(async (ca) => {
          await channels.forEach(async (cc) => {
            let cha = channel.guild.channels.cache.find((cl) => cl.id === cc);
            if (cha) {
              cha.setParent(ca.id, { lockPermissions: false });
            }
          });
        });
    } else {
      let position;
      if (!data) {
        position = 0;
      } else {
        let find = data.channels.find((x) => x.id === channel.id);
        if (!find) {
          position = 0;
        } else {
          position = find.position;
        }
      }
      await channel.guild.channels.create(`${channel.name}`, {
        type: channel.type,
        parent: channel.parentId,
        permissionOverwrites: array,
        userLimit: channel.userLimit,
        rtcRegion: channel.rtcRegion,
        bitrate: channel.bitrate,
        topic: channel.topic,
        nsfw: channel.nsfw,
        position: position,
        rateLimitPerUser: channel.rateLimitPerUser,
        reason: "Max protection",
      });
    }
  } catch (err) {}
}

async function backRole(role) {
  try {
    let data = await pb_db.findOne({
      id: role.guild.id,
    });
    let position;
    let members;
    if (data == null) {
      position = 0;
      members = [];
    } else {
      let find = await data.roles.find((r) => r.id == role.id);
      if (!find) {
        position = 0;
        members = [];
      } else {
        position = find.position;
        members = find.members;
      }
    }
    await role.guild.roles
      .create({
        name: role.name,
        color: role.color,
        hoist: role.hoist,
        position: position,
        permissions: role.permissions.toArray(),
        icon: role.icon,
        unicodeEmoji: role.unicodeEmoji,
        mentionable: role.mentionable,
        reason: "Max Protection",
      })
      .then(async (rr) => {
        members.forEach(async (mm) => {
          let member = await role.guild.members.fetch(mm).catch(() => 0);
          if (member) {
            member.roles.add(rr).catch(() => 0);
          }
        });
      });
  } catch (err) {}
}

async function backup(guild) {
  let categories = guild.channels.cache
    .filter((c) => c.type == "GUILD_CATEGORY")
    .sort((a, b) => a.position - b.position)
    .map((ca) => ca);
  let textss = guild.channels.cache
    .filter((c) => c.type == "GUILD_TEXT" || c.type == "GUILD_NEWS")
    .map((ca) => ca);
  let voicess = guild.channels.cache
    .filter((c) => c.type == "GUILD_VOICE" || c.type == "GUILD_STAGE_VOICE")
    .map((ca) => ca);
  let categorys = [];
  let texts = [];
  let voices = [];

  //categories
  for (let cate of categories) {
    let permissions = cate.permissionOverwrites.cache.map((p) => p);
    let permission = [];
    for (let u of permissions) {
      if (u.type == "role") {
        let ro = guild.roles.cache.get(u.id);
        let t = {
          name: ro.name,
          allow: u.allow.toArray(),
          deny: u.deny.toArray(),
        };
        await permission.push(t);
      }
    }
    let g = {
      name: cate.name,
      type: cate.type,
      position: cate.position,
      permissions: permission,
    };
    await categorys.push(g);
  }
  //channels
  for (let tex of textss) {
    let permissions = tex.permissionOverwrites.cache.map((p) => p);
    let permission = [];
    for (let u of permissions) {
      if (u.type == "role") {
        let ro = guild.roles.cache.get(u.id);
        let t = {
          name: ro.name,
          allow: u.allow.toArray(),
          deny: u.deny.toArray(),
        };
        await permission.push(t);
      }
    }
    let parent;
    if (tex.parentId) {
      let ch = guild.channels.cache.get(tex.parentId);
      parent = ch.name;
    } else {
      parent = null;
    }

    let g = {
      type: tex.type,
      name: tex.name,
      position: tex.position,
      parentId: parent,
      topic: tex.topic,
      nsfw: tex.nsfw == undefined ? false : tex.nsfw,
      rateLimitPerUser:
        tex.rateLimitPerUser == undefined ? 0 : tex.rateLimitPerUser,
      permissions: permission,
    };
    await texts.push(g);
  }
  //voice
  for (let voi of voicess) {
    let permissions = voi.permissionOverwrites.cache.map((p) => p);
    let permission = [];
    for (let u of permissions) {
      if (u.type == "role") {
        let ro = guild.roles.cache.get(u.id);
        let t = {
          name: ro.name,
          allow: u.allow.toArray(),
          deny: u.deny.toArray(),
        };
        await permission.push(t);
      }
    }
    let parent;
    if (voi.parentId) {
      let ch = guild.channels.cache.get(voi.parentId);
      parent = ch.name;
    } else {
      parent = null;
    }
    let g = {
      name: voi.name,
      position: voi.position,
      parentId: parent,
      bitrate: voi.bitrate,
      userLimit: voi.userLimit,
      permissions: permission,
      type: voi.type,
    };
    await voices.push(g);
  }

  //roles
  let roles = guild.roles.cache
    .filter((n) => n.id !== guild.id)
    .sort((a, b) => a.position - b.position)
    .map((r) => r);
  let roless = [];
  for (let rol of roles) {
    if (!rol.managed) {
      let g = {
        name: rol.name,
        color: rol.color,
        hoist: rol.hoist,
        permissions: rol.permissions.toArray(),
        position: rol.position,
        mentionable: rol.mentionable,
      };
      await roless.push(g);
    }
  }

  let ee = guild.emojis.cache.map((e) => ({
    id: e.id,
    name: e.name,
    animated: e.animated,
  }));

  let other = {
    banner: null,
    icon: null,
  };
  if (guild.icon) {
    other.icon = guild.iconURL({ dynamic: false, size: 1024 });
  }
  if (guild.banner) {
    other.banner = guild.bannerURL({ dynamic: false, size: 1024 });
  }

  let guild_data = await guild_db.findOne({
    id: guild.id,
  });
  if (guild_data) {
    if (guild_data.protection.avatar != "null") {
      other.icon = guild_data.protection.avatar;
    }
    if (guild_data.protection.banner != "null") {
      other.banner = guild_data.protection.banner;
    }
  }

  //saving data
  let object = {
    name: guild.name,
    code: Date.now().toString(20).toUpperCase(),
    time: Date.now(),
    channels: {
      category: categorys,
      text: texts,
      voice: voices,
    },
    roles: roless,
    emojis: ee,
    other: other,
  };
  let data = await backup_db.findOne({
    id: guild.ownerId,
  });
  if (!data) {
    data = await backup_db.create({
      id: guild.ownerId,
    });
  }
  await data.backups.push(object);
  await data.save();
  return object.code;
}

async function deleteRoles(guild) {
  return Promise.all(
    guild.roles.cache.map(
      (r) =>
        new Promise(async (resolve, reject) => {
          await r.delete().catch(() => 0);
          resolve(true);
        })
    )
  );
}

async function deleteChannels(guild) {
  return Promise.all(
    guild.channels.cache.map(
      (c) =>
        new Promise(async (resolve, reject) => {
          await c.delete().catch(() => 0);
          resolve(true);
        })
    )
  );
}

async function deleteEmojis(guild) {
  return Promise.all(
    guild.emojis.cache.map(
      async (e) =>
        new Promise(async (resolve, reject) => {
          await e.delete().catch(() => 0);
          resolve(true);
        })
    )
  );
}

async function loadRoles(guild, data) {
  return Promise.all(
    data.roles
      .sort((a, b) => b.position - a.position)
      .map(
        (role) =>
          new Promise((resolve, reject) => {
            guild.roles
              .create({
                name: role.name,
                color: role.color,
                hoist: role.hoist,
                permissions: role.permissions,
                mentionable: role.mentionable,
                reason: "Backup System",
              })
              .then((re) => {
                resolve(re);
              })
              .catch((err) => {
                resolve(true);
              });
          })
      )
  );
}

async function loadCategories(guild, data) {
  return Promise.all(
    data.channels.category.map(
      (category) =>
        new Promise(async (resolve, reject) => {
          let permissions = [];
          for (let permission of category.permissions) {
            let role = guild.roles.cache.find(
              (r) => r.name === permission.name
            );
            if (role) {
              let g = {
                id: role.id,
                deny: permission.deny,
                allow: permission.allow,
              };
              await permissions.push(g);
            }
          }
          guild.channels
            .create(category.name, {
              type: category.type,
              position: category.position,
              permissionOverwrites: permissions,
            })
            .then((c) => {
              resolve(c);
            })
            .catch((err) => {
              resolve(true);
            });
        })
    )
  );
}

async function loadText(guild, data) {
  return Promise.all(
    data.channels.text.map(
      (text) =>
        new Promise(async (resolve, reject) => {
          let permissions = [];
          for (let permission of text.permissions) {
            let role = guild.roles.cache.find(
              (r) => r.name === permission.name
            );
            if (role) {
              let g = {
                id: role.id,
                deny: permission.deny,
                allow: permission.allow,
              };
              await permissions.push(g);
            }
          }
          let gg;
          if (text.parentId == null) {
            gg = null;
          } else {
            gg = guild.channels.cache.find((c) => c.name === text.parentId);
          }
          guild.channels
            .create(text.name, {
              type: text.type,
              parent: gg,
              topic: text.topic,
              nsfw: text.nsfw,
              rateLimitPerUser: text.rateLimitPerUser,
              position: text.position,
              permissionOverwrites: permissions,
            })
            .then((t) => {
              resolve(t);
            })
            .catch((err) => {
              resolve(true);
            });
        })
    )
  );
}

async function loadVoice(guild, data) {
  return Promise.all(
    data.channels.voice.map(
      (voice) =>
        new Promise(async (resolve, reject) => {
          let permissions = [];
          for (let permission of voice.permissions) {
            let role = guild.roles.cache.find(
              (r) => r.name === permission.name
            );
            if (role) {
              let g = {
                id: role.id,
                deny: permission.deny,
                allow: permission.allow,
              };
              await permissions.push(g);
            }
          }
          let gg;
          if (voice.parentId == null) {
            gg = null;
          } else {
            gg = guild.channels.cache.find((c) => c.name === voice.parentId);
          }
          guild.channels
            .create(voice.name, {
              type: voice.type,
              parent: gg,
              userLimit: voice.userLimit,
              bitrate: voice.bitrate,
              position: voice.position,
              permissionOverwrites: permissions,
            })
            .then((v) => {
              resolve(v);
            })
            .catch((err) => {
              resolve(true);
            });
        })
    )
  );
}

async function loadSettings(guild, data) {
  return new Promise(async (resolve, reject) => {
    if (data.other.icon != null) {
      await guild.setIcon(data.other.icon).catch((err) => 0);
    }
    if (data.other.banner != null) {
      await guild.setBanner(data.other.banner).catch((err) => 0);
    }
    await guild.setName(data.name).catch((err) => 0);
    resolve(true);
  });
}

async function loadEmojis(guild, data) {
  return Promise.all(
    data.emojis.map(
      (emoji) =>
        new Promise((resolve, reject) => {
          let link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
            emoji.animated ? "gif" : "png"
          }?size=512`;
          guild.emojis
            .create(`${link}`, `${emoji.name}`)
            .then((em) => {
              resolve(em);
            })
            .catch((err) => {
              resolve(true);
            });
        })
    )
  );
}

async function load(guild, data, options) {
  return new Promise(async (resolve, reject) => {
    if (options.includes("delete_roles")) {
      await deleteRoles(guild);
    }
    if (options.includes("delete_channels")) {
      await deleteChannels(guild);
    }
    if (options.includes("delete_emojis")) {
      await deleteEmojis(guild);
    }
    if (options.includes("load_roles")) {
      await loadRoles(guild, data);
    }
    if (options.includes("load_channels")) {
      await loadCategories(guild, data);
      await loadText(guild, data);
      await loadVoice(guild, data);
    }
    if (options.includes("load_settings")) {
      await loadSettings(guild, data);
    }
    if (options.includes("load_emojis")) {
      await loadEmojis(guild, data);
    }
    resolve(true);
  });
}

async function auto_backup(guild) {
  let guild_data = await guild_db.findOne({
    id: guild.id,
  });
  if (!guild_data || !guild_data.auto_backup.status) return;
  let t =
    guild_data.auto_backup.last_time + guild_data.auto_backup.days * 86400000;
  setTime(async () => {
    guild = client.guilds.cache.get(guild.id);
    if (!guild) return;
    let guild_data1 = await guild_db.findOne({
      id: guild.id,
    });
    if (!guild_data1 || !guild_data1.auto_backup.status) return;
    let tt =
      guild_data1.auto_backup.last_time +
      guild_data1.auto_backup.days * 86400000;
    if (t != tt) return;
    guild_data1.auto_backup.last_time = Date.now();
    await guild_data1.save();
    await backup(guild);
    auto_backup(guild);
  }, t);
}

module.exports = {
  setTime,
  checkColor,
  delay,
  createList,
  tempMute,
  createWelcome,
  restore,
  action,
  protection_db,
  checkChange,
  pBackup,
  backChannel,
  backRole,
  backup,
  load,
  auto_backup,
};
