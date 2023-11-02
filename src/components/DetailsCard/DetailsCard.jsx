import { useState } from 'react'
import {AiFillDelete, AiFillEdit, AiFillSave} from 'react-icons/ai'
import { deleteProfile, editProfile } from '../../store/dataSlice'
import { useDispatch } from 'react-redux'

const DetailsCard = ({id, name: initialName, email: initialEmail, phone:initialPhone,  age: initialAge}) => {
    const dispatch=useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [editedName, setEditedName] = useState(initialName)
    const [editedEmail, setEditedEmail] = useState(initialEmail)
    const [editedPhone, setEditedPhone] = useState(initialPhone)
    const [editedAge, setEditedAge] = useState(initialAge)


    const handleEdit = ()=>{
        if(isEditing){
            dispatch(editProfile({id, name:editedName, email:editedEmail, phone:editedPhone, age:editedAge}))
        }
        setIsEditing(!isEditing)
    }

    const handleDelete= ()=> {
        dispatch(deleteProfile(id))
    }
  return (
    <div className='border-2 border-black min-h-[200px] rounded-lg relative flex gap-2 items-center justify-center'>
      <div className='p-2 flex flex-col'>
        {isEditing ? (
            <input type="text" className='px-2 py-1 bg-gray-100' placeholder='name' value={editedName} onChange={(e)=>setEditedName(e.target.value)}/>
        ) : <p className='text-xl font-medium'> name : {initialName}</p>}
       
       {isEditing ?
       (<input type="email" className='px-2 py-1 bg-gray-100' placeholder='email' value={editedEmail} onChange={(e)=>setEditedEmail(e.target.value)}/>) : 
       <p className='text-xl font-medium'> email : {initialEmail}</p>
       }
       {isEditing ?
       (<input type="text" className='px-2 py-1 bg-gray-100' placeholder='phone' value={editedPhone} onChange={(e)=>setEditedPhone(e.target.value)}/>) : 
       <p className='text-xl font-medium'> phone : {initialPhone}</p>
       }
       {isEditing ?
       (<input type="number" className='px-2 py-1 bg-gray-100' placeholder='age' value={editedAge} onChange={(e)=>setEditedAge(e.target.value)}/>) : 
       <p className='text-xl font-medium'> age : {initialAge}</p>
       }
       
      </div>
      <div className=' border rounded-md absolute top-0 right-0 flex gap-2'>   
        <button onClick={handleEdit}>{isEditing ? <AiFillSave size={23}/> : <AiFillEdit size={25} />}</button>
        <button onClick={handleDelete}><AiFillDelete size={23} /></button>
      </div>
    </div>
  )
}

export default DetailsCard
