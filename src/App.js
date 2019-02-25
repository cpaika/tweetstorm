import React, { Component } from 'react';
import logo from './logo.svg';
import ShowTarget from './components/ShowTargets'
import AddNewTarget from './components/AddNewTarget'
import Profile from './components/Profile'
import './App.css';

// Note - I'm primarily a backend engineer.  Please don't judge my Javascript :D
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <p>
            Submit the twitter handle of your favorite twitter personality to get notified when they are active on twitter!
          </p>
        <AddNewTarget></AddNewTarget>
        <ShowTarget></ShowTarget>
        </header>
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
