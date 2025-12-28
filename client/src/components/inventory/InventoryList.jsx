import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const InventoryList = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    const fetchInventoryItems = useCallback(async () => {
        try {
            const response = await axios.get('/api/inventory');
            setInventoryItems(response.data);
        } catch (error) {
            console.error('Error fetching inventory items:', error);
        }
    }, []);

    useEffect(() => {
        fetchInventoryItems();
    }, [fetchInventoryItems]);

    return (
        <div>
            <h2>Inventory List</h2>

            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.available ? 'Available' : 'Not Available'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryList;
