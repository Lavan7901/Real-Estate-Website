import React, { useState, useEffect } from 'react';
import './Navbar.css';
import symbol from '../asset/Symbol.png';
import MenuIcon from '../asset/MenuIcon.png';

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
             <li className="nav-item">
               <a href="#home">Home</a>
             </li>
             <li className="nav-item">
               <a href="#about">About Us</a>
             </li>
             <li className="nav-item">
               <a href="#properties">Properties</a>
             </li>
             <li className="nav-item">
               <a href="#services">Services </a>
             </li>
           </ul>
           </div>
            <div className="list-items">
            <a href="#contact">
              <button>Contact Us</button>
            </a>
         </div>
         </>
         
        )}
        </nav> 
        {windowWidth < 967 ? navbar?<div>
          <h6 className='nav-style'>Home</h6>
          <h6 className='nav-style'>About Us</h6>
          <h6 className='nav-style'>Properties</h6>
          <h6 className='nav-style'>Services</h6>
          <h6 className='nav-style'>Contact Us</h6>
        </div>:<></>:<></>}
    </div>
   </>
  );
};

export default Navbar;
