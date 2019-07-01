import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Tweetflow from './tweetflow/Tweetflow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar/>
      <Tweetflow/>
    </div>
  );
}

export default App;
