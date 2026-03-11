import React from 'react'
import RightCardcontent from './RightCardcontent'

const Rightcard = (props) => {
  return ( 
    //-----------------------------------------------------------------------------
    //Image of the working Professionals
    //-----------------------------------------------------------------------------

    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
    <RightCardcontent id={props.id} color={props.color} tag={props.tag} intro={props.intro} />

    </div>
  )
}

export default Rightcard
