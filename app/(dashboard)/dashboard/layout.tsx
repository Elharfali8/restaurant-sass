import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='h-screen grid lg:grid-cols-[300px_1fr]'>
      {/* SIDEBAR */}
      <Sidebar />
      {/* CONTENT */}
      <div className="flex flex-col bg-gray-200">
        {/* navbar */}
        <div>
          NAVBAR
           <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
        </div>
      </div>
    </main>
  )
}

export default layout