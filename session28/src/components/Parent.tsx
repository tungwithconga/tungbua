import React from 'react'
import Child from './Child'
interface Props{
    a:string
}
export default function Parent() {
  return (
    <div>Parent
        <Child></Child>
    </div>
  )
}
