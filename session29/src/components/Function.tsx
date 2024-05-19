import React,{useState} from 'react';

export default function Function() {
    const [fullName,setfullName] = useState<string>("hoa");
    const [age,setage] = useState<number>(13);
    const [Student,setStudent] = useState<string[]>([]);
    const [isActive,setisActive] = useState<boolean>(true);
    const handChange = ()=>{
        setage(14);
        setfullName("thu");
    }
  return (
    <div>Function
        <p>{fullName} nam nay {age} tuoi</p>
        <button onClick={handChange}>change age</button>
    </div>
    /*
    State : dùng để quản lý dữ liệu trong components
    Đối với function để quản lý dữ liệu dùng ueState,
    Đây là 1 hook sinh ra giúp function có thể quản lý dữ liệu
    state có thể thay đổi giá trị được
    */
  )
}
