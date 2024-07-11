import React from 'react'
// iconlar
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";





const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="first-section col-12 col-lg-3">
                        <img src="/Footer/robot.svg" alt="" />
                        <h6 className='footer-h6 my-3'>Artificial Intelligence</h6>
                        <p className='footer-p'>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                        <div className="links">
                            <div className="link">
                                <img src="/Footer/message.svg" alt="" /><p className='text-white mx-3'>Company@gmail.com.com</p>
                            </div>
                            <div className="link">
                                <img src="/Footer/phone.svg" alt="" /><p className='text-white mx-3'>Phone: (064) 332-1233</p>
                            </div>
                            <div className="link">
                                <img src="/Footer/location.svg" alt="" /><p className='text-white mx-3'>450 Wall Street, USA, New York</p>
                            </div>
                        </div>

                    </div>
                    <div className="second-section col-12 col-lg-2">
                        <h6>INFORMATION</h6>
                        <ul>
                            <li className='my-3'>New Collection</li>
                            <li className='my-3'>About Store</li>
                            <li className='my-3'>Contact Us</li>
                            <li className='my-3'>Latest News</li>
                            <li className='my-3'>Our Sitemap</li>
                            <li className='my-3'>Orders History</li>
                        </ul>
                    </div>
                    <div className="third-section col-12 col-lg-2">
                        <h6>FOOTER MENU</h6>
                        <ul>
                            <li className='my-3'>Instagram profile</li>
                            <li className='my-3'>New Collection</li>
                            <li className='my-3'>Contact Us</li>
                            <li className='my-3'>Latest News</li>
                            <li className='my-3'>Terms & Conditions</li>
                            <li className='my-3'>Purchase Theme</li>
                        </ul>
                    </div>
                    <div className="fourth-section col-12 col-lg-2">
                        <h6>USEFUL LINKS</h6>
                        <ul>
                            <li className='my-3'>Instagram profile</li>
                            <li className='my-3'>New Collection</li>
                            <li className='my-3'>Contact Us</li>
                            <li className='my-3'>Latest News</li>
                            <li className='my-3'>Terms & Conditions</li>
                            <li className='my-3'>Purchase Theme</li>
                        </ul>
                    </div>
                    <div className="fifth-section col-12 col-lg-3">
                        <h6 className='text-white'>ABOUT THE STORE</h6>
                        <p className='footer-p my-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                        <p className='text-white'>www.company.com</p>
                        <div className="icon-link">
                            <a className='mx-2' href="https://www.facebook.com/"><SlSocialFacebook /></a>
                            <a className='mx-2' href="https://www.instagram.com/"><FaInstagram /></a>
                            <a className='mx-2' href="https://x.com/"><FiTwitter /></a>
                            <a className='mx-2' href="https://www.linkedin.com/"><FiLinkedin /></a>
                            <a className='mx-2' href="https://www.youtube.com/"><FiYoutube /></a>

                        </div>
                        <div className="dropdown">
                            <RiGlobalLine className='global'/><p className='mx-2'>English</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Footer