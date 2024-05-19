import React from 'react'

export default function bt2() {
    const [value,setValue] = useState<string>("");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }}
  return (
    <div>bt2
        <label htmlFor="">Nhap du lieu</label>
        <input onChange= {HandleChange} type="text" />
    </div>
  )
};
