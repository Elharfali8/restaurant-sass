import { Icon, LucideIcon } from 'lucide-react'
import React from 'react'

type ButtonProps = {
  icon: LucideIcon;
};

const ButtonUi = ({icon: Icon}:ButtonProps) => {
  return (
      <button className='bg-white  rounded-xl grid place-items-center shadow-md p-2 relative cursor-pointer transition hover:scale-[1.02] hover:bg-slate-50 hover:shadow-lg'>
          <Icon className='w-6 h-6' />
          <div className="absolute -top-1 -right-1 bg-orange-500 rounded-full grid place-items-center text-[10px] text-white h-5 w-5 font-medium">
    23
</div>
      </button>
  )
}

export default ButtonUi