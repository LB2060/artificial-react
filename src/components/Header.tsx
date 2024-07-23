import React,{useRef} from 'react'
import Button from './Button'
// iconlar
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Header :React.FC= () => {
  const nemo=useRef<HTMLDivElement>(null);

  const opennavbar= () =>{
    if(nemo.current){
      nemo.current.classList.add("active")
    }
  }
  const closenavbar= () => {
    if(nemo.current){
      nemo.current.classList.remove("active")
    }
  }

  return (
    <>
      <div className="mobile-menu" ref={nemo}>
      <IoCloseSharp onClick={closenavbar} className='text-white closebtn'/>
      <nav className='mobile-links'>
        <Link className='my-1' to="/">Home</Link>
        <Link className='my-1' to="/about">About</Link>
        <Link className='my-1' to="/services">Services</Link>
        <Link className='my-1' to="/blog">Blog</Link>
        <Link className='mb-4' to="/contact">Contact</Link>
        <Button klass="mob-sign-in" btnText="Sign in" image=""/>
        </nav>
        
      </div>
    <nav className="header-navbar navbar navbar-expand-lg">
  <div className="container">

    {/* logo img*/}

    <Link className="navbar-brand" to="/"><img src="/Header/logo.svg" alt=""className='header-logo'/></Link>

    {/* open navbar icon */}

    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars onClick={opennavbar} />
    </button>
    {/* links */}

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link text-light mx-2" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light mx-2" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light mx-2" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light mx-2" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light mx-2" to="/contact">Contact</Link>
        </li>
          </ul>

          {/* sign in button */}

      <Button klass="sign-in" btnText="Sign in" image=""/>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header