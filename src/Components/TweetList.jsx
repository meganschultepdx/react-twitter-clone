import React from "react";
import Tweet from "./Tweet";
import { makeStyles } from '@material-ui/core/styles';
import NewTweetForm from './NewTweetForm';
import PropTypes from 'prop-types';

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
  console.log(props.tweetList);
  return (
    <div className={classes.tweetflow}>
      {props.tweetList.map((tweet, index) =>
        <Tweet
          text={tweet.text}
          key={index} />
      )}
    </div>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
