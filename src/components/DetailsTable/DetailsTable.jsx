import { useSelector } from 'react-redux'
import DetailsCard from '../DetailsCard/DetailsCard'
import { useState } from 'react';
import SearchSort from '../SearchSort/SearchSort';

const DetailsTable = () => {
  let profiles = useSelector(state => state.data.data)

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const AgeGroupArray = [{ label: '1-18', minAge: 1, maxAge: 18 },
  { label: '19-25', minAge: 19, maxAge: 25 },
  { label: '25-45', minAge: 26, maxAge: 45 }]

  const filteredProfiles = profiles.filter(profile => {
    if (typeof searchQuery === 'string') {
      return (
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return false; 
  });
 
  const sortedProfiles = filteredProfiles.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.age - b.age;
    } else {
      return b.age - a.age;
    }
  });


return (
  <div className='grid grid-cols-3 gap-2 w-full h-full p-2'>
    {AgeGroupArray.map((ageGroup, index) => (
      <div key={index} className='bg-gray-200 p-2 flex flex-col gap-12'>
        <div className='flex items-center justify-center flex-col gap-1'>
          <h1 className='w-full bg-gray-100 text-center'>{ageGroup.label}</h1>
          <SearchSort
            searchQuery={searchQuery}
            sortOrder={sortOrder}
            setSearchQuery={setSearchQuery}
            setSortOrder={setSortOrder}
          />
        </div>
        {sortedProfiles
          .filter((profile) => {
            return (
              profile.age >= ageGroup.minAge && profile.age <= ageGroup.maxAge
            );
          })
          .map((profile) => (
            <DetailsCard key={profile.id} {...profile} />
          )) }
      </div>
    ))}
  </div>
);
};

export default DetailsTable;