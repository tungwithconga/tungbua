import React, { Component } from 'react'
interface Props{

}
interface State{
    name :string,
    age :number,
    loading:boolean,
}
export default class classCoponents extends Component<Props,State> {

    constructor(props:Props){
        super(props)
        //khai báo state khi ở trong component
        this.state={
            name:"hoa",
            age:25,
            loading:true,
        }
    }
    componentDidMount(): void {
        console.log("chạy sau khi componet render lân đầu");
        
    }
    //dùng các phương thức mặc định React cung cấp 
    componentWillMount(): void {
        console.log("chạy sau khi constructor khởi tạo xong giá trị state");
        /*
        trong phương thức componetWillMount có thể tính toán lại State
        những lưu ý cái thờ gian chuyển từ componentWillMount đến phương thức render rất là nhanh
        cho nên lưu ý việc cập nhật state

        */ 
    }
  render() {
    
    this.State({
        name :"Huyen beo",

    })
    

    console.log("componet được render lần đầu");
    
    return (
      <div>
        <p>ClassComponents</p>
        <p>xin chào {this.state.name}</p>
      </div>
    )
  }
}