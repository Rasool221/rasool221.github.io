import logo from './logo.svg';
import './App.css';

import ViewSwitch from './ViewSwitch.js'
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="header">Psychology Creative Project by Rasool Abbas</h2>
        <br />
        <ViewSwitch/>
      </header>
    </div>
  );
}

export default App;
