import React, { Component } from 'react';

class DisplayMessage extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.message !== this.props.message;
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

export default DisplayMessage;
