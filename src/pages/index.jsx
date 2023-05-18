import React from 'react'
import { inbox } from '../utils/inbox'
import Input from '../component/input'

function Index() {
  return (
    <div className='main'>
        <h1>Student Form</h1>
        <div className="form">
        {inbox.map((head)=>(
            <Input Value={head.value} Label={head.label}  />
        ))
        }
        </div>
    </div>
  )
}

export default Index