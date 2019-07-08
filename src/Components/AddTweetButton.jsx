import React from 'react';
import PropTypes from 'prop-types';

function AddTweetButton(props){
  return(
  <div>
    <button onClick={props.onNewTweetButton}>Tweeet</button>
  </div>
  );
}

AddTweetButton.propTypes = {
  onNewTweetButton: PropTypes.func
};

export default AddTweetButton;
