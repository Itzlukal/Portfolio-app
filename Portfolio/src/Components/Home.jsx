import React from 'react'

const Home = () => {
  return (
    <div className='home' name = "home " >
        <p style={{color:'#00FFFF',}}>Hi, my name is</p>
        <h1  style={{ color: '#A9A9A9', fontSize: 30, fontWeight:700}}>Luka Lursmanashvili</h1>
        <h2 style={{ color:'#FFF8DC', fontSize:40, fontWeight:700, }}>I am a Front End developer</h2>
        <p style={{color:'#FFF8DC', fontSize:25, fontWeight:600, whiteSpace:'nowrap'}}>I am 18 Years old, currently learning Front End and planing on going Full Stack.</p>
    </div>
  )
}

export default Home