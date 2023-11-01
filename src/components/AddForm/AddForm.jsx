import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setForm } from '../../store/dataSlice';

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
    <form className='w-screen h-screen flex flex-col items-center justify-center border bg-transparant' onSubmit={handleSubmit}> 
    <div>
        <div className='flex items-center gap-4'>
            <label>Name</label>
            <input type="text" name="name" className='px-2 py-1 bg-gray-100' placeholder='name' value={formData.name} onChange={handleInputChange}/>
        </div>
        <div className='flex items-center gap-4'>
            <label>Email</label>
            <input type="email" name="email" className='px-2 py-1 bg-gray-100' placeholder='email' value={formData.email} onChange={handleInputChange}/>
        </div>
    </div>
    <div>
        <div className='flex items-center gap-4'>
            <label>Phone</label>
            <input type="text" name="phone" className='px-2 py-1 bg-gray-100' placeholder='phone' value={formData.phone} onChange={handleInputChange}/>
        </div>
        <div className='flex items-center gap-4'>
            <label>Age</label>
            <input type="number" name="age" className='px-2 py-1 bg-gray-100' placeholder='age' value={formData.age} onChange={handleInputChange}/>
        </div>
    </div>

    <div className='flex items-center gap-4'>
   <Link to="/"> 
        <button className='bg-gray-200 px-2 py-1 rounded-md'>cancel</button>
   </Link>
    <button type="submit" className='bg-gray-200 px-4 py-1 rounded-md'>add</button>
    </div>
    </form>
  )
}

export default AddForm
