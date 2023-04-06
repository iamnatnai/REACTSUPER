import { MantineProvider } from '@mantine/core';
import './App.css';
import Bisect from './Bisection';
import Falsep from './falseposition';
import Home from './home';
import LINEDD from './line';
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  function newpg() {

  }
  return (
    <div className='test'>
      <a href="/bisection" class="button">Bisection</a>
      <a href="/falseposition" class="button">False-position</a>
      <BrowserRouter>
        <Routes>
          <Route path="/bisection" element={<Bisect />} />
          <Route path="/falseposition" element={<Falsep/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
