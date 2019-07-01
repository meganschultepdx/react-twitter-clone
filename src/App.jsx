import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Tweetflow from './tweetflow/Tweetflow';
import Profile from './profile/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Profilesummary from './profilesummary/Profilesummary';


const useStyles = makeStyles(theme => ({
  container: {
    // width: '33%',
    border: '1px solid black',
    display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
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
      <div>
      <Profile/>
      <Profilesummary/>
      </div>
      <Tweetflow/>
      </div>
    </div>
  );
}

export default App;
