import Image from 'next/image'
import React from 'react'

const SmallCard = ({ img, location, distance }) => {
    console.log(location,"location")
  return (
      <div className='flex items-center cursor-pointer m-2 mt-4 space-x-4 hover:bg-gray-100 rounded-xl hover:scale-105 transition transform duration-150 ease-out'>
          <div className='relative h-16 w-16'>
              <Image
                  src={img}
                  layout='fill'
                  className='rounded-lg'
                  alt='Image'
              />
          </div>
          <div>
              <h2>{location}</h2>
              <h3>{ distance}</h3>
          </div>
      </div>
  )
}

export default SmallCard