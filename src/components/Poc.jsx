import React from 'react'
import FavPoke from './FavPoke'
function Poc({add}) {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {add?.map((data, idx)=>(
        <div key={idx}>
            <h3 className='title mt-3'>{data.name}</h3>
            <img src={data?.sprites?.other?.home?.front_default} alt="" className='mb-5' />
            <FavPoke />
       </div>
      ))}
    </div>
  )
}

export default Poc
