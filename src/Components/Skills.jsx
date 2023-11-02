import React from 'react'
import HTML from '../assets/html.png' 
import CSS from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'



const Skills = () => {
  return (
    <><div name='skills' className='bg-[#0a192f] text-gray-300'>
      <div className='experience-container'>
        <h1 style={{ textDecoration: 'underline', textDecorationColor: 'greenyellow', fontSize: 20, fontWeight: 700, color: " gray ", }}>
          Experience</h1 >
        <p style={{ textDecoration: 'underline', textDecorationColor: 'green', fontSize: 10, fontWeight: 500, color: " gray " }}>
           //Those are the things I have worked with</p>
      </div>

      </div>

      <div className='experiences-grid'>
       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' style={{width:150}}>
       <img src={HTML} />
          <p className='my-4' style={{fontWeight:700, color:'orange'}}> HTML</p>
       </div>
       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' style={{width:150}}>
       <img src={CSS} />
          <p className='my-4' style={{fontWeight:700, color:'cyan'}}> CSS </p>
       </div>
       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' style={{width:150}}>
       <img src={javascript} />
          <p className='my-4' style={{fontWeight:700, color:'yellow'}}> Javascript</p>
       </div>
       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ' style={{width:150}}>
       <img src={react} />
          <p className='my-4' style={{fontWeight:700, color:'cyan'}}> React.js</p>
       </div>

      </div>
      </>
  )
}

export default Skills