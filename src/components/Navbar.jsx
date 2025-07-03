import React, { useEffect, useState } from 'react'
import { navLinks } from '../../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect( () => {
    const handleScroll = () =>{
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    }
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  },[])
  return (
    <header className={`navbar ${scrolled? 'scrolled': 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className='logo'><img src="/images/acn.png" alt="logo" />
        <span>AungChan</span>
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map( (navlink) => (
              <li key={navlink.name} className='group'>
                <a href={navlink.link}>
                  <span>{navlink.name}</span>
                  <span className='underline'/>
                </a>
              </li>
            ))}
          </ul>
        </nav>
         <a href="#contact" className='contact-btn group'>
          <div className="inner">
            <span>Contact Me</span> 
          </div>
         </a>
      </div>
    </header>
  )
}

export default Navbar