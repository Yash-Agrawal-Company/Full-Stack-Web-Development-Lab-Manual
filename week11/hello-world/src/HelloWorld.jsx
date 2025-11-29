import React, { useState } from 'react'

const HelloWorld = () => {
    const [name, setName] = useState('')
  return (
    <div>
     <input type="text" placeholder='Enter your name' onChange={(e)=> {setName(e.target.value)}}/>
     <h3>Good Morning {name}</h3>
    </div>
  )
}

export default HelloWorld
