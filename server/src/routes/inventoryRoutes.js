const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Get all inventory items
router.get('/', inventoryController.getAllItems);

// Get a single inventory item by ID
router.get('/:id', inventoryController.getItemById);

// Create a new inventory item
router.post('/', inventoryController.createItem);

// Update an existing inventory item
router.put('/:id', inventoryController.updateItem);

// Delete an inventory item
router.delete('/:id', inventoryController.deleteItem);

// Request an inventory item
router.post('/request', inventoryController.requestItem);

module.exports = router;
