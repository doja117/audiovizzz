import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  
  const [file,setFile]=useState();
  return (
    <>
      <input type="file" onChange={(e)=>{
        let files=e.target.files;
        setFile(files);
      }}></input><br />
      <button type='submit' onClick={async ()=>{
          await axios.post('http://localhost:3000/music',file);
      }}>Upload</button>
    </>
  )
}

export default App
