import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TweetList from './Components/TweetList';
import Profile from './Components/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Profilesummary from './Components/Profilesummary';
import Friends from './Components/Friends';
import NewTweetControl from './Components/NewTweetControl';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: [{tweet: "hi"}]
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    console.log(newTweet)
    let newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    console.log(newMasterTweetList)
    this.setState({masterTweetList: newMasterTweetList, test: "test"});
    console.log(this.state)
  }

  render () {


    const useStyles = makeStyles(theme => ({
      container: {
        // width: '33%',
        // border: '1px solid black',
        minHeight: 'calc(100vh - 84px)',
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        maxWidth: '996px',
        margin: '0 auto',
        justifyContent: 'space-between',
        padding: '10px',

    // eslint-disable-next-line
        ['@media (max-width:780px)']: {
          flexDirection: 'column',
          alignItems: 'center',
          // '& div': {
          //   // padding: '10px',
          //   // margin: '10px'
          // }
        }


      },
      profileContainer: {
        margin: '0px!important',
        padding: '0px!important'
      },
    }));


    return (
    <div>
      <header className="App-header">
      </header>
      <Navbar />
      <div className={useStyles.container}>
      <div className={useStyles.profileContainer}>
          <Profile />
          <Profilesummary />
        </div>
        <NewTweetControl onNewTweetCreation={this.handleAddingNewTweetToList} />
        <TweetList masterTweetList={this.state.masterTweetList}/>

        {/*}<Route path='/' render={()=><TweetList tweetList={this.state.masterTweetList} /> } />
      <Route path='/' render={()=><NewTweetControl onNewTweetCreation={this.handleAddingNewTweetToList} />} />*/}

        <Friends />
      </div>
    </div>
  );
  }
}

export default App;
