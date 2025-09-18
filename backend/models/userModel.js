import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    address: {
        type: String,

    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    }

})

const userModel = mongoose.model("users", userSchema);

export default userModel;