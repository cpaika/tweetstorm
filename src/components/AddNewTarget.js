import React, { Component } from 'react';

class AddNewTarget extends Component {
  subscribeToUpdates(evt) {
    alert("Hello!");
  }

  render() {
    return (
  	<div>
      <div> Follow a twitter celebrity by entering their handle below: </div>
      <form>
        <input type="text" handle="@random-celebrity" />
        <input type="submit" value="Get Notified" onClick={this.subscribeToUpdates} />
      </form>
      </div>
    );
  }
};
export default AddNewTarget;