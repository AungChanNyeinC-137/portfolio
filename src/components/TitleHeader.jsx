import React from 'react'
const TitleHeader = ({title, sub, emoji}) => {
  return (
    <div className="flex flex-col items-center gap-5">
        <div className="flex flex-row items-center justify-between hero-badge">
           <span >{emoji}</span> <p className='px-2'>{sub}</p>
        </div>
        <div className="font-semibold md:text-3xl text-3xl text-center text-white-50">
          {title}
        </div>

    </div>
  )
}

export default TitleHeader