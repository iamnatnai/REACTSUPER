import React, { useEffect } from 'react'
import { useState } from 'react';
import {Form,Button,Col, Row} from 'react-bootstrap';
import SimpleLinearRegression from 'ml-regression-simple-linear';

function Test112() {
    const [nnumber,setNnumber] = useState(0)
    const [table,setTable] = useState([])
    const [notable,setNotable] = useState(0)
    const [y,setY] = useState(0)
    const [tablevalue,setTablevalue] = useState([]);
    const [xprodict,setXpredict] = useState(0);

    const Getn =(e)=>{
        console.log(e.target.value)
        setNnumber(e.target.value)
    }
    useEffect(()=>{
        var tmparray = []
        for(let i = 0 ; i < nnumber ; i++){
            tmparray.push([0])
        }
        setTablevalue(tmparray)
    },[nnumber])

    const Getx =(e)=>{
        console.log(e.target.value)
        setXpredict(Number(e.target.value))
    }
    const calculate = () =>{
        const tmpcalculate = tablevalue;
        console.log("calcu",tmpcalculate)
        var x = []
        var y = []
        for(let i = 0 ; i < nnumber ; i++){
            x.push(tmpcalculate[i][0])
            y.push(tmpcalculate[i][1])
        }
        console.log("x =",x)
        console.log("y =",y)
        
        // const x = [0.5, 1, 1.5, 2, 2.5];
        // const y = [0, 1, 2, 3, 4];
        const regression = new SimpleLinearRegression(x, y);
        const tmp = regression.predict(xprodict);
        console.log(regression)
        console.log(tmp)
        setY(tmp)
    }

    const setvalue =(e,i,j) =>{
        console.log(`table[${i}][${j}] = ${e.target.value}`)
        var tmp = tablevalue
        tmp[i][j] = Number(e.target.value) ;
        setTablevalue(tmp)
    }

    const createtable =() =>{
        setNotable(1)
        const cols = [];
        for(let i = 0 ; i < nnumber ; i ++){
            cols.push(<Row>
                <Col className="d-flex justify-content-center align-items-center" >
                    <Form.Control type="number" onChange={(e)=>{setvalue(e,i,0)}}></Form.Control>
                    <Form.Control type="number" onChange={(e)=>{setvalue(e,i,1)}}></Form.Control>
                    </Col>
                </Row>)
        }
        setTable(cols)
    }
  return (
    <div>
        <Form>
            <Form.Label>input N</Form.Label>
            <Form.Control size="lg" type="number" placeholder="N" onChange={Getn}/>
        </Form>
        <Form>
            <Form.Label>input X</Form.Label>
            <Form.Control size="lg" type="number" placeholder="X" onChange={Getx}/>
        </Form>
        <Button variant="dark" onClick={createtable}>createtable</Button>
        {table}
        { notable > 0 && 
        <div>
            <Col><Button variant="dark" onClick={calculate}>submit</Button></Col>
            <br></br>
            <Col><h2>{y}</h2></Col>
        </div>
        }
        
    </div>
  )
}

export default Test112