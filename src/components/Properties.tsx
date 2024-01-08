import React from "react";
import Frame1 from "../asset/Frame(1).png";
import Frame2 from "../asset/Frame(2).png";
import Frame3 from "../asset/Frame(3).png";
import page1 from "../asset/Image (2).png";
import page2 from "../asset/Image (3).png";
import page3 from "../asset/Image (4).png";
import LeftArrow from "../asset/LeftArrow.png";
import RightArrow from "../asset/RightArrow.png";
import Page from "./Page";

const Properties: React.FC = () => {
    return(
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
    )
}
export default Properties;