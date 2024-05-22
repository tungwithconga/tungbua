import React from 'react'

export default function SelectOption() {
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Gia tri nguoi dung chon",event.target.value)
    }
  return (
    <div>SelectOption
        <select onChange={handleChange} name="" id="">
            <option value="">Chon tinh thanh</option>
            <option value="Toc man">Toc man</option>
            <option value="HCM">HCM</option>
            <option value="Cantho">Can tho</option>
        </select>
    </div>
  )
}
