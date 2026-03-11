import React from 'react'

const Herotext = (props) => {
  return (
      <div className='p-6'>
        <h3 className='mb-7 text-6xl font-bold'>Prospective <br /><span>Customer <br />Segmentation</span></h3>
        <p className='w-[90%] font-medium text-gray-500'>{props.content}</p>
      </div>
  )
}

export default Herotext
