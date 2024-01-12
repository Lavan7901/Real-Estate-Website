import React from "react";
import Frame1 from "../asset/Frame(1).png";
import Frame2 from "../asset/Frame(2).png";
import Frame3 from "../asset/Frame(3).png";
import profile1 from "../asset/Profile (1).png";
import profile2 from "../asset/Profile (2).png";
import profile3 from "../asset/Profile (3).png";
import LeftArrow from "../asset/LeftArrow.png";
import RightArrow from "../asset/RightArrow.png";
import Story from "./Story";
import Question from "./Question";

const Client: React.FC = () => {
    return(
        <div className="container-pages">
        <div className="container-fluid1">
          <div className="properties">
            <div className="properties-icon">
              <img className="frame-image" src={Frame1} alt=" "/>  
              <img className="frame-image" src={Frame2} alt=" "/>  
              <img className="frame-image" src={Frame3} alt=" "/>  
            </div>
            <div className="properties-header">
                <h3>What Our Clients Say</h3>
            </div>
            <div className="container-fluid-2">
                <div className="row">
                    <div className="col-lg-9">
                    <p className="paragraph1">Read the success stories and heartfelt testimonials from our valued clients.
                     Discover why they chose Estatein for their real estate needs.</p>
                    </div>
                    <div className="col-lg-3">
                        <button className="properties-button">View All Testimonials</button>
                    </div>
                    </div>
                    </div>
                    <div className='z-container'>
                    <Story title="Exceptional Service!" paragraph="Our experience with Estatein was outstanding. 
                           Their team's dedication and professionalism made finding our dream home a breeze.
                           Highly recommended!" image={profile1} name="Wade Warren" place="USA, California" />
                    <Story title="Efficient and Reliable" paragraph="Estatein provided us with top-notch service.
                          They helped us sell our property quickly and at a great price. We couldn't be happier 
                          with the results." image={profile2}  name="Emelie Thomson" place="USA, Florida" />
                    <Story title="Trusted Advisors" paragraph="The Estatein team guided us through the entire buying process. 
                            Their knowledge and commitment to our needs were impressive. Thank you for your support!"
                            image={profile3}  name="John Mans" place="USA, Nevada" />
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
        <div className="container-fluid1">
          <div className="properties">
            <div className="properties-icon">
              <img className="frame-image" src={Frame1} alt=" "/>  
              <img className="frame-image" src={Frame2} alt=" "/>  
              <img className="frame-image" src={Frame3} alt=" "/>  
            </div>
            <div className="properties-header">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className="container-fluid-2">
                <div className="row">
                    <div className="col-lg-9">
                    <p className="paragraph1">Find answers to common questions about Estatein's services, property listings, and the real estate process. 
                             We're here to provide clarity and assist you every step of the way.</p>
                    </div>
                    <div className="col-lg-3">
                        <button className="properties-button">View All FAQ’s</button>
                    </div>
                    </div>
                    </div>  
                    <div className='z-container'>
                    <Question title="How do I search for properties on Estatein?" paragraph="Learn how to use our user-friendly search tools to 
                             find properties that match your criteria."  />
                     <Question title="What documents do I need to sell my property through Estatein?" paragraph="Find out about the necessary
                              documentation for listing your property with us."  />
                    <Question title="How can I contact an Estatein agent?" paragraph="Discover the different ways you can get in
                              touch with our experienced agents."  />
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
        <div className="journey">
            <hr />
            <div className="properties">
                <div className="journey-items">
            <div className="journey-title">
                <h4>Start Your Real Estate Journey Today</h4>
                <div className="container-fluid-2">
                <div className="row">
                <div className="col-lg-9">
                <p className='header2'>Your dream property is just a click away. Whether you're looking for a new home, 
                    a strategic investment, or expert real estate advice, Estatein is here to assist
                    you every step of the way. Take the first step towards your real estate goals and 
                    explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
            <div className="col-lg-3">
                <div className="journey-button">
                <button className="style-button">Explore Properties</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <hr />
        </div>
        </div>
    )
}

export default Client;