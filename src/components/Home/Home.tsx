import React from "react";
import image1 from "./../../asset/Image (5).png";
import icon1 from "./../../asset/Icon.png";
import icon2 from "./../../asset/Icon (1).png";
import icon3 from "./../../asset/Icon (2).png";
import icon4 from "../../asset/Icon (3).png";
import icon5 from "../../asset/Icon (4).png";
import circle from "../../asset/circle.png";
import Frame1 from "./../../asset/Frame(1).png";
import Frame2 from "./../../asset/Frame(2).png";
import Frame3 from "./../../asset/Frame(3).png";
import page1 from "./../../asset/Image (2).png";
import page2 from "./../../asset/Image (3).png";
import page3 from "./../../asset/Image (4).png";
import LeftArrow from "./../../asset/LeftArrow.png";
import RightArrow from "./../../asset/RightArrow.png";
import profile1 from "./../../asset/Profile (1).png";
import profile2 from "./../../asset/Profile (2).png";
import profile3 from "./../../asset/Profile (3).png";
import Story from "./Story";
import Question from "./Question";
import Page from "./Page";

const Home: React.FC = () => {
    return(
      <div className="Home">
        <div className="header">
          <div className="container-fluid2">
          <div className="header-change">
            <div className="row">
                <div className="col-lg-6">
                    <div className="header-content">
                        <h2>Discover Your Dream<br />Property with Estatein</h2>
                        <p>Your journey to finding the perfect property begins here. 
                            Explore our listings to find the home that matches your dreams.</p>
                        <div className="header-button">
                        <button>Learn More</button>
                        <button className="style-button">Browse Properties</button>
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
                </div>
                <div className="col-lg-6">
                    <img className="header-image" src={image1} alt="" width="100%" height="100%" />
                </div>
                </div>
                <div className="circle-image">
                    <img className="center-image"src={circle} alt="" width="100%" height="100%" />
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
        </div>
      



        <div className="container-fluid1">
          <div className="properties">
            <div className="properties-icon">
              <img className="frame-image" src={Frame1} alt=" "/>  
              <img className="frame-image" src={Frame2} alt=" "/>  
              <img className="frame-image" src={Frame3} alt=" "/>  
            </div>
            <div className="properties-header">
                <h3>Featured Properties</h3>
            </div>
            <div className="container-fluid-2">
                <div className="row">
                    <div className="col-lg-9">
                    <p className="paragraph1">Explore our handpicked selection of featured properties. Each listing offers a glimpse 
                      into exceptional homes and investments available through Estatein. Click "View Details" 
                      for more information.</p>
                    </div>
                    <div className="col-lg-3">
                        <button className="properties-button">View  All  Properties</button>
                    </div>
                    <div className='a-container'>
                       <Page image={page1} title="Seaside Serenity Villa" paragraph="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More" list={4} list1={3} />
                       <Page image={page2} title="Metropolitan Haven" paragraph="A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More" list={2} list1={2}  />
                       <Page image={page3} title="Rustic Retreat Cottage" paragraph="An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More" list={3} list1={3}  />
            </div>
                </div>
            </div>
            <hr />
            <div className="b-container">
                <div className="page-number">
                    <p><strong>01</strong> of 60</p>
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
        </div>
      </div>
    );
}
export default Home;
