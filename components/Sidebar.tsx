'use client'

import { sidebarItems } from '@/utils/contants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className='hidden lg:block bg-white shadow-lg'>
      <div className='h-full flex flex-col justify-between'>
        <div>
          <Link
            href='/dashboard'
            className='flex items-center gap-x-1'
          >
            <Image
              src='/assets/logo.png'
              alt='logo'
              width={80}
              height={80}
            />

            <span className='text-lg lg:text-2xl font-extrabold'>
              Order<span className='text-orange-500'>Ly</span>
            </span>
          </Link>

          <ul className='px-4 mt-16 grid gap-y-3'>
            {sidebarItems.map((link) => {
              const { id, title, path, icon: Icon } = link

              const isActive = pathname === path

              return (
                <li
                  key={id}
                  className={`p-3 shadow-md rounded-md transition-colors  hover:scale-[1.05] ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-50 text-black'
                  }`}
                >
                  <Link
                    href={path}
                    className='flex items-center gap-3 text-xl'
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? 'text-white' : 'text-gray-700'
                      }`}
                    />

                    <span>{title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* last div */}
        <div className='grid gap-y-3 mb-4 place-items-center'>
          <button className='flex items-center justify-center gap-x-2 border w-[70%] py-2 shadow-md rounded-xl cursor-pointer transition hover:scale-[1.02] text-lg font-medium bg-gray-800 text-white hover:bg-gray-800/80'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
            </span>
            Profile
          </button>
          <button className='flex items-center justify-center gap-x-2 border w-[70%] py-2 shadow-md rounded-xl border-gray-300 cursor-pointer transition hover:scale-[1.02] text-lg font-medium bg-gray-50 hover:bg-gray-100'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M15 12h-12l3 -3" /><path d="M6 15l-3 -3" /></svg>
            </span>
            Logout
            </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar