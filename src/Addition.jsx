import React, { useRef, useState } from 'react'
import './Addition.css';

function Addition() {

    const num1Ref = useRef();
    const num2Ref = useRef();
    const redsultRef = useRef();

    const [result, setResult] = useState(null);

    const addLogics = (e) => {
        e.preventDefault();

        let num1 = num1Ref.current.value;
        let num2 = num2Ref.current.value;
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);

        let sum = n1 + n2;
        //set the result to the text box
        redsultRef.current.value = sum;

        //Reset the fields
        num1Ref.current.value = "";
        num2Ref.current.value = "";
        
    }

  return (
    <>
    <div className="addition-container">

    <form onSubmit={addLogics} className="addition-form">
        <input type="number" ref={num1Ref} placeholder="Enter first number" />
        <input type="number" ref={num2Ref} placeholder="Enter second number" />
        <button type="submit">Add</button>
        <input type="number" ref={redsultRef} placeholder="Result" />
    </form>

    {result !== null && (
        <p className="result">Result: {result}</p>
    )}

    

    
    </div>
    </>
  )
}

export default Addition;