import React from 'react'

const RightCardcontent = (props) => {
  return ( 
    //-----------------------------------------------------------------------------
    // Details written in working card 
    //-----------------------------------------------------------------------------
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white font-semibold rounded-full h-9 w-9 flex justify-center items-center'>{props.id+1}</h2>
      <div>
        <p className='text-lg text-shadow-2xs leading-relaxed text-white mb-10'>{props.intro}</p>
        <div className='flex justify-between '>
          <button style={{backgroundColor:props.color}} className=' text-white px-7 py-2 rounded-full'>{props.tag}</button>
          <button style={{backgroundColor:props.color}} className=' text-white px-7 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>

    </div>
  )
}

export default RightCardcontent
