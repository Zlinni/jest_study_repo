import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
const url = 'https://randomuser.me/api';

function App() {
  const [fullName,setFullName] = useState('')
  const [loading,setLoading] = useState(false);
  if(process.env.NODE_ENV === 'development'){
    const {worker} = require('./mock/browser');
    worker.start();
  }
  useEffect(()=>{
    setLoading(true);
    axios.get(url).then(({data})=>{
      const {first,last} = data.results[0].name;
      setFullName(`${first} ${last}`);
      setLoading(false)
    })
  },[]); 
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <input type="text" placeholder={"Type your name"} value={fullName} onChange={(e)=>setFullName(e.target.value)}></input>
      {/* 要用span包起来 */}
      <p>my name is <span data-testid="full-name">{fullName}</span></p>
    </div>
  );
}

export default App;
