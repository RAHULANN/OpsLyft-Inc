import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Component/navbar"

import { useState } from 'react';
import { Grafical } from './Component/Grafical';
import { Tabuler } from './Component/Tabuler';
function App() {
  const[st,setSt]=useState(true)
  return (
    <div className="App">
     <Navbar/>
     <div id='buttdiv'> 
     <div onClick={()=>{setSt(true)}}>view in chart</div>
     <div onClick={()=>{setSt(false)}}>view in table</div>
     </div>
     {
      st? <Grafical/>: <Tabuler/>
     }
    
    
    </div>
  );
}

export default App;
