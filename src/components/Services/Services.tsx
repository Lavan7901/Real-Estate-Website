import React from "react";
import Frame1 from "./../../asset/Frame(1).png";
import Frame2 from "./../../asset/Frame(2).png";
import Frame3 from "./../../asset/Frame(3).png";
import icon1 from "./../../asset/Icon.png";
import icon2 from "./../../asset/Icon (1).png";
import icon3 from "./../../asset/Icon (2).png";
import icon4 from "../../asset/Icon (3).png";
import icon5 from "../../asset/Icon (4).png";
import icon11 from "../../asset/Icon11.png";
import icon12 from "../../asset/Icon12.png";
import icon13 from "../../asset/Icon13.png";
import icon14 from "../../asset/Icon14.png";
import icon15 from "../../asset/Icon15.png";
import icon16 from "../../asset/Icon16.png";
import icon17 from "../../asset/Icon17.png";
import icon18 from "../../asset/Icon18.png";
import icon19 from "../../asset/Icon19.png";
import Servicecontainer from "./Servicecontainer";
import Servicecontainer1 from "./Servicecontainer1";

const Services: React.FC = () => {
    return(
        <div className="Service">
           <div className="container-fluid1">
               <div className="about-style">
               <div className="properties-content">
                        <h2>Elevate Your Real Estate Experience</h2>
                        <p className="properties-paragraph">Welcome to Estatein, where your real estate aspirations meet expert guidance.
                           Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
                     </div>
                </div>
            </div>
            <div className="container-fluid-1">
          <div className="sub-container">
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={icon1} alt="" />
        <div className="text">Find Your Dream Home</div>
      </div>
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={icon2} alt="" />
        <div className="text">Unlock Property Value</div>
      </div>
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={icon3} alt="" />
        <div className="text">Effortless Property Management</div>
      </div>
      <div className="icon-item">
        <img className="img-1" src={icon5} alt=""/>
        <img className="img-container" src={icon4} alt=""/>
        <div className="text">Smart Investments,Informed Decisions</div>
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
                        <h2>Unlock Property Value</h2>
                        <p className="achieve-title">Selling your property should be a rewarding experience,and we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. 
                           Explore the categories below to see how we can help you at every step of your selling journey.</p>
                      </div>
                      <div className="services-container">
                        <div className="service-1">
                         <Servicecontainer image={icon11} title="Valuation Mastery" content="Discover the true worth of your property with our expert valuation services." />
                        </div>
                        <div className="service-2">
                         <Servicecontainer image={icon12} title="Strategic Marketing" content="Selling a property requires more than just a listing; it demands a strategic marketing." />
                        </div>
                        <div className="service-3">
                         <Servicecontainer image={icon13} title="Negotiation Wizardry" content="Negotiating the best deal is an art, and our negotiation experts are masters of it." />
                        </div>
                        </div>
                        <div className="services-container">
                        <div className="service-4">
                         <Servicecontainer image={icon14} title="Closing Success" content="A successful sale is not complete until the closing. We guide you through the intricate closing process." /> 
                        </div>
                        <div className="service-5">
                         <Servicecontainer1 title="Unlock the Value of Your Property Today" content="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset." />
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
                        <h2>Effortless Property Management</h2>
                        <p className="achieve-title">Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. 
                           Explore the categories below to see how we can make property management effortless for you.</p>
                      </div>
                      <div className="services-container">
                        <div className="services-1">
                        <Servicecontainer image={icon15} title="Tenant Harmony" content="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies." />
                        </div>
                        <div className="services-2">
                        <Servicecontainer image={icon16} title="Maintenance Ease" content="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep." />
                        </div>
                        <div className="services-3">
                        <Servicecontainer image={icon17} title="Financial Peace of Mind" content="Managing property finances can be complex. Our financial experts take care of rent collection" />
                        </div>
                        </div>
                        <div className="services-container">
                        <div className="services-4">
                          <Servicecontainer image={icon4} title="Legal Guardian" content="Stay compliant with property laws and regulations effortlessly." />
                        </div>
                        <div className="services-5">
                        <Servicecontainer1 title="Experience Effortless Property Management" content="Ready to experience hassle-free property management? Explore our Property Management Service
                             categories and handle the complexities while enjoy the benefits of property ownership." />
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
                          <h2>Smart Investments, Informed Decisions</h2>
                          <p>Building a real estate portfolio requires a strategic approach.
                             Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
                          </div>
                          <div className="service-header">
                            <h5>Unlock Your Investment Potential</h5>
                            <p>Explore our Property Management Service categories and let us handle the complexities while you enjoy 
                              the benefits of property ownership.</p>
                              <button>Learn More</button>
                          </div>
                         </div>
                        <div className="col-lg-8">
                            <div className="servicesabout-values">
                                <div className="serviceslist-items">
                                <div className="servicesvalue-list">
                                  <div className="servicesvalue-items">
                                    <img className="about-image1" src={icon11} alt="" />
                                    <h6>Market Insight</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real 
                                       estate market conditions.</p>
                                  </div>
                                </div>
                                   <div className="servicesvalue-list">
                                  <div className="servicesvalue-items">
                                    <img className="about-image1" src={icon18} alt="" />
                                    <h6>ROI Assessment</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>Make investment decisions with confidence. 
                                      Our ROI Assessment services evaluate the potential returns on your investments.</p>
                                  </div>
                                </div>
                                <div className="servicesvalue-list">
                                  <div className="servicesvalue-items">
                                    <img className="about-image1" src={icon19} alt="" />
                                    <h6>Customized Strategies</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>Every investor is unique, and so are their goals. We develop Customized
                                       Investment Strategies tailored to your specific needs </p>
                                  </div>
                                </div>
                                <div className="servicesvalue-list">
                                  <div className="servicesvalue-items">
                                    <img className="about-image1" src={icon4} alt="" />
                                    <h6>Diversification Mastery</h6>
                                  </div>
                                  <div className="value-content">
                                    <p>Diversify your real estate portfolio effectively. Our experts guide you 
                                      in spreading your investments across various property types and locations.</p>
                                  </div>
                                  </div>
                                 </div>
                              </div>
                             </div>
                            </div>
                          </div>
                        </div>
                         


      </div>
    )
}
export default Services;
