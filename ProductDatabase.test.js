import {ProductDatabase} from './ProductDatabase.js'

// Create an instance of the ProductDatabase
const database = new ProductDatabase();

// Add a product
database.add({ id: 1, name: 'Product 1' });

// Find products by a specific key-value pair
const foundProducts = database.findBy('name', 'Product 1');
console.log(foundProducts); // Output: [{ id: 1, name: 'Product 1' }]

// Remove a product
database.remove({ id: 1, name: 'Product 1' });

// Save changes to localStorage
database.save();

// Export product data
const exportedData = database.export();
console.log(exportedData); // Output: []
