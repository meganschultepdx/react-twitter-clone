import React from 'react';
import PropTypes from "prop-types";
import NewTweetForm from './NewTweetForm'

class NewTweetControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleNewTweetButton = this.handleNewTweetButton.bind(this);
  }

  handleNewTweetButton(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTweetForm />;
    } else {
      currentlyVisibleContent = <AddTweetButton onNewTweetButton={this.handleNewTweetButton}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTweetControl.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetControl;
