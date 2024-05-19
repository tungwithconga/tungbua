import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openForm = () => {
    this.setState({ isOpen: true }); 
  };

  closeForm = () => {
    this.setState({ isOpen: false }); 
  };

  render() {
    return (
      <div>
        {!this.state.isOpen ? (
          <button onClick={this.openForm}>Mở Form</button>
        ) : (
          <div>
            <h2>Đây là một form</h2>
            <button onClick={this.closeForm}>Đóng Form</button>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
