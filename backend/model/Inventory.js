const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    itemName: { 
        type: String,
         required: true 
        },
    quantity: {
         type: Number, 
         required: true
         },
    unit: {
         type: String,
          enum: ["KG", "Liter", "Piece", "Packet"]
         },
    lowStockAlert: {
         type: Number,
          default: 5 },
    updatedAt: {
         type: Date,
          default: Date.now },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Inventory", InventorySchema);
