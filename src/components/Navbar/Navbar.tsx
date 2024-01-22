import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css';
import symbol from './../../asset/Symbol.png';
import MenuIcon from './../../asset/MenuIcon.png';

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const hadleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", hadleResize);
    return () => {
      window.removeEventListener("resize", hadleResize);
    };
  });

  return (
   <>
    <div className={`container-fluid ${navbar ? 'active' : ''}`}>
      <nav className="navbar">
        <label className="menu-icon" htmlFor="menu-btn">
        <img src={MenuIcon} alt="Menu" /> 
        </label>
        <div className="logo">
          <img src={symbol} alt="" width="30" height="30" />
          <span>Estatein</span>
        </div>
        {windowWidth < 967 ? (
          <img src={MenuIcon} alt="Menu" onClick={()=>setNavbar(!navbar)} /> 
        ):(
          <>
           <div className='nav-content'>
           <ul className="nav-list">
             <li className="nav-item"><Link to='/'>Home</Link></li>
             <li className="nav-item"><Link to='/about'>About Us</Link></li>
             <li className="nav-item"><Link to='/properties'>Properties</Link></li>
             <li className="nav-item"><Link to='/services'>Services</Link></li>
           </ul>
           </div>
            <div className="list-items">
              <button><Link to='/contact'>Contact Us</Link></button>
            </div>
          </>
         
        )}
        </nav> 
        {windowWidth < 967 ? navbar?<div>
          <h6 className='nav-style'><Link to='/'>Home</Link></h6>
          <h6 className='nav-style'><Link to='/about'>About Us</Link></h6>
          <h6 className='nav-style'><Link to='/properties'>Properties</Link></h6>
          <h6 className='nav-style'><Link to='/services'>Services</Link></h6>
          <h6 className='nav-style'><Link to='/contact'>Contact Us</Link></h6>
        </div>:<></>:<></>}
    </div>
   </>
  );
};

export default Navbar;
