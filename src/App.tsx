import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxMode from "./_redux/ReduxMode";
import ContextMode from "./_context/ContextMode";

function App() {
  return (
    <div className="App">
      <ReduxMode/>

      <ContextMode/>
    </div>
  );
}

export default App;
