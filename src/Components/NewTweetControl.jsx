import React from 'react';
import PropTypes from "prop-types";
import NewTweetForm from './NewTweetForm';

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
    let display = <button onClick ={this.handleNewTweetButton}>Tweet</button>
    if (this.state.formVisibleOnPage){
      display = <NewTweetForm onNewTweetCreation={this.props.onNewTweetCreation}/>;
    }
    return(
      <div>
        {display}
      </div>
    );
  }
}

NewTweetControl.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetControl;
