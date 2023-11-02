import React, { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Modal = ({children}) => {
  const navigate = useNavigate();
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const onDismiss = useCallback(()=>{
    navigate('/')
},[navigate])

const handleClick = useCallback((e)=>{
  if((e.target === overlay.current) && onDismiss) {
      onDismiss();
  }
 },[onDismiss, overlay]);
  return (
    <section ref={overlay} className="fixed z-10 bg-black/80 left-0 right-0 top-0 bottom-0 mx-auto flex items-center" onClick={handleClick}>
        <button type="button" onClick={onDismiss} className="absolute top-10 right-8 bg-gray-200 px-2 py-0 rounded-full font-semibold">
            x
        </button>
        <section ref={wrapper} 
        className="flex justify-center items-center flex-col h-1/2 w-full bg-white rounded-3xl lg:px-40 px-8 pt-14 pb-28 overflow-auto"
        >
            {children}
        </section>
    </section>
  )
}

export default Modal
