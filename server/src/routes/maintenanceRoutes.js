const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

// Create a new maintenance request
router.post('/', maintenanceController.createMaintenanceRequest);

// Get all maintenance requests
router.get('/', maintenanceController.getAllMaintenanceRequests);

// Get a maintenance request by ID
router.get('/:id', maintenanceController.getMaintenanceRequestById);

// Update a maintenance request by ID
router.put('/:id', maintenanceController.updateMaintenanceRequest);

// Delete a maintenance request by ID
router.delete('/:id', maintenanceController.deleteMaintenanceRequest);

module.exports = router;
