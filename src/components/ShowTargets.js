import React, { Component } from 'react';

class ShowTargets extends Component {
  subscribeToUpdates(evt) {
    alert("Hello!");
  }

  render() {
    return (
      <div>
        <p>Current subscriptions: </p>
        <p>Elon Musk</p>
      </div>
    );
  }
};
export default ShowTargets;