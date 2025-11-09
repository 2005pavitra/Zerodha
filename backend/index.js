import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectedDB from "./db.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectedDB();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Backend is running')
})

//auth api routes
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})