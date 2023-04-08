import { MantineProvider } from '@mantine/core';
import './App.css';
import Bisect from './Bisection';
import FalsePosition from './falseposition';
import Home from './home';
import LINEDD from './line';
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  function newpg() {

  }
  return (
    <div className='test'>
    <li><a href="/bisection" class="button">Bisection</a></li>
    <li><a href="/falseposition" class="button">False-position</a></li>
      <BrowserRouter>
        <Routes>
          <Route path="/bisection" element={<Bisect />} />
          <Route path="/falseposition" element={<FalsePosition/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
