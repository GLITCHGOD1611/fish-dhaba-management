const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    category:{
        type:String,
        enum : [ 'Fish', 'Chicken', 'Rice', 'Roti', 'Drinks', 'Starter','veg' ]
    },
    price : {
        type : Number,
        required : true,
    },
    image : {
        type : String
    },
    available : {
        type : Boolean,
        default : true,
    }
}, { timestamps : true });

module.exports = mongoose.model('MenuItem', MenuItemSchema);