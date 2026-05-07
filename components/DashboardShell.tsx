// components/DashboardShell.tsx

'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

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
          : 'lg:grid-cols-[280px_1fr]'
      }`}
    >
      <Sidebar
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
      />

      <div className='flex flex-col bg-gray-50'>
        <Navbar />

        <main className='flex-1 p-6 overflow-y-auto'>
          {children}
        </main>
      </div>
    </main>
  )
}

export default DashboardShell