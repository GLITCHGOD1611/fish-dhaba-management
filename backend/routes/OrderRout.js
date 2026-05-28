const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.get('/getAllOrders', OrderController.getAllOrders);
router.get('/getSingleOrder/:id', OrderController.getSingleOrder);
router.post('/createOrder', OrderController.createOrder);
router.put('/updateOrderStatus/:id', OrderController.updateOrderStatus);
router.put('/updatePaymentStatus/:id', OrderController.updatePaymentStatus);
router.put('/updateItemStatus/:orderId/:itemId', OrderController.updateItemStatus);
router.delete('/deleteOrder/:id', OrderController.deleteOrder);

module.exports = router;