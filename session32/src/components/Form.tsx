import React from 'react'

export default function Form() {
    const [name,setName] = useState<string>("")
    const handleClick = () => {
        console.log("e.target.value")
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setName(e.target.value)
    }
  return (
    <div>Form
       <label htmlFor=""></label>
       <input type="text"
       onChange = {handleChange}
        />
        <p>Ten nguoi dung nhap</p>
        <button onClick={handleClick}></button>
    </div>
     /* 
      Các kĩ thuật xử lý trong form
      Có 2 kĩ thuật xử lí chính :
        1,Controller
          -Lấy dữ liệu người dùng nhập vào ô input
          -Lấy dữ liệu khi người dùng nhập vaò ô textarea
          -Chọn select option
          -o trong function components muon quan li du lieu trang thai
        2,unController
       */
  )
}
