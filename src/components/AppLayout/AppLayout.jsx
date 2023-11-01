import React, { useState } from 'react'
import DetailsTable from '../DetailsTable/DetailsTable';
import { Link } from 'react-router-dom';

const AppLayout = () => {
    const [isAdd, setIsAdd] = useState(false)
    return (
      <div className="w-screen h-screen border-black border-[10px] flex flex-col gap-4">
        <Link  to="/add" className='flex items-n justify-end p-3'>
          <button className='bg-gray-300 px-2 py-1' >Add +</button>
        </Link>
        <div className='bg-gray-200 w-full h-full'>
          <DetailsTable />
        </div>
      </div>
    );
}

export default AppLayout
