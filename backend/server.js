import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import adminRouter from './routes/admin.route.js';

const app = express()

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRouter);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));