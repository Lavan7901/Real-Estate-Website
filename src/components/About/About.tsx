import React from "react";
import Frame1 from "./../../asset/Frame(1).png";
import Frame2 from "./../../asset/Frame(2).png";
import Frame3 from "./../../asset/Frame(3).png";
import Image1 from "./../../asset/Image1.png";
import Icon1 from "./../../asset/Icon1.png";
import Icon2 from "./../../asset/Icon2.png";
import Icon3 from "./../../asset/Icon3.png";
import Profile1 from "./../../asset/Profile1.png";
import Profile2 from "./../../asset/Profile2.png";
import Profile3 from "./../../asset/Profile3.png";
import Profile4 from "./../../asset/Profile4.png";
import Aboutcontainer1 from "./Aboutcontainer1";
import Aboutcontainer2 from "./Aboutcontainer2";
import Aboutcontainer3 from "./Aboutcontainer3";
import Aboutcontainer4 from "./Aboutcontainer4";
import LeftArrow from "./../../asset/LeftArrow.png";
import RightArrow from "./../../asset/RightArrow.png";

const About: React.FC = () => {
    return(
        <div className="About">
            <div className="container-fluid1">
                <div className="about-style">
                  <div className="aboutus-header">
                   <div className="row">
                    <div className="col-lg-6">
                     <div className="properties-icon1">
                       <img className="frame-image" src={Frame1} alt=" "/>  
                       <img className="frame-image" src={Frame2} alt=" "/>  
                       <img className="frame-image" src={Frame3} alt=" "/>  
                     </div>
                     <div className="header-content1">
                        <h2>Our Journey</h2>
                        <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, 
                            determined to create a real estate platform that transcended the ordinary. Over the years, 
                            we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                     </div>
                     <div className="header-container">
                        <div className="header1">
                            <h4>200k+</h4>
                            <p>Happy Customers</p>
                        </div>
                        <div className="header1">
                            <h4>10k+</h4>
                            <p>Properties For Clients</p>
                        </div>
                        <div className="header1">
                            <h4>16+</h4>
                            <p>Years of Experience</p>
                        </div>
                     </div>
                    </div>
                    <div className="col-lg-6">
                       <img className="about-image" src={Image1} alt="" />
                    </div>
                   </div> 
                   </div>
                </div>
            </div>
             
             <div className="container-fluid3">
                <div className="about-style">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="properties-icon1">
                           <img className="frame-image" src={Frame1} alt=" "/>  
                           <img className="frame-image" src={Frame2} alt=" "/>  
                           <img className="frame-image" src={Frame3} alt=" "/>  
                        </div>
                        <div className="header-content2">
                          <h2>Our Values</h2>
                          <p>Our story is one of continuous growth and evolution. We started as a small team 
                            with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                          </div>
                         </div>
                        <div className="col-lg-8">
                            <div className="about-values">
                                <div className="about-items">
                                <div className="value-list">
                                  <div className="value-items">
                                    <img className="about-image1" src={Icon1} alt="" />
                                    <h6>Trust</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>Trust is the cornerstone of every successful real estate transaction.</p>
                                  </div>
                                </div>
                                   <div className="value-list">
                                  <div className="value-items">
                                    <img className="about-image1" src={Icon2} alt="" />
                                    <h6>Excellence</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                                  </div>
                                </div>
                                <div className="value-list">
                                  <div className="value-items">
                                    <img className="about-image1" src={Icon3} alt="" />
                                    <h6>Client-Centric</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
                                  </div>
                                </div>
                                <div className="value-list">
                                  <div className="value-items">
                                    <img className="about-image1" src={Icon1} alt="" />
                                    <h6>Our Commitment</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>We are dedicated to providing you with the highest level of service, professionalism.</p>
                                  </div>
                                  </div>
                                 </div>
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
                          <h2>Our Achievements</h2>
                          <p className="achieve-title">Our story is one of continuous growth and evolution. We started as a small team with big
                             dreams, determined to create a real estate platform that transcended the ordinary.</p>
                          </div>
                          <div className="about-container">
                          <Aboutcontainer1  title="3+ Years of Excellence" paragraph="With over 3 years in the industry, we've amassed a wealth of knowledge and experience." />
                          <Aboutcontainer1  title="Happy Clients" paragraph="Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do." />
                          <Aboutcontainer1  title="Industry Recognition" paragraph="We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence." />
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
                        <h2>Navigating the Estatein Experience</h2>
                        <p className="achieve-title">At Estatein, we've designed a straightforward process to help you 
                           find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
                      </div>
                      <div className="about1-container">
                        <Aboutcontainer2 stepnumber="Step 01" title="Discover a World of Possibilities" paragraph="Your journey begins with exploring our carefully curated property listings.
                            Use our intuitive search tools to filter properties based on your preferences, including location," />
                        <Aboutcontainer2 stepnumber="Step 02" title="Narrowing Down Your Choices" paragraph="Once you've found properties that catch your eye, save them to your account 
                            or make a shortlist. This allows you to compare and revisit your favorites as you make your decision." />
                        <Aboutcontainer2 stepnumber="Step 03" title="Personalized Guidance" paragraph="Have questions about a property or need more information? 
                            Our dedicated team of real estate experts  it is just a call or message away for others and any question. " />
                        </div>
                        <div className="about1-container">
                        <Aboutcontainer2 stepnumber="Step 04" title="See It for Yourself" paragraph="Arrange viewings of the properties you're interested in. We'll coordinate
                            with the property owners and accompany you to ensure you get a firsthand look at your potential new home." />
                        <Aboutcontainer2 stepnumber="Step 05" title="Making Informed Decisions" paragraph="Before making an offer, our team will assist you with due diligence, 
                            including property inspections, legal checks, and market analysis. We want you to be fully informed." />
                        <Aboutcontainer2 stepnumber="Step 06" title="Getting the Best Deal" paragraph="We will help you negotiate the best terms and prepare your offer. 
                             Our goal is to secure the property at the right price and on favorable terms." />
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
                        <h2>Meet the Estatein Team</h2>
                        <p className="achieve-title">At Estatein, our success is driven by the dedication and expertise of our team. 
                            Get to know the people behind our mission to make your real estate dreams a reality.</p>
                      </div>
                      <div className="about3-container">
                        <Aboutcontainer3 image={Profile1} name="Max Mitchell" title="Founder" />
                        <Aboutcontainer3 image={Profile2} name="Sarah Johnson" title="Chief Real Estate Officer" />
                        <Aboutcontainer3 image={Profile3} name="David Brown" title="Head of Property Management" />
                        <Aboutcontainer3 image={Profile4} name="Michael Turner" title="Legal Counsel" />
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
                        <h2>Our Valued Clients</h2>
                        <p className="achieve-title">At Estatein, we have had the privilege of working with a diverse range of clients across various industries.
                             Here are some of the clients we've had the pleasure of serving.</p>
                      </div> 
                      <div className="about-container4">
                        <Aboutcontainer4 year="Since 2019" title="ABC Corporation" category="Luxury Home Development"
                              paragraph="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. 
                              They truly understand our business needs." />
                        <Aboutcontainer4 year="Since 2018" title="GreenTech Enterprises" category="Retail Space" paragraph="Estatein's ability 
                               to identify prime retail locations helped us expand our brand presence.They truly understand our business needs.
                               They are a trusted partner in our growth. " />
                      </div> 
                      <hr />
                    <div className="b-container">
                       <div className="page-number">
                        <p><strong>01</strong> of 10</p>
                      </div>
                    <div className="arrow-mark">
                    <div className="react-icon">
                       <img src={LeftArrow} alt=" "/>
                    </div>
                    <div className="react-icon">
                      <img src={RightArrow} alt=" "/>
                    </div>
                   </div>
                  </div>
                </div>  
                </div>


      </div>
    )
}
export default About;