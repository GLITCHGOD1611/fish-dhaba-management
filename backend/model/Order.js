const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    menuItem : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'MenuItem',
    },
    itemName : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,

    },
    price : {
        type : Number,
        required : true
    },
    Total : {
        type : Number,
        required : true
    },
    itemStatus :{
        type : String ,
        enum : ['pending', 'preparing', 'ready', 'served'],
        default : 'pending'
    },
    addedAt:{
        type : Date,
        default : Date.now
    }
});

const OrderSchema = new mongoose.Schema({
    table : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Tables',
        required : true
    },
    waiter:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        required : true
    },
    items : [OrderItemSchema],
    orderStatus : {
        type : String,
        enum : ['running', 'completed', 'cancelled'],
        default : 'running'
    },
    subTotal:{
        type : Number,
        default : 0
    },
    gst:{
        type : Number,
        default : 0
    },
    grandTotal : {
        type : Number,
        default : 0
    },
    paymentStatus : {
        type : String,
        enum : ['pending', 'paid'],
        default : 'pending'
    },
    openedAt : {
        type : Date,
        default : Date.now
    },
    closedAt : {
        type : Date,
        default : null
    },
}, { timestamps : true });

module.exports = mongoose.model('Orders', OrderSchema);
