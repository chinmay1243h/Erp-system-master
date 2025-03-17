const mongoose = require("mongoose")
const { Schema } = mongoose

const payable = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  journalEntry: {
    type: String,
    required: true,
  },

  Description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})
module.exports = mongoose.model("payable", payable)
