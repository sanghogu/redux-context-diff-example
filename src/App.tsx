import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxMode from "./_redux/ReduxMode";
import ContextMode from "./_context/ContextMode";
import RecoilMode from "./_recoil/RecoilMode";

function App() {
  return (
    <div className="App">
      <ReduxMode/>

      <ContextMode/>

      <RecoilMode/>
    </div>
  );
}

export default App;
