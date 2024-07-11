import React,{useRef} from 'react'
import Button from './Button'
// iconlar
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

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
        <a className='my-1'href="#">Home</a>
        <a className='my-1' href="#">About</a>
        <a className='my-1' href="#">Services</a>
        <a className='my-1' href="#">Blog</a>
        <a className='mb-4' href="#">Contact</a>
        <Button klass="mob-sign-in" btnText="Sign in" image=""/>
        </nav>
        
      </div>
    <nav className="header-navbar navbar navbar-expand-lg">
  <div className="container">

    {/* logo img*/}

    <a className="navbar-brand" href="#"><img src="/Header/logo.svg" alt=""className='header-logo'/></a>

    {/* open navbar icon */}

    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars onClick={opennavbar} />
    </button>
    {/* links */}

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link text-light mx-2" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light mx-2" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light mx-2" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light mx-2" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light mx-2" href="#">Contact</a>
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