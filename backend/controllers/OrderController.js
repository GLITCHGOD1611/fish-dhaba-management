const Order = require('../model/Order');

// ==============================
// Get All Orders
// ==============================
exports.getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find()
            .populate('table')
            .populate('waiter')
            .populate('items.menuItem');

        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
};

// ==============================
// Get Single Order
// ==============================
exports.getSingleOrder = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id)
            .populate('table')
            .populate('waiter')
            .populate('items.menuItem');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            data: order
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};

// ==============================
// Create Order
// ==============================
exports.createOrder = async (req, res) => {

    try {

        const {
            table,
            waiter,
            items,
            gst
        } = req.body;

        // Calculate subtotal
        let subTotal = 0;

        const formattedItems = items.map(item => {

            const total = item.quantity * item.price;

            subTotal += total;

            return {
                menuItem: item.menuItem,
                itemName: item.itemName,
                quantity: item.quantity,
                price: item.price,
                Total: total
            };

        });

        // GST calculation
        const gstAmount = gst || 0;

        // Grand Total
        const grandTotal = subTotal + gstAmount;

        const newOrder = await Order.create({
            table,
            waiter,
            items: formattedItems,
            subTotal,
            gst: gstAmount,
            grandTotal
        });

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            data: newOrder
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};

// ==============================
// Update Order Status
// ==============================
exports.updateOrderStatus = async (req, res) => {

    try {

        const { orderStatus } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                orderStatus,
                closedAt:
                    orderStatus === 'completed'
                        ? new Date()
                        : null
            },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Order status updated',
            data: updatedOrder
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};

// ==============================
// Update Payment Status
// ==============================
exports.updatePaymentStatus = async (req, res) => {

    try {

        const { paymentStatus } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { paymentStatus },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Payment status updated',
            data: updatedOrder
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};

// ==============================
// Update Item Status
// ==============================
exports.updateItemStatus = async (req, res) => {

    try {

        const {
            orderId,
            itemId
        } = req.params;

        const { itemStatus } = req.body;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        const item = order.items.id(itemId);

        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'Item not found'
            });
        }

        item.itemStatus = itemStatus;

        await order.save();

        res.status(200).json({
            success: true,
            message: 'Item status updated',
            data: order
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};

// ==============================
// Delete Order
// ==============================
exports.deleteOrder = async (req, res) => {

    try {

        const deletedOrder = await Order.findByIdAndDelete(req.params.id);

        if (!deletedOrder) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Order deleted successfully'
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

};