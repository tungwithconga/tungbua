import React, { Component } from 'react'
interface Props{

}
interface State{
    name: string,
    age: number,
}

export default class Class extends Component<PaymentResponse,State> {
    constructor(props:Props){
        super(props);
        this.state = {
            name:"minh thu",
            age:25,
        }
    }
  componentDidMount(){
  render() {
    return (
      <div>Class
        Trong class de quan ly state
        {this.state.name} năm nay {this.state.age} tuổi
      </div>
    )
  }
}
