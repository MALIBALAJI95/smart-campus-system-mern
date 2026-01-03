const Maintenance = require('../models/Maintenance');

// Create a new maintenance request
exports.createMaintenanceRequest = async (req, res) => {
    try {
        const maintenanceRequest = new Maintenance(req.body);
        await maintenanceRequest.save();
        return res.status(201).json(maintenanceRequest);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Get all maintenance requests
exports.getAllMaintenanceRequests = async (req, res) => {
    try {
        const requests = await Maintenance.find();
        return res.status(200).json(requests);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Update a maintenance request
exports.updateMaintenanceRequest = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedRequest = await Maintenance.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(updatedRequest);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Delete a maintenance request
exports.deleteMaintenanceRequest = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRequest = await Maintenance.findByIdAndDelete(id);

        if (!deletedRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
