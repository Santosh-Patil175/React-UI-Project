import React from 'react'
import Leftcontent from './leftcontent'
import Rightcotent from './rightcotent'

const Page1content = (props) => {
  return (
    //-----------------------------------------------------------------------------
    //The contents from the left and right side 
    //-----------------------------------------------------------------------------
    <div className='pb-8 pt-1 flex items-center gap-10 h-[90vh] px-16'>
      <Leftcontent leftuser={props.leftuser}/>
      <Rightcotent users={props.users} />
    </div>
  )
}

export default Page1content


