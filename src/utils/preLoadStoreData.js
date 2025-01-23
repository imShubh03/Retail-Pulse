import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Store from '../models/store.model.js';

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const preLoadStoreData = async () => {
    try {
        // Define the path to the CSV file
        const csvFilePath = path.join(__dirname, '../../data/StoreMaster.csv');

        // Read the CSV file content
        const data = fs.readFileSync(csvFilePath, 'utf-8');
        //console.log('Raw CSV Data:', data); // Log raw CSV content

        // Split the content into rows
        const rows = data.split(/\r?\n/); // Handle both \n and \r\n line endings
        //console.log('Split Rows:', rows); // Log split rows

        // Skip the header row and map rows into structured data
        const stores = rows
            .slice(1) // Skip header row
            .filter((row) => row.trim() !== '') // Exclude empty rows
            .map((row) => {
                // Use comma as delimiter (CSV)
                const columns = row.split(','); 
                //console.log('Columns:', columns); // Log columns for each row

                // Ensure all required columns exist
                if (columns.length < 3) {
                    //console.log('Skipping Invalid Row:', row); // Log invalid rows
                    return null; // Skip invalid rows
                }

                // Extract and trim values
                const [area_code, store_name, store_id] = columns.map((col) => col.trim());
                return { area_code, store_name, store_id };
            })
            .filter((store) => store !== null); // Exclude null rows

        //console.log('Stores to Process:', stores); // Log final structured data

        // Insert stores into MongoDB
        for (const store of stores) {
            const exists = await Store.findOne({ store_id: store.store_id });
            if (!exists) {
                await Store.create(store);
                //console.log('Inserted Store:', store); // Log each inserted store
            } else {
                //console.log('Store Already Exists:', store); // Log duplicates
            }
        }

        console.log('Store data successfully loaded.');
    } catch (err) {
        console.error('Error loading store data:', err);
    }
};
