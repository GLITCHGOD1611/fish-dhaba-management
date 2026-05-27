const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },

    tableNumber: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    gst: {
      type: Number,
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "upi", "card"],
      required: true,
    },
    paymentStatus: { type: String, 
        enum: ["paid", "pending"], 
        default: "paid" 
    },
    generatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Bills", BillSchema);
