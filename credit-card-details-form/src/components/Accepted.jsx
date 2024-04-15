import React from 'react'
import CompleteIcon from '../assets/images/CompleteIcon'
export default function Accepted() {
  return (
    <div className='cardForm continue-field'>
        <CompleteIcon />
        <h1>THANK YOU!</h1>
        <span>We've added your card details</span>
        <button className='continue'>Continue</button>
    </div>
  )
}
