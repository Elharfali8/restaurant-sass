import { ChevronDown } from 'lucide-react'
import React from 'react'

const ProfileButton = ({name}: {name: string}) => {
  return (
      <button className='px-4 py-2 rounded-2xl shadow-md bg-gradient-to-r from-orange-100 to-slate-50 flex items-center gap-3 cursor-pointer transition hover:scale-[1.02] hover:shadow-lg'>
          <div className='w-10 h-10 bg-gray-600 grid place-items-center rounded-full text-white shadow-md'>
              Y
          </div>
          <div className='grid ml-3'>
              <span className='grid text-sm text-gray-400 capitalize'>
                <span className='text-black font-bold '>{name}</span>
                admin
              </span>
          </div>
          <div>
              <ChevronDown />
          </div>
    </button>
  )
}

export default ProfileButton