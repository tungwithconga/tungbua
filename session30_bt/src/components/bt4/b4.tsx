import React from 'react'

export default function () {
    const [city, setCity] = React.useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setCity(e.target.value)
    }
  return (
    <div>
        bt4
        <select name="" id="" onChange={handleChange}>
            <option value="">Chon tinh thanh pho</option>
            <option value="HCM">HCM</option>
            <option value="HN">HaNoi</option>
            <option value="HaNam">HaNam</option>
            <option value="Duc">Duc</option>
        </select>
    </div>
  )
}
