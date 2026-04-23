// components/DashboardShell.tsx

'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'

const DashboardShell = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <main
      className={`h-screen grid transition-all duration-300 ${
        collapsed
          ? 'lg:grid-cols-[80px_1fr]'
          : 'lg:grid-cols-[300px_1fr]'
      }`}
    >
      <Sidebar
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
      />

      <div className='flex flex-col bg-gray-200'>
        <div className='h-16 border-b bg-white px-6 flex items-center'>
          NAVBAR
        </div>

        <main className='flex-1 p-6 overflow-y-auto'>
          {children}
        </main>
      </div>
    </main>
  )
}

export default DashboardShell