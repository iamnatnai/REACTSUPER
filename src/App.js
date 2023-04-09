import { MantineProvider } from '@mantine/core';
import './App.css';
import Bisect from './Bisection';
import FalsePosition from './falseposition';
import LRG from './linearregression';
import Home from './home';
import LINEDD from './line';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BB from './BB';
function App() {
  function newpg() {

  }
  return (
    <div className='test'>
    {/* <li><a href="/bisection" class="button">Bisection</a></li>
    <li><a href="/falseposition" class="button">False-position</a></li>
    <li><a href="/linearregression" class="button">Linear Regression</a></li>
      <BrowserRouter>
        <Routes>
          <Route path="/bisection" element={<Bisect />} />
          <Route path="/falseposition" element={<FalsePosition/>} />
          <Route path="/linearregression" element={<LRG/>} />
        </Routes>
      </BrowserRouter> */}
      <BB />

    </div>
  );
}


export default App;
