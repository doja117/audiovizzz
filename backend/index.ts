import bodyParser from 'body-parser';
import { origin } from 'bun';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer'
import cors from 'cors';
const app=express();
app.use(bodyParser.json());
app.use(cors({
    origin:"*"
}))

//const storage=multer.memoryStorage();
const upload=multer({dest:"~/"})

app.post('/music',upload.single('mp4'),async (req,resp)=>{
    
    await resp.send("wqpolep[we")})

app.listen(3000,()=>{
    console.log("listening")
})