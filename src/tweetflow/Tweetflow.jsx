import React from "react";
import Tweet from "./Tweet";
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  tweetflow: {
    width: '33%',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  textinput: {
    width: "100%"
  }
}));


function Tweetflow() {
  const classes = useStyles();
  return (
    <div className={classes.tweetflow}>

      <TextField className={classes.textinput} type="text" placeholder="What's Happening?" />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default Tweetflow;