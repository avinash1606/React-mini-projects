import { useState } from 'react'
import './App.css'
import AgePrediction from './AgePrediction.jsx';


function App() {
  const [name, setName] = useState("");
  const [ageData,setAgeData]=useState(null);

  const predictAge=()=>{
    async function predict(){
      const data=await fetch(`https://api.agify.io/?name=${name}`);
      const response=await data.json();
      console.log(response);
      setAgeData(response);
      setName("");

    }
    predict();
  }

  return (
    <>
     <input type="text" placeholder='Enter your Name' value={name} onChange={(e)=>{
      setName(e.target.value);
     }} />
     <button onClick={predictAge} >Predict Age</button>
     {ageData!==null && <AgePrediction ageData={ageData} />}


    </>
  )
}

export default App
