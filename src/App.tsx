import React from 'react';
import logo from './logo.svg';
import './App.css';

import SwapView from './components/SwapView'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2>Uniswap</h2>

        <SwapView />

      </header>
    </div>
  );
}

export default App;
