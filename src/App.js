import './index.scss';
import React from 'react';
import { useState } from 'react';

function App() {

  const [state, setState] = React.useState(0);

  const onClickPlus = () => {
    setState(state+1)
  }

  const onClickMinus = () => {
    if (state >= 1) {
      setState(state-1)
    }

  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{state}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
