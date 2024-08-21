import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxMode from "./_redux/ReduxMode";
import ContextMode from "./_context/ContextMode";
import RecoilMode from "./_recoil/RecoilMode";
import JotaiMode from "./_jotai/JotaiMode";
import ZustandMode from "./_zustand/ZustandMode";

function App() {
  return (
    <div className="App">
      <ReduxMode/>

      <ContextMode/>

      <RecoilMode/>

      <JotaiMode/>

      <ZustandMode/>
    </div>
  );
}

export default App;
