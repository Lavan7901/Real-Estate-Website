import React from 'react';
import symbol from "../asset/Symbol.png";
import Mail from "../asset/Mail.png";
import Send from "../asset/Send.png";
import Facebook from "../asset/Facebook.png";
import LinkedIn from "../asset/LinkedIn.png";
import Twitter from "../asset/Twitter.png";
import youTube from "../asset/youTube.png";

const Footer: React.FC = () => {
  return (
    <div className='Footer'>
    <div className="container-fluid1">
      <div className='properties'>
        <div className="footer-items">
          <div className='footer-content'>
          <div className='footer-image'>
          <img src={symbol} alt='' width="30" height="30" />
          <span>&nbsp; Estatein</span>
          </div>
          <div className='footer-input'>
            <img src={Mail} alt='' />
            <div className='header-2'>Enter Your Mail</div>
            <img src={Send} alt=' ' />
          </div>
          </div>
          <div className='footer-section'>
          <div className="footer-home">
            <div className='footer-heading'>Home</div>
            <div className='footer-list'>
            <div className='content-items'>Hero Section</div>
            <div className='content-items'>Features</div>
            <div className='content-items'>Properties</div>
            <div className='content-items'>Testimonials</div>
            <div className='content-items'>FAQ's</div>
          </div>
          </div>
          <div className="footer-home">
            <div className='footer-heading'>About Us</div>
            <div className='footer-list'>
            <div className='content-items'>Our Star</div>
            <div className='content-items'>Our Works</div>
            <div className='content-items'>How it Works</div>
            <div className='content-items'>Our Team</div>
            <div className='content-items'>Our Clients</div>
          </div>
          </div>
          <div className="footer-home">
            <div className='footer-heading'>Properties</div>
            <div className='footer-list'>
            <div className='content-items'>Portfolio</div>
            <div className='content-items'>Categories</div>
          </div>
          </div>
          <div className="footer-home">
            <div className='footer-heading'>Services</div>
            <div className='footer-list'>
            <div className='content-items'>Valuation Mastery</div>
            <div className='content-items'>Strategic Marketing</div>
            <div className='content-items'>Negotiation Wizardry</div>
            <div className='content-items'>Closing Success</div>
            <div className='content-items'>Property Management</div>
          </div>
          </div>
          <div className="footer-home1">
          <div className="footer-home">
            <div className='footer-heading'>Contact Us</div>
            <div className='footer-list'>
            <div className='content-items'>Contact Form</div>
            <div className='content-items'>Our Offices</div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className='container-fluid'>
           <div className='properties'>
            <div className='website-right'>
              <div className='right-terms'>
              <div className='rights-text'>
              <p>@2023 Estatein. All Rights Reserved.</p>
              </div>
              <div className='term-text'>
                <p>Terms & Conditions</p>
              </div>
              </div>
              <div className='social-image'>
                <img className='media-image' src={Facebook} alt='' />
                <img className='media-image' src={LinkedIn} alt='' />
                <img className='media-image' src={Twitter} alt='' />
                <img className='media-image'src={youTube} alt='' />
              </div>
            </div>
           </div>
      </div>
    </div>
  );
};

export default Footer;
