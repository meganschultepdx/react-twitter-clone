import React from 'react';
import PropTypes from 'prop-types';

function NewTweetForm(props){
  let _tweet = null;

  function handleNewTweetFormSubmission(event) {
    event.preventDefault();
    props.onNewTweetCreation({tweet: _tweet.value});
    _tweet.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTweetFormSubmission}>
        <textarea
          id='tweet'
          placeholder='@ '
          ref={(textarea) => {_tweet = textarea;}}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

NewTweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;
