import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

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

// Login User
export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Generate token
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  
      res.status(200).json({ message: "Login successful", token });
      
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error });
    }
  };