import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req,res)=>{
 try{

 const {username,fullname,email,password,phonenumber} = req.body;

 console.log(req.body);   // ADD THIS

 const existingUser = await User.findOne({email});

 if(existingUser){
 return res.status(400).json({message:"User already exists"});
 }

 const hashedPassword = await bcrypt.hash(password,10);

 const user = new User({
 username,
 fullname,
 email,
 password:hashedPassword,
 phonenumber
 });

 await user.save();

 res.status(201).json({message:"User registered successfully"});

 }catch(err){
 console.log("REGISTER ERROR:",err);   // ADD THIS
 res.status(500).json({message:"Server error"});
 }
};
export const login = async (req,res)=>{
 try{

 const {email,password} = req.body;

 const user = await User.findOne({email});

 if(!user){
 return res.status(400).json({message:"User not found"});
 }

 const isMatch = await bcrypt.compare(password,user.password);

 if(!isMatch){
 return res.status(400).json({message:"Invalid password"});
 }

 const token = jwt.sign(
 {id:user._id},
 process.env.JWT_SECRET,
 {expiresIn:"1d"}
 );

 res.json({
 token,
 user:{
 id:user._id,
 username:user.username,
 email:user.email
 }
 });

 }catch(err){
 res.status(500).json(err);
 }
};