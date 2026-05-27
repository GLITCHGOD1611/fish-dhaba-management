const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/getAllUsers', UserController.getAllusers);
router.get('/users/:id', UserController.getUserById);
router.post('/createUser', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;