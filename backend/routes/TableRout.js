const express = require('express');
const router = express.Router();
const tableController = require('../controllers/TableController');

router.get('/getAllTables',tableController.getAllTables);
router.get('/getTableById/:id',tableController.getTableById);
router.post('/createTable',tableController.createTable);
router.put('/updateTable/:id',tableController.updateTable);
router.delete('/deleteTable/:id',tableController.deleteTable);

module.exports = router;