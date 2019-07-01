import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  tweet: {
    margin: '10px',
    padding: '5px',
    display: 'flex',
    width: '100%',
    '& div': {
      display: 'flex',
      flexDirection: 'column'
    },
    '& h4': {
      margin: 0
    },
    '& p': {
      margin: 0
    },
  }
}));

function Tweet() {
  const classes = useStyles();
  return (
    <Card className={classes.tweet}>
      <FaceIcon fontSize='large'/>
      <div>
        <h4>Heading</h4>
        <p>text text text</p>
      </div>
    </Card>
  );
}

export default Tweet;