import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {

  render() {
    return (
      <div className="Top-corner">
        <img src="https://avatars0.githubusercontent.com/u/4513028?s=460&v=4" height='50' width='50'></img>
        <p>Chris Paika</p>
        <p>paika.christopher@gmail.com</p>
      </div>
    );
  }
};
export default Profile;