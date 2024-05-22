import React from 'react'
// import ClassComponents from './components/ClassComponents'
import FormAdvance from './components/FormAdvance'
import Textarea from './components/Textarea'
import SelectOption from './components/SelectOption'
export default function App() {
  // setTimeout(() => {
  //   console.log("ham setTimeout duoc goi")
  // },5000)
  // let internal = setInterval(() => {
  //   console.log("ham setInterval duoc goi")
  // }, 1000)
  // //Khi viet ham setInterval va setTimeout nen viet trong components didMount
  // const handleClick = () => {
  //   clearInterval(internal)
  // }

  // /*
  // setInterval chay nhieu lan,khi muon dung setInterval thi phai dung clearInterval 
  // */
  return (
    <div>App
      {/* <ClassComponents></ClassComponents> */}
      <FormAdvance></FormAdvance>
      <Textarea></Textarea>
      <SelectOption></SelectOption>
    </div>
  )
}
