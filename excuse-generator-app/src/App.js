import {useState} from 'react';
import './App.css';

function App() {


   const [message,setMessage]=useState(null);

   function fetchExcuse(Excuse){
    async function fetchdata(){
      const data= await fetch(`https://excuser-three.vercel.app/v1/excuse/${Excuse}/`);
      const response=await data.json();
      const [{excuse}]=response;
      setMessage(excuse);
      console.log(message);

    }
    fetchdata();

  }
  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <div className='btn-container'>
      <button className='button-party' onClick={()=>{
        fetchExcuse("party")
      }}>Party</button>
      <button className='button-family' onClick={()=>{
        fetchExcuse("family")
      }}>Familty</button>
      <button className='button-office' onClick={()=>{
        fetchExcuse("office")
      }}>Office</button>
      </div>
      {message && <h3>{message}</h3>}
      
    </div>
  );
}

export default App;
