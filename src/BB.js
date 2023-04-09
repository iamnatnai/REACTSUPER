import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import regression from 'regression';
const BB = () => {
    const [x,setX] = useState(0) 
    const [func,setFunc] = useState()
     const [result,setResult] = useState()
     const [data, setData] = useState([]);
     const calregres= () => {
        const result = regression.linear(data.map((d) => [d.x, d.func]));
         setResult(result);


     }
     const inputx = (valx) =>{
        setX(valx.target.value)
     }
     const inputy = (valy) =>{
        setFunc(valy.target.value)
     }
    const calcu = () =>{
        
    }
    return (
        <form>
            <input type='number' value={x} onChange={inputx}></input>
            <input type='number' value={func} onChange={inputy}></input>
            <button onClick={calregres()}>CAL</button>
        </form>
        
    )
    
}

export default BB