import React from "react";
import Tweet from "./Tweet";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NewTweetForm from './NewTweetForm';

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


function TweetList(props) {
  const classes = useStyles();
  return (
    <div className={classes.tweetflow}>

      {/*}<TextField className={classes.textinput} type="text" placeholder="What's Happening?" />*/}

      {props.tweetList.map((tweet, index) =>
        <Tweet
          text={tweet.text}
          key={index} />
      )}
      <NewTweetForm/>
    </div>
  );
}

export default TweetList;
