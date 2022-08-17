import logo from './logo.svg';
import './App.css';
import First from './components/First';
import WebsocketEx from './components/WebsocketClient';
import ReactWebsocketEx from './components/ReactWebsocketEx';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <First />
      <WebsocketEx />
      <ReactWebsocketEx />
    </React.Fragment>
  );
}

export default App;
