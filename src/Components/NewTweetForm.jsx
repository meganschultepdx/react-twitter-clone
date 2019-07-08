import React from 'react';

function NewTweetForm(){
  let _tweet = null;

  function handleNewTweetFormSubmission(event) {
    console.log(_tweet.value);
    event.preventDefault();
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

export default NewTweetForm;
