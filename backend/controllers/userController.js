import userModel from "../models/userModel.js";
import { registerEmail } from "../utils/emailService.js";


export const registerUser = async (req, res) =>{
    let {userName, email, gender, address, phoneNumber} = req.body;

    try{
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }
        const user = await userModel.create({
            userName,
            email,
            gender,
            address,
            phoneNumber
        });
        await registerEmail(email, userName, phoneNumber, gender);
        res.status(200).json({message: "User registered successfully", user})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}