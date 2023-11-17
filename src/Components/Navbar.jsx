
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-scroll'
import{FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <><div className='navbar' >
      <ul  className='ul-style'>
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




{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>









      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='socials' >
            <a className='link-to-socials' href='https://instagram.com/itzmelukaa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'>
              Instagram  <BsInstagram size={40} />
            </a>
          </li>
          <li className='socials' style={{ backgroundColor: '#3f4041', paddingLeft: 25, }}>
            <a className='link-to-socials' href='https://github.com/Itzlukal'>
              GitHub  <AiFillGithub size={40} />
            </a>
          </li>
          <li className='socials' style={{ backgroundColor: 'blueviolet', paddingLeft: 50, }}>
            <a className='link-to-socials' href='./'>
              Mail  <CgMail size={40} />
            </a>
          </li>
        </ul>
      </div></>
  )
}

export default Navbar





