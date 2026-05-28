const express = require('express');

const router = express.Router();

const menuController = require('../controllers/MenuController');

router.get(
    '/getAllMenuItems',
    menuController.getAllMenuItems
);

router.get(
    '/getSingleMenuItem/:id',
    menuController.getSingleMenuItem
);

router.post(
    '/createMenuItem',
    menuController.upload.single('image'),
    menuController.createMenuItem
);

router.put(
    '/updateMenuItem/:id',
    menuController.upload.single('image'),
    menuController.updateMenuItem
);

router.delete(
    '/deleteMenuItem/:id',
    menuController.deleteMenuItem
);

router.put(
    '/toggleAvailability/:id',
    menuController.toggleAvailability
);

module.exports = router;