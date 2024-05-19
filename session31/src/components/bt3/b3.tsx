import React, { Component } from 'react';

class TextChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "RikkeiAcademy"
    };
  }
  changeText = () => {
    this.setState({ text: "Rikkeisoft" }); 
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.changeText}>Change Text</button>
      </div>
    );
  }
}

export default TextChanger;
