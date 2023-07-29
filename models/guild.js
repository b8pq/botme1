const { model, Schema } = require("mongoose");

module.exports = model(
  "Guild",
  Schema({
    id: { type: String, required: true },
    auto_backup: {
      status: { type: Boolean, default: false },
      days: { type: Number, default: 1 },
      last_time: { type: Number, default: 0 },
      last_load: { type: Number, default: 0 },
    },
    prefix: { type: String, default: "#" },
    mute: {
      reasons: { type: Array, default: [] },
      log: { type: String, default: "null" },
    },
    vmute: {
      reasons: { type: Array, default: [] },
      log: { type: String, default: "null" },
    },
    prison: {
      reasons: { type: Array, default: [] },
      log: { type: String, default: "null" },
      role: { type: String, default: "null" },
    },
    block: {
      role: { type: String, default: "null" },
      users: { type: Array, default: [] },
    },
    warns: {
      data: { type: Array, default: [] },
      count: { type: Number, default: 0 },
    },
    commands: { type: Array, default: [] },
    colors_background: { type: String, default: "null" },
    protection: {
      bans: {
        status: { type: Boolean, default: false },
        limit: { type: Number, default: 4 },
        punishment: {
          type: String,
          default:
            "remove permissions from member roles and send backup code to owner",
        },
      },
      channels: {
        status: { type: Boolean, default: false },
        limit: { type: Number, default: 4 },
        punishment: {
          type: String,
          default: "remove member roles",
        },
      },
      roles: {
        status: { type: Boolean, default: false },
        limit: { type: Number, default: 4 },
        punishment: {
          type: String,
          default:
            "remove permissions from member roles and send backup code to owner",
        },
      },
      bots: { type: Boolean, default: false },
      permissions: { type: Boolean, default: false },
      guild: { type: Boolean, default: false },
      avatar: { type: String, default: "null" },
      banner: { type: String, default: "null" },
      backup: { type: Array, default: [] },
    },
    spam: {
      message: {
        status: { type: Boolean, default: false },
        limit: { type: Number, default: 4 },
        time: { type: Number, default: 2 },
      },
      new: {
        status: { type: Boolean, default: false },
        time: { type: Number, default: 30 },
      },
      enter: {
        status: { type: Boolean, default: false },
        limit: { type: Number, default: 10 },
        time: { type: Number, default: 4 },
      },
      chat: {
        status: { type: Boolean, default: false },
        limit: { type: Number, default: 20 },
        time: { type: Number, default: 5 },
      },
      reply: { type: Boolean, default: false },
      long: { type: Boolean, default: false },
      log: { type: String, default: "1087397384805421126" },
      badwords: {
        status: { type: Boolean, default: false },
        words: { type: Array, default: [] },
      },
    },
    owners: { type: Array, default: [] },
    auto: {
      status: { type: Boolean, default: false },
      role: { type: String, default: "null" },
    },
    ticket: {
      status: { type: Boolean, default: false },
      category: { type: String, default: "null" },
      message: { type: String, default: "Hello [user]" },
      role: { type: String, default: "null" },
      image: { type: String, default: "null" },
      request: { type: String, default: "null" },
    },
    admins: { type: Array, default: [] },
    order: {
      status: { type: Boolean, default: false },
      channel: { type: String, default: "null" },
      pic: { type: String, default: "null" },
    },
    voice: {
      status: { type: Boolean, default: false },
      channel: { type: String, default: "null" },
      message: { type: String, default: "Voice Online [00]" },
    },
    black: { type: Array, default: [] },
    react: { type: Array, default: [] },
    line: { type: Array, default: [] },
    picrole: { type: String, default: "null" },
    welcome: {
      background: {
        width: { type: Number, default: 500 },
        height: { type: Number, default: 300 },
        image: { type: String, default: "null" },
      },
      avatar: {
        x: { type: Number, default: 200 },
        y: { type: Number, default: 30 },
        width: { type: Number, default: 100 },
        height: { type: Number, default: 100 },
      },
      name: {
        x: { type: Number, default: 200 },
        y: { type: Number, default: 150 },
        size: { type: Number, default: 25 },
        color: { type: String, default: "#ffffff" },
      },
      message: { type: String, default: "null" },
      channel: { type: String, default: "null" },
      status: { type: Boolean, default: false },
    },
    logs: {
      delete_message: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      update_message: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      create_channel: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      update_channel: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      delete_channel: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      ban_add: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      ban_remove: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      member_leave: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      member_join: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      member_roles_update: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      member_nick_update: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      create_role: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      delete_role: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      update_role: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      voice_state: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      voice_move: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      voice_join: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      voice_leave: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
      server_update: {
        color: { type: String, default: "#000000" },
        channel: { type: String, default: "null" },
        status: { type: Boolean, default: false },
      },
    },
  })
);
