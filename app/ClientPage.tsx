import Image from 'next/image'
import React from 'react'

const ClientPage = () => {
  return (
      <>
          {/* INPUTS */}
      <div className='w-full h-full grid place-items-center'>

              <h1></h1>
            
      </div>
      {/* IMAGE */}
      <div className='bg-orange-100 w-full h-full hidden lg:grid place-items-center'>
        <Image
          src={'/assets/landing.svg'}
          alt='Landing page picture'
          width={800}
          height={800}
        />
      </div>
    </>
  )
}

export default ClientPage