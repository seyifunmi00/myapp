import Add from "./components/add";
import  { useEffect, useState } from'react';

function App() {

  const [advice, setAdvice]= useState("");
  const [number, setNumber] = useState(0);

    async function getAdvice() {
     const res = await fetch("https://api.adviceslip.com/advice");
     const data =  await res.json();
     setAdvice(data.slip.advice);
     setNumber((number) + 1);
    }
   
    useEffect(function () {
      setAdvice();
    }, []);
    return (
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You have read <strong>{number}</strong> advices</p>
      </div>
    );
  
  
}

export default App;
