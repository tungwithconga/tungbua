import React, { Component } from 'react'
interface Props(){
}
interface State{
    count:number;
}
export default class ClassComponents extends Component {
    constructor(props: Props) {
      super(props)
      this.state = {
        count: 0
      }
    }
    componentDidMount(): void {
        const interval = setInterval (() => {
            console.log("Interval");
        },2000)
    }
  render() {
    return (
      <div>ClassComponents</div>
    )
  }
}
