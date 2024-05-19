import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Học code để đi làm"
    };
  }

  changeMessage = () => {
    this.setState({ message: "Học code sẽ thành công. Cố lên!!!" }); 
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.message !== this.state.message; 
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Thay Đổi</button>
      </div>
    );
  }
}
export default Message;
