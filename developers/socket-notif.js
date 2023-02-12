// Object of message component by socket.io-client
const Message = {
  key: String, // Key for message
  id: String, // Id sender
  date: Date, // Time sending
  chat: String, // Id Chat if you in group or community
  message: {
    reply: {
      id: String, // Id sender quoted
      key: String, // Key for message quoted
      message: MessageComponents.message, // Message Components [class MessageComponents]
    },
    forward: {
      original: String, // Original User Id
      time_original: Date, // Original Time sending,
      forward_value: Number // Max user forwared this message
    },
    text: String, // Text
    image: {
      url: String, // URL
    },
    video: {
      url: String, // URL
    },
    react: {
      ids: String, // Id sender
      emote: StringEmotes // Emoji "🔥" [class StringEmotes]
    },
    polling: {
      select: Array, // Value recommend for selected
      maxval: Number, // Max value for polling,
      keys_enc_server: CryptoMessage // [class CryptoMessage]
    },
    take_task: {
      type: Number, // Type Methode For Message [{ 0: "delete", 1: "update", 2: "pin (only in group or community)" }]
      key: String, // Mesage keys
    }
  },
  group: {
    change: {
      subject: String,
      desc: String,
      pp: Boolean,
    },
    user: {
      add: StringUserId,
      kick: StringUserId,
      plus_role: StringUserId,
      mins_role: StringUserId
    }
  }
}
