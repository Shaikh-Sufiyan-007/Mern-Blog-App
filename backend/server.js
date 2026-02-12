import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import adminRouter from './routes/admin.route.js';
import blogRouter from './routes/blog.route.js';

const app = express()

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));