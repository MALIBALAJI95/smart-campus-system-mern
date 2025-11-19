const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

// Route to create a new maintenance request
router.post('/', maintenanceController.createMaintenanceRequest);

// Route to get all maintenance requests
router.get('/', maintenanceController.getAllMaintenanceRequests);

// Route to update a maintenance request by ID
router.put('/:id', maintenanceController.updateMaintenanceRequest);

// Route to delete a maintenance request by ID
router.delete('/:id', maintenanceController.deleteMaintenanceRequest);

// Route to get a maintenance request by ID
router.get('/:id', maintenanceController.getMaintenanceRequestById);

module.exports = router;