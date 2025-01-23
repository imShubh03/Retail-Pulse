import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './src/utils/db.js';
import { preLoadStoreData } from './src/utils/preLoadStoreData.js';
import jobRoutes from './src/routes/job.route.js'
import statusRoutes from './src/routes/status.route.js'


const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// Connect to the database
connectDB();

//preload the store data
(
    async () => {
        await preLoadStoreData();
    }
)();

app.get('/', (req, res) => {
    res.send("hello world");
})

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/submit', jobRoutes);
app.use('/api/status', statusRoutes);

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

