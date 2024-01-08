import React from "react";
import image1 from "../asset/Image (5).png";
import icon1 from "../asset/Icon.png";
import icon2 from "../asset/Icon (1).png";
import icon3 from "../asset/Icon (2).png";
import icon4 from "../asset/Icon (3).png";
import icon5 from "../asset/Icon (4).png";
import circle from "../asset/circle.png";

const Home: React.FC = () => {
    return(
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
    );
}
export default Home;
