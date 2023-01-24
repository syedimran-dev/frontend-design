import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Buttons = (props) => {
  return (
    <Link className='btn px-4 btn-custom'>{props.text}</Link>
  )
}

export default Buttons