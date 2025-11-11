import express from 'express';
import User from "../models/userModels.js";
import {verifyToken} from "../middlewares/authMiddleware.js";

const router = express.Router();

//user profile route
router.get('/profile', verifyToken, async (req, res) =>{
    try{
        const userId = await User.findById(req.user.id).select("-password");
        if(!userId)return res.status(404).json({message:"User not found"})
        
        res.status(200).json({
            message:"Welcome to your dashboard!",
            user: userId,
        });
    } catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error" })
    }
})  ;

export default router;