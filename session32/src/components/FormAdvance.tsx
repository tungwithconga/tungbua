import React,{ useState } from 'react'
interface User{
    email: string,
    userName: string,
    password: string,
}
export default function FormAdvance() {
    //Cach binh thuong
    const [email,setEmail] =useState<string>("")
    const [userName,setuserName] =useState<string>("")
    //Cach xu li toi uu hon
    const [user,setuser] = useState<User>({
        email:"",
        userName:"",
        password:"",
    })
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let name = event.target.name;
        console.log("gia tri cua value",value);
        console.log("gia tri cua name",name);
        setuser({...user,[name]:value});
    }
    console.log("gia tri cua bien user",user);
  return (
    <div>FormAdvance
        <label htmlFor="">email</label>
        <input name="email" type="text" onChange = {handleChange} /><br />
        <label htmlFor="">userName</label>
        <input name="userName" type="text" onChange = {handleChange} /><br />
        <label htmlFor="">password</label>
        <input name="password" type="text" onChange = {handleChange} /><br />
        <label htmlFor="">confirmPassword</label>
        <input name="confirmPassword" type="text" onChange = {handleChange} /><br />
        <button>register</button>
    </div>
  )
}
