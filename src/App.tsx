import React, { useEffect, useState } from 'react';
import './App.css';

let data:string[] = require('./data/data.json');

let values:number [] = [];

for (var i = 1; i <= data.length; i++) {
  values.push(i);
}

function App() {

  const [curr, setCurr] = useState(0);

  let handleCurrChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    if(e)
    {
      setCurr(Number(e.target.value));
      localStorage.setItem('curr', e.target.value);
    }
  }

  let prevFact = () => {
    setCurr(curr-1);
    localStorage.setItem('curr', (curr-1).toString());
  }

  let nextFact = () => {
    setCurr(curr+1);
    localStorage.setItem('curr', (curr+1).toString());
  }

  useEffect(() => {
    try
    {
      const storedCurr:number = Number(localStorage.getItem('curr'));
      if (storedCurr) {
       setCurr(storedCurr);
      }
    }
    catch(e)
    {
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button className="cute-button" onClick={prevFact} disabled={curr===0}>Previous Fact</button>
          Fact number
          <select className='select-space' value ={curr} onChange={handleCurrChange}>
            {values.map((value) => <option value={value-1}>{value}</option>)}
          </select>:
          <button className="cute-button" onClick={nextFact} disabled={curr===data.length-1}>Next Fact</button>
        </p>
        <p>
          {data[curr]}
        </p>
      </header>
    </div>
  );
}

export default App;
