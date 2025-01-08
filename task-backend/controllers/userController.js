import { User } from "../models/user.js";
import bcrypt from 'bcrypt'

//Register user
export const registerUser = async(req,res) => {
    try{
        const {username, email, password} = req.body;

        const existingUser = await User.findOne({username});
        if(existingUser) {
            return res.status(400).json({
                message: "Username already exists"
            });
        }

        //password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        //registration message
        res.status(201).json({message:"User registered successfully"});
    }catch (error) {
        res.status(500).json({ message: "Error registering user", error });
      }
}