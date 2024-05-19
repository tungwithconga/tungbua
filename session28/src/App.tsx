import React from 'react'
import Parent from './components/Parent.tsx'
import Products from './components/Products.tsx'
export default function App() {
  let fullName:string="hoa";
  let age:number=19;
  let products=[
    {
      name:"Iphone15",
      price:999, 
      id:1
    },
    {
      name:"Iphone16",
      price:1000,
      id:2
    },
    {
      name:"Iphone17",
      price:1001,
      id:3
    }
  ];
  return (
    <div>App
      <p>props : properties
       - dùng để truyền , gửi dữ liệu từ component cha xuống component con
       - thế nào là component cha ?
       - thế nào là component con ?
       - component cha chứa component con 
      </p>
      <p>state</p>
      <Parent a={fullName} b={age}></Parent>
      <Products></Products>
    </div>
  )
}