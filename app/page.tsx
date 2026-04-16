import Image from 'next/image'
import React from 'react'
import ClientPage from './ClientPage'

const HomePage = () => {
  return (
    <main className='h-screen w-full flex items-center'>
      <ClientPage />
    </main>
  )
}

export default HomePage