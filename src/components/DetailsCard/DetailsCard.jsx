import { useState } from 'react'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { deleteProfile, editProfile } from '../../store/dataSlice'
import { useDispatch } from 'react-redux'

const DetailsCard = ({id, name, email, phone, age}) => {
    const dispatch=useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [editedName, setEditedName] = useState(name)
    const [editedEmail, setEditedEmail] = useState(email)
    const [editedPhone, setEditedPhone] = useState(phone)
    const [editedAge, setEditedAge] = useState(age)


    const handleEdit = ()=>{
        if(isEditing){
            dispatch(editProfile({id, name:editedName, email:editedEmail, phone:editedPhone, age:editedPhone}))
        }
        setIsEditing(true)
    }

    const handleDelete= ()=> {
        dispatch(deleteProfile(id))
    }
  return (
    <div className='border rounded-md relative flex gap-2 items-center justify-center'>
      <div className='p-3 flex flex-col'>
        {isEditing ? (
            <input type="text" className='px-2 py-1 bg-gray-100' placeholder='name' value={editedName} onChange={(e)=>setEditedName(e.target.value)}/>
        ) : <p> name : {name}</p>}
       
       {isEditing ?
       (<input type="email" className='px-2 py-1 bg-gray-100' placeholder='email' value={editedEmail} onChange={(e)=>setEditedEmail(e.target.value)}/>) : 
       <p> email : {email}</p>
       }
       {isEditing ?
       (<input type="text" className='px-2 py-1 bg-gray-100' placeholder='phone' value={editedPhone} onChange={(e)=>setEditedPhone(e.target.value)}/>) : 
       <p> email : {phone}</p>
       }
       {isEditing ?
       (<input type="number" className='px-2 py-1 bg-gray-100' placeholder='age' value={editedAge} onChange={(e)=>setEditedAge(e.target.value)}/>) : 
       <p> email : {age}</p>
       }
       
      </div>
      <div className=' border rounded-md absolute top-0 right-0 flex gap-2'>
        
            <button onClick={handleEdit}>{isEditing ? 'save' : <AiFillEdit />}</button>
        <button onClick={handleDelete}><AiFillDelete /></button>
      </div>
    </div>
  )
}

export default DetailsCard
