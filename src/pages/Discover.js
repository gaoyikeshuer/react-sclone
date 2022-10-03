import React from 'react'
import { genres } from '../asset/constant'


const Discover = () => {
    console.log(genres);
  return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-red text-left'>Discover</h2>

        </div>
      
    </div>
  )
}

export default Discover