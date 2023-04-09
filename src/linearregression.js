import React, { useState } from 'react';
import regression from 'regression';

function LRG() {
  const [data, setData] = useState([]);
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [result, setResult] = useState(null);

  const handleDataSubmit = (e) => {
    e.preventDefault();
    setData([...data, { x, y }]);
    setY(0);
    setX(0);
  };

  const handleRegressionClick = () => {
    const result = regression.linear(data.map((d) => [d.x, d.y]));
    setResult(result);
  };

  return (
    <div>
      <h1>Linear Regression App</h1>
      <form onSubmit={handleDataSubmit}>
        <label>
          Y:
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
        </label>
        <label>
          X:
          <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        </label>
        <button type="submit">Add Data Point</button>
      </form>
      <ul>
        {data.map((d, i) => (
          <li key={i}>
            x: {d.x}, y: {d.y}
          </li>
        ))}
      </ul>
      <button onClick={handleRegressionClick}>Perform Regression</button>
      {result && (
        <div>
          <p>Regression Equation: y = {result.equation[0].toFixed(2)}x + {result.equation[1].toFixed(2)}</p>
          <p>R-squared: {result.r2.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default LRG;
