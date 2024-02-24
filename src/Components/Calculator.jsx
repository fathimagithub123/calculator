
import React, { useState } from 'react'

function Calculator() {
  const [Display,setDisplay] = useState('')

  const handle= (content)=>{
    setDisplay(Display+content.target.innerHTML)
   }

   const clear = ()=>{
    setDisplay("")
   }
   const delt =()=>{
    setDisplay(Display.slice(0,-1))
   }

   const output = ()=>{
    try{
      setDisplay(eval(Display))

    }catch(err){
      setDisplay("Error")

    }
   }

  return (
    <>
    <div style={{width:'100%',height:'100vh'}} className='container d-flex justify-content-center align-items-center'>
        <div  className='text-box bg-black p-5 rounded'>
         
            <input type="text" placeholder='0' id='result' value={Display} readOnly   />

            <div className='box p-3'>
               
              
                <button onClick={clear}>AC</button>
                <button onClick={delt}>DEL</button>
                <button style={{backgroundColor:'orange'}} onClick={handle}>%</button>
                <button style={{backgroundColor:'orange'}} onClick={handle}>/</button>
                <button onClick={handle}>7</button>
                <button onClick={handle}>8</button>
                <button onClick={handle}>9</button>
                <button style={{backgroundColor:'orange'}} onClick={handle}>*</button>
                <button onClick={handle}>4</button>
                <button onClick={handle}>5</button>
                <button onClick={handle}>6</button>
                <button style={{backgroundColor:'orange'}} onClick={handle}>-</button>
                <button onClick={handle}>1</button>
                <button onClick={handle}>2</button>
                <button onClick={handle}>3</button>
                <button style={{backgroundColor:'orange'}} onClick={handle}>+</button>
                <button onClick={handle}>0</button>
                <button onClick={handle}>.</button>
                <button style={{backgroundColor:'orange'}} onClick={output}>=</button>
              
              
            </div>
          
        </div>
    </div>

    </>
  )
}

export default Calculator