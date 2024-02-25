const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);