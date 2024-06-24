import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./App.css";
function App() {
  const [value,setValue]=useState(0);
  return (
    <>
    <div className="container" style={{textAlign:"center"}}>
    <h1>{value}</h1>
    

    <Button className="btn" variant="success" onClick={()=>{
      
      setValue(value+1>20?20:value+1);
    }}>Increase</Button>
  
  <Button className="btn"  variant="danger" onClick={()=>{
      setValue(value-1<0?0:value-1);
    }}>Decrease</Button>
   <Button className="btn"  variant="secondary" onClick={()=>{
      setValue(0);
    }}>set to zero</Button>
      </div>
    </>
  )
}





export default App
