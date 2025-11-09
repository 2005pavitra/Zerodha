import mongoose from 'mongoose';

const connectedDB = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
         console.log(`MongoDB connected `);
        
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
}

export default connectedDB;