import React from 'react'

export default function bt3() {
    const [date,setDate]=useState<string>("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("Gia tri choon",e.target.value);
        setDate(e.target.value);
    }
  return (
    <div>bt3
        <label htmlFor=""></label>
        <input type="text"
        onChange={handleChange} />
    </div>
  )
}
