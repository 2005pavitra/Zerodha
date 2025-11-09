import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';
import {body, validationResult} from 'express-validator';   


const router = express.Router();

// Signup Route
router.post('/signup',
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").isLength({min:6}).withMessage("Password must be atleast 6 characters long")
    ],

    async(req, res) => {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }

            const {name, email, password} = req.body;
            const existingUser = await User.findOne({email});


            //user exists
            if(existingUser){
                return res.status(400).json({message:"User already exists!!"});
            }

            //hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            // const hash = bcrypt.hashSync("B4c0/\/", hashedPassword);  

            //create user
            const user = new User({
                name, 
                email, 
                password: hashedPassword
            })

            await user.save();

            res.status(201).json({message:"User registered succesfully"});
        } catch(error){
            console.error(error);
            res.status(500).json({message:"Server Error"});

        }
    }
    // res.send("Signup route working")
);

// Login Route
router.post('/login',
    [
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").notEmpty().withMessage("Password is required"),
    ],
    async(req,res) =>{
        try{
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }

            const {email, password} = req.body;

            //find user
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({message:"user not found"});

            }

            //compare password
            const isMatch = bcrypt.compareSync(password, user.password);
            if(!isMatch){
                return res.status(400).json({message:"wrong password"});

            }

            //generate jwt
            const token = jwt.sign(
                {userId: user._id, email: user.email},
                process.env.JWT_SECRET,
                {expiresIn: '7d'}
            );

            res.status(200).json({
                message:"Login successful",
                token,
                user:{
                    id: user._id,
                    name: user.name,
                    email:user.email,
                },
            })
        
        } catch(error){
            console.error(error);
            res.status(500).json({message:"Server Error"});
        }
    }
);

export default router;