import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {

  const users=[
    {
     img:'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'Success comes from consistent effort, learning every day, staying disciplined, and believing strongly in your vision',
     color:'blue',
     tag:'Satisfied'
    },
    {
     img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'Great professionals focus on solutions, improve daily, respect teamwork, and deliver excellence with integrity always',
     color:'lightseagreen',
     tag:'Underserved'
    },
    {
     img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'Hard work, smart thinking, and positive attitude together build a powerful career and meaningful professional life',
     color:'brown',
     tag:'Underbanked'
    },
    {
     img:'https://plus.unsplash.com/premium_photo-1661499699482-3fbf9779ccfa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'Professionals grow by accepting challenges, learning from failures, and continuously improving skills and mindset daily',
     color:'orange',
     tag:'Undercover'
    }
  ]
  const leftuser=[
    {content:'Dividing customers into meaningful segments allows companies to create smarter marketing strategies and stronger connections.'}
  ]
  return (
    //-----------------------------------------------------------------------------
    //Section 1 & Section 2 from components
    //-----------------------------------------------------------------------------
    <div>
      <Section1 users={users} leftuser={leftuser}/>
    </div>
  )
}

export default App
