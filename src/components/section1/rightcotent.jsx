import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'

const Rightcotent = (props) => {
  return (
    //-----------------------------------------------------------------------------
    // Rightcotent includes Right card & Right card includes image and the details of the working professionals
    //-----------------------------------------------------------------------------
    <div className='h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 p-6 w-2/3'>
      {props.users.map(function(elem, idx){
        return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />

      })}
      
    </div>
  )
}

export default Rightcotent
