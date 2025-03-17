const mongoose = require("mongoose")
const { Schema } = mongoose

const salesTrailSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
  customerName: {
    type: String,
    ref: "customer",
    required: true,
  },
  productName: {
    type: String,
    ref: "product",
    required: true,
  },
  productQuantity: {
    type: Number,
    ref: "product",
    required: true,
  },
  saleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sales",
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
    required: true,
  },
  saleAmount: {
    type: Number,
    required: true,
  },
  singleUnitPrice: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("salesTrail", salesTrailSchema)
