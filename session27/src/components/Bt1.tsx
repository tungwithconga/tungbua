import React from 'react'
interface Product{
    name:string;
    price:number;
    id:number;
}

export default function Bt1() {
    //render dữ liệu đối với function compoment
    let fullName:string = "minh thu";
    let age:number = 19;
    let student = {
        name:"Hoa",
        age:20,
        address:"Ha Noi",
    }
    let number:number[]=[1,4,7,9];
    let students:string[]=["thu", "ngoc", "nam", "son",];
    let products:Product[]=[
        {
        name:"Iphone",
        price:300, 
        id:1
    },
    {
        name:"Samsung",
        price:200,
        id:2
    },
    {
        name:"Xiaomi",
        price:100,
        id:3
    }
]
  return (
    <div>
        <p>Bai tap 1</p> 
        <p>Noi dung bai tap</p>
        <p>{fullName}</p>
        <p>{fullName} nam nay {age} tuoi</p>
        <p>Chuyen sang dang JSON de hien thi</p>
        <p>{JSON.stringify(student)}</p>
        <p>Hien thi mang array</p>
        <ul>
            {number.map((item,index,arr)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
        <ul>
            {students.map((item,index,arr)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Gia</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody></tbody>
            
        </table>

    </div>
  )
}
/*
Khi return các element phải có thẻ fragment bọc bên ngoài
 */