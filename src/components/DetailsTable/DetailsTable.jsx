import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DetailsCard from '../DetailsCard/DetailsCard'

const DetailsTable = () => {
  let profiles = useSelector(state => state.data.data)

  const under18 = profiles.filter((profile)=>profile.age < 18)
  const under25 = profiles.filter((profile)=>profile.age <25 && profile.age>=18)
  const under45 = profiles.filter((profile)=>profile.age <45 && profile.age>=25)



  return (
    <div className='grid grid-cols-3 gap-2 w-full h-full p-2'>
      <div className='bg-yellow-100'>
        <h1 className='bg-gray-100 text-center'>Age 1-18</h1>
        {under18.map((profile)=>(
            <DetailsCard 
            key={profile.id}
           {...profile} 
            />
        ))} 
        </div>
      <div className='bg-yellow-100'>
        <h1 className='bg-gray-100 text-center'>Age 19-25</h1>
        {under25.map((profile)=>(
            <DetailsCard 
            key={profile.id}
            {...profile} 
            />
        ))}
        </div>
      <div className='bg-yellow-100'>
        <h1 className='bg-gray-100 text-center'>Age25-45</h1>
        {under45.map((profile)=>(
            <DetailsCard 
            key={profile.id}
            {...profile} 
            />
        ))}
        </div>
    </div>
  )
}

export default DetailsTable
