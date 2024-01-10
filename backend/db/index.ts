import mongoose, { Mongoose } from "mongoose";

const userSchema=new mongoose.Schema({
    username:{type:String},
    password:String
})

const User=new mongoose.Model('User', userSchema);


module.exports={
    User
}