// import React, { useEffect, useState } from 'react';
// import InventoryList from '../components/inventory/InventoryList';
// import RequestForm from '../components/inventory/RequestForm';
// import { fetchInventoryItems } from '../utils/api';

// const Inventory = () => {
//     const [inventoryItems, setInventoryItems] = useState([]);

//     useEffect(() => {
//         const getInventoryItems = async () => {
//             const items = await fetchInventoryItems();
//             setInventoryItems(items);
//         };

//         getInventoryItems();
//     }, []);

//     return (
//         <div>
//             <h1>Inventory Management</h1>
//             <RequestForm />
//             <InventoryList items={inventoryItems} />
//         </div>
//     );
// };

// export default Inventory;
import React, { useState } from 'react';
import InventoryList from '../components/inventory/InventoryList';
import RequestForm from '../components/inventory/RequestForm';

const Inventory = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    // Comment out backend call for now
    /*
    useEffect(() => {
        const getInventoryItems = async () => {
            const items = await fetchInventoryItems();
            setInventoryItems(items);
        };

        getInventoryItems();
    }, []);
    */

    return (
        <div>
            <h1>Inventory Management</h1>
            <RequestForm />
            <InventoryList items={inventoryItems} />
        </div>
    );
};

export default Inventory;