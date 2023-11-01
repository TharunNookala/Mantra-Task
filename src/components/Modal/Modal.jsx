import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='w-screen h-screen bg-transparant'>
      {children}
    </div>
  )
}

export default Modal
