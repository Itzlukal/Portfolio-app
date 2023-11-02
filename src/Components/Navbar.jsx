import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'

const Navbar = () => {
  return (
    <><div className="navbar">
      <ul className='ul-style'>
        <li className='nav-buttons'>Home</li>
        <li className='nav-buttons'>About</li>
        <li className='nav-buttons'>Skills</li>
        <li className='nav-buttons'>Contact</li>
      </ul>
    </div>
    <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
       <li className='socials' >
        <a  className='link-to-socials' href='./'>
        Instagram  <BsInstagram size={40}/>
        </a>
        </li>
        <li className='socials' style={{backgroundColor:'#3f4041', paddingLeft:25, }}>
        <a  className='link-to-socials'  href='./'>
        GitHub  <AiFillGithub size={40}/>
        </a>
        </li>
        <li className='socials' style={{backgroundColor:'blueviolet', paddingLeft:50, }}>
        <a  className='link-to-socials'  href='./'>
         Mail  <CgMail size={40}/>
        </a>
        </li>
        </ul>
      </div></>
  )
}

export default Navbar