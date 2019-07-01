import React from "react";
import Tweet from "./Tweet";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  tweetflow: {
    width: '300px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'min-content',    
    padding: '10px',
    margin: '0 10px'
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
      <Tweet 
      heading="Heading"
      text="lorem ipsum"/>
      <Tweet 
      heading="Heading2"
      text="lorem ipsum"/>
      
      <Tweet 
      heading="Heading3"
      text="lorem ipsum"/>
      
    </div>
  );
}

export default Tweetflow;