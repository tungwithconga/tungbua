import React from 'react'

export default function bt1() {
    const handleClick   = () => {
        console.log('click1')
    }
  return (
    <div>bt1
        <button onClick = {handleClick}>Click</button>
    </div>
  )
}
