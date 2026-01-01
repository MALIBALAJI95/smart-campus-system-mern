const Inventory = require('../models/Inventory');

// Get all inventory items
exports.getAllInventoryItems = async (req, res) => {
    try {
        const items = await Inventory.find();
        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({
            message: 'Error retrieving inventory items',
            error,
        });
    }
};

// Create a new inventory item
exports.createInventoryItem = async (req, res) => {
    const newItem = new Inventory(req.body);

    try {
        const savedItem = await newItem.save();
        return res.status(201).json(savedItem);
    } catch (error) {
        return res.status(400).json({
            message: 'Error creating inventory item',
            error,
        });
    }
};

// Update an inventory item
exports.updateInventoryItem = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedItem = await Inventory.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        return res.status(200).json(updatedItem);
    } catch (error) {
        return res.status(400).json({
            message: 'Error updating inventory item',
            error,
        });
    }
};

// Delete an inventory item
exports.deleteInventoryItem = async (req, res) => {
    const { id } = req.params;

    try {
        await Inventory.findByIdAndDelete(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting inventory item',
            error,
        });
    }
};
