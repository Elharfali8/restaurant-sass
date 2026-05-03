import React from 'react'

type Props = {
    title: string;
    subTitle?: string
}

const PageTitle = ({ title, subTitle }: Props) => {
    
  return (
      <div className='mb-4 lg:mb-6'>
          <h3 className='text-xl lg:text-2xl font-semibold capitalize'>{title}</h3>
          <h4 className='text-gray-600'>{subTitle}</h4>
    </div>
  )
}

export default PageTitle