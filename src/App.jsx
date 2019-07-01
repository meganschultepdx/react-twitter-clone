import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Tweetflow from './tweetflow/Tweetflow';
import Profile from './profile/Profile';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    // width: '33%',
    border: '1px solid black',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <header className="App-header">
      </header>
      <Navbar/>
      <div className={classes.container}>
      <Profile/>
      <Tweetflow/>
      </div>
    </div>
  );
}

export default App;
