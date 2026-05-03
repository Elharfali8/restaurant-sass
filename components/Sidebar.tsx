'use client'

import { sidebarItems } from '@/utils/contants'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

type SidebarProps = {
  collapsed: boolean
  toggleSidebar: () => void
}

const Sidebar = ({
  collapsed,
  toggleSidebar,
}: SidebarProps) => {

  const [user, setUser] = useState<any>(null)
  const pathname = usePathname()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data);
      }
    };

    fetchUser();
  }, []);
  

  return (
    <aside
      className={`hidden lg:block bg-white shadow-xl transition-all duration-300 relative z-20  ${
        collapsed ? 'w-20' : 'w-70'
      }`}
    >
      <div className='h-full flex flex-col justify-between'>
        <div>
          {/* logo + toggle */}
          <div
            className={`flex items-center p-4 ${
              collapsed
                ? 'justify-center'
                : 'justify-between'
            }`}
          >
            <Link
              href='/dashboard'
              className='flex items-center'
            >
              <Image
              src='/assets/logo.png'
              alt='logo'
              width={70}
              height={70}
            />

              {!collapsed && (
                <span className='text-lg lg:text-2xl font-extrabold'>
                  Order
                  <span className='text-orange-500'>
                    Ly
                  </span>
                </span>
              )}
            </Link>

            {!collapsed && (
              <button
                onClick={toggleSidebar}
                className='cursor-pointer p-2 rounded-lg shadow-md transition hover:scale-[1.01] hover:shadow-xl'
              >
                <ChevronLeft />
              </button>
            )}
          </div>

          {collapsed && (
            <div className='flex justify-center'>
              <button
                onClick={toggleSidebar}
                className='cursor-pointer bg-white p-2 rounded-lg shadow-md  transition hover:scale-[1.2]'
              >
                <ChevronRight />
              </button>
            </div>
          )}

          <p className='mt-8 mb-4 px-4 uppercase font-semibold text-gray-700'>
            menu
          </p>

          {/* nav links */}
          <ul className='px-4 grid gap-y-3'>
            {sidebarItems.map((link) => {
              const {
                id,
                title,
                path,
                icon: Icon,
              } = link

              const isActive = pathname === path

              return (
                <li
                  key={id}
                  className={`px-3 py-4 shadow-md rounded-md transition-all hover:scale-[1.05] ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-600'
                  }`}
                >
                  <Link
                    href={path}
                    className={`flex items-center font-semibold text-lg ${
                      collapsed
                        ? 'justify-center'
                        : 'gap-3'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 shrink-0 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-600'
                      }`}
                    />

                    {!collapsed && (
                      <span>{title}</span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* bottom buttons */}
        <div className='grid gap-y-3 mb-4 px-2'>
          <div className='my-3 w-full h-0.5 bg-gray-400' />
          <button
            className={`flex items-center  p-2 shadow-md rounded-xl cursor-pointer transition hover:scale-[1.02] text-lg font-medium ${
              collapsed
                ? 'px-2 justify-center'
                : 'gap-x-2 w-full justify-between'
            } bg-gray-800 text-white hover:bg-gray-800/80`}
          >
            {/*  */}
            <div className='flex items-center gap-x-2 '>
              <span className='w-10 h-10 border rounded-full border-gray-400 flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  stroke='none'
                  d='M0 0h24v24H0z'
                  fill='none'
                />
                <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
                <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
              </svg>
            </span>

            {!collapsed && (
              <span className='grid text-sm text-gray-400 capitalize'>
                <span className='text-white font-bold'>{user?.name}</span>
                admin
              </span>
            )}
            </div>
            {/*  */}
            {!collapsed && (
              <div>
              <span>
                <ArrowRight />
                </span>
            </div>
            )}
          </button>

          <button
            className={`flex items-center justify-center py-2 shadow-md rounded-xl border border-gray-300 cursor-pointer transition hover:scale-[1.02] text-lg font-medium bg-gray-50 hover:bg-gray-100 ${
              collapsed
                ? 'px-2'
                : 'gap-x-2 w-full'
            }`}
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  stroke='none'
                  d='M0 0h24v24H0z'
                  fill='none'
                />
                <path d='M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2' />
                <path d='M15 12h-12l3 -3' />
                <path d='M6 15l-3 -3' />
              </svg>
            </span>

            {!collapsed && 'Logout'}
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar