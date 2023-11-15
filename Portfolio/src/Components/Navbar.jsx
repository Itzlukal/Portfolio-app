import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaBars, FaTimes} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <><div className="navbar">
      <ul className='ul-style'>
        <li className='nav-buttons'>
        <Link 
      to="home" 
      smooth={true} 
      duration={500} 
    >
      Home
      </Link>
          </li>
        <li className='nav-buttons'>
        <Link 
      to="about" 
      smooth={true} 
      duration={500} 
    >
      About
      </Link>
          </li>
        <li className='nav-buttons'>
        <Link 
      to="skills" 
      smooth={true} 
      duration={500} 
    >
      Skills
      </Link>
          </li>
        <li className='nav-buttons'>
        <Link 
      to="contact" 
      smooth={true} 
      duration={500} 
    >
      contact
      </Link>
          </li>
      </ul>
    </div>

    <div>
      <FaBars />
    </div>



    <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
       <li className='socials' >
        <a  className='link-to-socials' href='https://instagram.com/itzmelukaa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
        Instagram  <BsInstagram size={40}/>
        </a>
        </li>
        <li className='socials' style={{backgroundColor:'#3f4041', paddingLeft:25, }}>
        <a  className='link-to-socials'  href='https://github.com/Itzlukal'>
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