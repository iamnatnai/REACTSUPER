import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import LINEDD from './line';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Falsep =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueXm(data.map((x)=>x.Xm));
        setValueXr(data.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">XM</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xm}</td>
                                <td>{element.Xr}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var xi,fXl,fXr,ea,scope,fXi,xi,xstring;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            scope = {
                x:xl,
            }
            fXl = evaluate(Equation, scope)

            scope = {
                x:xr,
            }
            fXr = evaluate(Equation,scope)

            xi = ((xl*fXr)-(xr*fXl))/(fXr-fXl);
            scope = {
                x:xi,
            }
            fXi = evaluate(Equation, scope)

            iter ++;
            let xstring = "X"+iter;
            if (fXi*fXr > 0)
            {
                ea = error(xr, xi);
                obj = {
                    iteration:iter,
                    Xn:xstring,
                    Xi:xi,
                    Xl:xl,
                    Xr:xr
                }
                data.push(obj)
                xr = xi;
            }
            else if (fXi*fXr < 0)
            {
                ea = error(xl, xi);
                obj = {
                    iteration:iter,
                    Xn:xstring,
                    Xi:xi,
                    Xl:xl,
                    Xr:xr
                }
                data.push(obj)
                xl = xi;
            }
        }while(ea>e && iter<MAX)
        setX(xi)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
     
      const dataA = {
        labels : valueXm.map((x, index) => index ) ,
        datasets: [
          {
            label: 'XM',
            data: valueXm ,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'XR',
            data: valueXr,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'XL',
            data: valueXl,
            borderColor: 'rgb(186, 0, 244)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
   
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum,xrnum);
     
        setHtml(print());
           
        console.log(valueIter)
        console.log(valueXl)
    }

    return (
            <Container>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="dark" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5>Answer = {X.toPrecision(7)}</h5>
                <Container width = '5 px'>
                {html}
                <div style={{
display: "inline-block",
position: "relative",
width: "50%" } } >
                <Line options={options} data={dataA} />
                </div>
                </Container>
               
            </Container>
           
    )
}


  export default Falsep