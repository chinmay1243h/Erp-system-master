const mongoose = require("mongoose")
const { Schema } = mongoose

const ledger = new Schema({
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
  TransactionId: {
    type: String,
   
  },
  date: {
    type: Date,
    default: Date.now,  
  },
})
module.exports = mongoose.model("ledger", ledger)
