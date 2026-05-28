const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const MenuItem = require('../model/MenuItem');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, 'uploads/');

    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() + path.extname(file.originalname)
        );

    }

});

const upload = multer({ storage: storage });

exports.getAllMenuItems = async (req, res) => {
    try {

        const menuItems = await MenuItem.find();

        res.status(200).json(menuItems);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
}

exports.getSingleMenuItem = async (req, res) => {
    try {

        const menuItem = await MenuItem.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json(menuItem);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
}

exports.createMenuItem = async (req, res) => {
    try {

        const {
            name,
            category,
            price,
            available
        } = req.body;

        let image = '';

        if (req.file) {
            image = req.file.filename;
        }

        const menuItem = await MenuItem.create({

            name,
            category,
            price,
            available,
            image

        });

        res.status(201).json(menuItem);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
}

exports.updateMenuItem = async (req, res) => {
    try {

        const {
            name,
            category,
            price,
            available
        } = req.body;

        const updateData = {
            name,
            category,
            price,
            available
        };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        const menuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json(menuItem);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
}

exports.deleteMenuItem = async (req, res) => {
    try {

        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json({ message: 'Menu item deleted successfully' });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
}

exports.toggleAvailability = async (req, res) => {
    try {

        const menuItem = await MenuItem.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        menuItem.available = !menuItem.available;

        await menuItem.save();

        res.status(200).json(menuItem);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
}

module.exports = {
    upload,
    getAllMenuItems: exports.getAllMenuItems,
    getSingleMenuItem: exports.getSingleMenuItem,
    createMenuItem: exports.createMenuItem,
    updateMenuItem: exports.updateMenuItem,
    deleteMenuItem: exports.deleteMenuItem,
    toggleAvailability: exports.toggleAvailability
};