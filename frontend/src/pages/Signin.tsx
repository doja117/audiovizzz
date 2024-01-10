import {z} from 'zod';
import React from 'react';
const User=z.object({
    username:z.string().email(),
    password:z.string()
})
export default function SignIn(){
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    return <>
        <input placeholder="email" onChange={(e)=>{
            setEmail(e.target.value);
        }}></input>
        <input placeholder="password" type="password" onChange={(e)=>{
            setPassword(e.target.value);
        }}></input><br />
        <button>Singin</button>
    </>
}