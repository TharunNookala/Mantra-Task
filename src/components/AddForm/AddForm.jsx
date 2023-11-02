import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setForm } from '../../store/dataSlice';
import Modal from '../Modal/Modal';

const AddForm = () => {
    const navigate= useNavigate()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({name:"", email : "", phone : "", age: ""})

const handleInputChange=(e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
}
    function handleSubmit(e){
        e.preventDefault();
        dispatch(setForm({...formData, id: Date.now()}))
        setFormData({name: "", email: "", phone: "", age:""})
        navigate("/")
    }

  return (
    <Modal>
    <form className='w-full h-full flex flex-col items-center justify-center gap-10 mx-auto ' onSubmit={handleSubmit}> 
    <div className='grid grid-cols-2 gap-4'>
        <div className='flex items-center gap-4'>
            <label className='text-lg font-medium'>Name: </label>
            <input type="text" name="name" className='p-2 bg-gray-100 rounded-lg' placeholder='name' value={formData.name} onChange={handleInputChange}/>
        </div>
        <div className='flex items-center gap-4'>
            <label className='text-lg font-medium'>Email: </label>
            <input type="email" name="email" className='p-2 bg-gray-100 rounded-lg' placeholder='email' value={formData.email} onChange={handleInputChange}/>
        </div>
    </div>
    <div className='grid grid-cols-2 gap-4'>
        <div className='flex items-center gap-4'>
            <label className='text-lg font-medium'>Phone: </label>
            <input type="text" name="phone" className='p-2 bg-gray-100 rounded-lg' placeholder='phone' value={formData.phone} onChange={handleInputChange}/>
        </div>
        <div className='flex items-center gap-4'>
            <label className='text-lg font-medium'>Age: </label>
            <input type="number" name="age" className='p-2 bg-gray-100 rounded-lg' placeholder='age' value={formData.age} onChange={handleInputChange}/>
        </div>
    </div>

    <div className='flex items-center gap-4'>
   <Link to="/"> 
        <button className='bg-gray-200 px-2 py-1 rounded-md'>cancel</button>
   </Link>
    <button type="submit" className='bg-gray-200 px-4 py-1 rounded-md'>add</button>
    </div>
    </form>
    </Modal>
  )
}

export default AddForm
