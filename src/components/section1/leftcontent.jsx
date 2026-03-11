import React from 'react'
import Herotext from './herotext'
import Arrow from './Arrow'

const Leftcontent = (props) => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
      {props.leftuser.map(function(elem){
        return <Herotext content={elem.content}/>
      })}
      <Arrow />
    </div>
  )
}

export default Leftcontent
