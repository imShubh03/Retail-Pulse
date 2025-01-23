import mongoose from "mongoose";


const storeSchema = new mongoose.Schema({
    store_id: { 
        type: String, 
        required: true, 
        unique: true 
    },
    store_name: { 
        type: String, 
        required: true 
    },
    area_code: { 
        type: String, 
        required: true
    },
});

const Store = mongoose.model('Store', storeSchema);

export default Store;
