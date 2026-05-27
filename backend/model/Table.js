const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    tableNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    capacity: {
      type: Number,
      default: 4,
    },
    status: {
      type: String,
      enum: ["available", "occupied"],
      default: "available",
    },
    assignedWaiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },
    currentOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
      default: null,
    },
    openedAt: {
      type: Date,
      default: null,
    },
    closedAt: { 
        type: Date,
         default: null 
        },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Tables", TableSchema);
