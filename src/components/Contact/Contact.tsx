import React from "react";
import Frame1 from "./../../asset/Frame(1).png";
import Frame2 from "./../../asset/Frame(2).png";
import Frame3 from "./../../asset/Frame(3).png";
import icon9 from "./../../asset/Icon9.png";
import icon10 from "./../../asset/Icon10.png";
import Location from "./../../asset/Location.png";
import symbol from "../../asset/Symbol.png";
import icon5 from "../../asset/Icon (4).png";
import image11 from "../../asset/Image11.png";
import image12 from "../../asset/Image12.png";
import image13 from "../../asset/Image13.png";
import image14 from "../../asset/Image14.png";
import image15 from "../../asset/Image15.png";
import image16 from "../../asset/Image16.png";
import Contactcontainer from "./Contactcontainer";

const Contact: React.FC = () => {
    return(
        <div className="Service">
           <div className="container-fluid1">
               <div className="about-style">
               <div className="properties-content">
                        <h2>Get in Touch with Estatein</h2>
                        <p className="properties-paragraph">Welcome to Estatein's Contact Us page. We're here to assist you with 
                            any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property,
                            explore investment opportunities, or simply want to connect,
                            we're just a message away. Reach out to us, and let's start a conversation.</p>
                     </div>
                </div>
            </div>
            <div className="container-fluid-1">
          <div className="sub-container">
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={icon10} alt="" />
        <div className="text">info@estatein.com</div>
      </div>
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={icon9} alt="" />
        <div className="text">+1 (123) 456-7890</div>
      </div>
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={Location} alt="" />
        <div className="text">Main Headquarters</div>
      </div>
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={symbol} alt="" width={40}/>
        <div className="text">Instagram &nbsp; LinkedIn &nbsp; Facebook</div>
      </div>
        </div>
        </div>
       
        <div className="container-fluid3">
             <div className="about-style">
                 <div className="properties-icon1">
                    <img className="frame-image" src={Frame1} alt=" "/>  
                    <img className="frame-image" src={Frame2} alt=" "/>  
                    <img className="frame-image" src={Frame3} alt=" "/>  
                  </div>
                <div className="header-content2">
                    <h2>Let's Connect</h2>
                    <p className="achieve-title">We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein.
                      Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>
                    </div>
                    <div className="contact-box">
                    <div className="contact-container">
                        <div className="input-list">
                            <label>First Name</label>
                            <input className="service-input" type="text" placeholder="Enter First Name" />
                        </div>
                        <div className="input-list">
                            <label>Last Name</label>
                            <input className="service-input" type="text" placeholder="Enter Last Name" />
                        </div>
                        <div className="input-list">
                            <label>Email</label>
                            <input className="service-input" type="text" placeholder="Enter your Email" />
                        </div>
                        <div className="input-list">
                            <label>Phone</label>
                            <input className="service-input" type="text" placeholder="Enter Phone Number" />
                        </div>
                        <div className="input-list">
                            <label>Inquiry Type</label>
                            <select className="service-select"><option value="Select Inquiry Type">Select Inquiry Type</option></select>
                        </div>
                        <div className="input-list">
                            <label>How Did You Hear About Us?</label>
                            <select className="service-select"><option value="Select">Select</option></select>
                        </div>
                    </div>
                    <div className="contact-textfield">
                        <label>Message</label>
                        <input className="service-larger" type="text" placeholder="Enter your Message here.." />
                    </div>
                    <div className="checkbox-container">
                          <div className="properties-checkdown">
                            <input type="checkbox" id="term" name="policy" value="agree" />
                            <label> &nbsp;I agree with Terms of Use and Privacy Policy</label>
                          </div>
                        <div className="properties1-button">
                          <button className="style-button">Send Your Message</button>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>

         <div className="container-fluid3">
            <div className="about-style">
                <div className="properties-icon1">
                  <img className="frame-image" src={Frame1} alt=" "/>  
                  <img className="frame-image" src={Frame2} alt=" "/>  
                  <img className="frame-image" src={Frame3} alt=" "/>  
                </div>
                <div className="header-content2">
                   <h2>Discover Our Office Locations</h2>
                   <p className="achieve-title">Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs.
                      Explore the categories below to find the Estatein office nearest to you</p>
                  </div>
                  <div className="contact-buttons">
                    <button className="button1">All</button>
                    <button className="button1">Regional</button>
                    <button className="button1">International</button>
                  </div>
                  <div className="contact-container1">
                    <Contactcontainer content="Main Headquarters" title="123 Estatein Plaza, City Center, Metropolis" 
                       paragraph="Our main headquarters serve as the heart of Estatein. Located in the bustling city center, 
                       this is where our core team of experts operates, driving the excellence and innovation that define us." />
                    <Contactcontainer content="Regional Offices" title="456 Urban Avenue, Downtown District, Metropolis" 
                       paragraph="Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, 
                       staffed by local experts who understand the nuances of their respective markets." />
                  </div>
                </div>
              </div>

            <div className="container-fluid3">
            <div className="about-style"> 
            <div className="contact-container2">
              <div className="row">
               <div className="col-lg-6">
                 <img className="contactimg-reduce" src={image11} alt="" />
               </div>
               <div className="col-lg-6">
                 <img className="contactimg-reduce" src={image12} alt="" />
               </div>
              </div>
              <div className="row">
               <div className="col-lg-6">
                 <img className="contactimg-reduce" src={image13} alt="" />
               </div>
                <div className="col-lg-3">
                 <img className="contactimg-reduce" src={image15} alt="" />
               </div>
               <div className="col-lg-3">
                 <img className="contactimg-reduce" src={image16} alt="" />
               </div>
              </div>
              <div className="row">
               <div className="col-lg-6">
               <div className="properties-icon1">
                  <img className="frame-image" src={Frame1} alt=" "/>  
                  <img className="frame-image" src={Frame2} alt=" "/>  
                  <img className="frame-image" src={Frame3} alt=" "/>  
                </div>
                <div className="header-content2">
                   <h2>Explore Estatein's World</h2>
                   <p className="paragraph1">Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. 
                       Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
                  </div>
               </div>
               <div className="col-lg-6">
                 <img className="contactimg-reduce" src={image14} alt="" />
               </div>
              </div>
             </div>
             </div>
            </div>
</div>
)
}


export default Contact;