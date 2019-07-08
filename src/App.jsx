import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TweetList from './Components/TweetList';
import Profile from './Components/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Profilesummary from './Components/Profilesummary';
import Friends from './Components/Friends';
import NewTweetControl from './Components/NewTweetControl';
import { Switch, Route } from 'react-router-dom';

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

class App extends React.Component() {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    let newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  render () {
  const classes = useStyles();
    return (
    <div>
      <header className="App-header">
      </header>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.profileContainer}>
          <Profile />
          <Profilesummary />
        </div>
        <Switch>
        <Route exact path='/' component={TweetList} />
        <Route path='/TweetList' component={NewTweetControl} />
        <Route path='/newTweet' render={()=><NewTweetControl onNewTweetCreation={this.handleAddingNewTweetToList} />} />
        </Switch>
        <TweetList />
        <Friends />
      </div>
    </div>
  );
  }
}

export default App;
