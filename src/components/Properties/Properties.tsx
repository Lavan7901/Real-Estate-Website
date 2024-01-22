import React from "react";
import Frame1 from "./../../asset/Frame(1).png";
import Frame2 from "./../../asset/Frame(2).png";
import Frame3 from "./../../asset/Frame(3).png";
import page1 from "./../../asset/Image (2).png";
import page2 from "./../../asset/Image (3).png";
import page3 from "./../../asset/Image (4).png";
import Search from "./../../asset/Search.png";
import Type from "./../../asset/Type.png";
import Range from "./../../asset/Range.png";
import Year from "./../../asset/Year.png";
import Location from "./../../asset/Location.png";
import Size from "./../../asset/Size.png";
import image25 from "./../../asset/Image25.png";
import image26 from "./../../asset/Image26.png";
import image27 from "./../../asset/Image27.png";
import image28 from "./../../asset/Image28.png";
import image29 from "./../../asset/Image29.png";
import image30 from "./../../asset/Image30.png";
import image31 from "./../../asset/Image31.png";
import image32 from "./../../asset/Image32.png";
import image33 from "./../../asset/Image33.png";
import image34 from "./../../asset/Image34.png";
import image35 from "./../../asset/Image35.png";
import shape3 from "./../../asset/Shape(3).png";
import shape4 from "./../../asset/Shape(4).png";
import shape5 from "./../../asset/Shape(5).png";
import Battery from "./../../asset/Battery.png";
import LeftArrow from "./../../asset/LeftArrow.png";
import RightArrow from "./../../asset/RightArrow.png";
import sub1 from "./../../asset/sub1.png";
import sub2 from "./../../asset/sub2.png";
import Propertiescontainer1 from "./Propertiescontainer1";
import Propertiescontainer2 from "./Propertiescontainer2";
import Propertieslist from "./Propertieslist";
import Propertiescontainer3 from "./Propertiescontainer3";
import Question from "../Home/Question";

const Properties: React.FC = () => {
    return(
        <div className="Properties">
          <div className="properties-color">
           <div className="container-fluid1">
               <div className="about-style">
               <div className="properties-content">
                        <h2>Find Your Dream Property</h2>
                        <p className="properties-paragraph">Welcome to Estatein, where your dream property awaits in every corner of our beautiful world.Explore our curated selection of properties,
                            each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                     </div>
                </div>
            </div>
            </div>
            <div className="container-fluid3">
                   <div className="about-style">
                    <div className="searchicon-container">
                      <p className="paragraph1">Search For A Property</p>
                      <div className="search-property">
                      <button className="style-button">
                         <img src={Search} alt=" " /> &nbsp; 
                         <span className="button-text">Find Property</span>
                       </button>
                    </div>
                    </div>
                     <div className="selecticon-container">
                      <Propertieslist image={Location} option="Location" />
                      <Propertieslist image={Type} option="Property Type" />
                      <Propertieslist image={Range} option="Pricing Range" />
                      <Propertieslist image={Size} option="Property Size" />
                      <Propertieslist image={Year} option="Build Year" />
                     </div>
                      <div className="properties-icon1">
                        <img className="frame-image" src={Frame1} alt=" "/>  
                        <img className="frame-image" src={Frame2} alt=" "/>  
                        <img className="frame-image" src={Frame3} alt=" "/>  
                      </div>
                      <div className="header-content2">
                        <h2>Discover a World of Possibilities</h2>
                        <p className="achieve-title">Our portfolio of properties is as diverse as your dreams. 
                            Explore the following categories to find the perfect property that resonates with your vision of home.</p>
                      </div>
                      <div className='properties-container'>
                       <Propertiescontainer1 image={page1} content="Coastal Escapes - Where Waves Beckon" title="Seaside Serenity Villa" paragraph="Wake up to the soothing melody of waves. This beachfront villa offers... Read More" price="$1,250,000" />
                       <Propertiescontainer1 image={page2} content="Urban Oasis - Life in the Heart of the City" title="Metropolitan Haven" paragraph="Immerse yourself in the energy of the city. This modern apartment in the heart... Read More" price="$650,000" />
                       <Propertiescontainer1 image={page3} content="Countryside Charm - Escape to Nature's Embrace" title="Rustic Retreat Cottage" paragraph="Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More" price="$350,000" />
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
                
                <div className="container-fluid3">
                  <div className="about-style">
                      <div className="properties-icon1">
                        <img className="frame-image" src={Frame1} alt=" "/>  
                        <img className="frame-image" src={Frame2} alt=" "/>  
                        <img className="frame-image" src={Frame3} alt=" "/>  
                      </div>
                      <div className="header-content2">
                        <h2>Let's Make it Happen</h2>
                        <p className="achieve-title">Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic 
                            to find your perfect match. Don't wait;let's embark on this exciting journey together.</p>
                      </div>
                      <div className="properties1-container">
                        <div className="input-container">
                          <Propertiescontainer2 label="First Name" placeholder="Enter First Name" />
                          <Propertiescontainer2 label="Last Name" placeholder="Enter Last Name" />
                          <Propertiescontainer2 label="Email" placeholder="Enter Your Email" />
                          <Propertiescontainer2 label="Phone" placeholder="Enter Phone Number" />
                        </div>
                        <div className="select-container">
                          <Propertiescontainer2 label="Preferred Location" option="Select Location" />
                          <Propertiescontainer2 label="Property Type" option="Select Property Type" />
                          <Propertiescontainer2 label="No. of Bathrooms" option="Select no. of Bedrooms" />
                          <Propertiescontainer2 label="No. of Bedrooms" option="Select no. of Bedrooms" />
                        </div>
                        <div className="option-container">
                          <div className="properties-option">
                           <label>Budget</label>
                           <select className="budget-option"><option value="Select Budget">Select Budget</option></select>
                          </div>
                          <div className="call-method">
                            <label>Preferred Contact Method</label>
                             <div className="two-inputfield">
                              <input className='field-name' type="number" placeholder="Enter Your Number" />
                              <input className='field-name' type="text" placeholder="Enter Your Email" />
                             </div>
                          </div>
                        </div>
                        <div className="textfield-container">
                          <label>Message</label>
                          <input className='textfield-name' type="text" placeholder="Enter Your Message here" />
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
                <div className="property-header">
                  <div className="header1-property">
                    <h5 className="header1-heading">Seaside Serenity Villa</h5>
                    <div className="header1-image">
                      <img src={Location} alt="" />
                      <p>Malibu, California</p>
                    </div>
                  </div>
                  <div className="property-header1price">
                    <p className="paragraph">Price</p>
                    <h5>$1,250,000</h5>
                  </div>
                </div>

                <div className="property-container1">
                  <div className="container1-images">
                   <Propertiescontainer3 image={image25} />
                   <Propertiescontainer3 image={image26} />
                   <Propertiescontainer3 image={image27} />
                   <Propertiescontainer3 image={image28} />
                   <Propertiescontainer3 image={image29} />
                   <Propertiescontainer3 image={image30} />
                   <Propertiescontainer3 image={image31} />
                   <Propertiescontainer3 image={image32} />
                   <Propertiescontainer3 image={image33} />
                   </div>
                   <div className="property-header1image">
                      <div className="row">
                     <div className="col-lg-6">
                      <img className="image34" src={image34} alt="" />
                    </div>
                      <div className="col-lg-6">
                       <img  className="image35" src={image35} alt="" />      
                      </div>
                     </div>
                     </div>
                     <div className="villas-arrow">
                      <div className="page-villas">
                       <div className="react-icon">
                         <img src={LeftArrow} alt=" "/>
                       </div>
                        <div className="shape-villas">
                          <img src={sub2} alt="" />
                          <img src={sub1} alt="" />
                          <img src={sub1} alt="" />
                          <img src={sub1} alt="" />
                          <img src={sub1} alt="" />
                          <img src={sub1} alt="" />
                        </div>
                       <div className="react-icon">
                        <img src={RightArrow} alt=" "/>
                       </div>
                   </div>
                   </div>
                    </div>
                </div>
              </div>
             <div className="container-fluid3">
              <div className="about-style">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="property-container2">
                      <h5>Description</h5>
                      <p className="paragraph1">Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, 
                          and direct access to a pristine sandy beach, this property is the epitome of coastal living.</p>
                      <div className="description-class">
                        <div className="description-list">
                            <p className="paragraph1"><img src={shape3} alt=""/>&nbsp; Bedrooms</p>
                            <p>04</p>
                        </div>
                        <div className="description-list">
                            <p className="paragraph1"><img src={shape4} alt=""/>&nbsp; Bathrooms</p>
                            <p>03</p>
                        </div>
                        <div className="description-list">
                            <p className="paragraph1"><img src={shape5} alt=""/>&nbsp; Area</p>
                            <p>2,500 Square Feet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="property1-container2">
                      <h5>Key Features and Amenities</h5>
                      <div className="key-items">
                        <div className="key-list">
                         <p className="paragraph1"><img src={Battery} alt="" />&nbsp;Expansive oceanfront terrace for outdoor entertaining</p>
                        </div>
                        <div className="key-list">
                         <p className="paragraph1"><img src={Battery} alt="" />&nbsp;Gourmet kitchen with top-of-the-line appliances</p>
                        </div>
                        <div className="key-list">
                         <p className="paragraph1"><img src={Battery} alt="" />&nbsp;Private beach access for morning strolls and sunset views</p>
                        </div>
                        <div className="key-list">
                         <p className="paragraph1"><img src={Battery} alt="" />&nbsp;Master suite with a spa-inspired bathroom and ocean-facing balcony</p>
                        </div>
                        <div className="key-list">
                         <p className="paragraph1"><img src={Battery} alt="" />&nbsp;Private garage and ample storage space</p>
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
                        <h2>Comprehensive Pricing Details</h2>
                        <p className="achieve-title">At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. 
                           Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision</p>
                      </div>
                      <div className="notes">
                        <h5>Note</h5>
                        <div className="vl"></div>
                        <p className="paragraph1">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
                      </div>
                      <div className="property-pricing">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="pricing-list1">
                          <p className="paragraph1">Listing Price</p>
                          <h5>$1,250,000</h5>
                        </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="list-pricedetail">
                            <div className="pricedetail-1">
                              <h5>Additional Fees</h5>
                              <button>Learn More</button>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Property Transfer Tax</p>
                                 <div className="propertypricing-details">
                                   <h6>$25,000</h6>
                                   <p className="border-paragraph">Based on the sale price and local regulations</p>
                                 </div>
                                </div>
                                <div className="vl-1"></div>
                                <div className="property-tax">
                                  <p className="paragraph1">Legal Fees</p>
                                  <div className="propertypricing-details">
                                    <h6>$3,000</h6>
                                    <p className="border-paragraph">Approximate cost for legal services,including transfer</p>
                                  </div>
                                </div>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Home Inspection</p>
                                 <div className="propertypricing-details">
                                   <h6>$500</h6>
                                   <p className="border-paragraph">Recommended for due diligence</p>
                                 </div>
                                </div>
                                <div className="vl-1"></div>
                                <div className="property-tax">
                                  <p className="paragraph1">Property Insurance</p>
                                  <div className="propertypricing-details">
                                    <h6>$1,200</h6>
                                    <p className="border-paragraph">Annual cost for comprehensive property insurance</p>
                                  </div>
                                </div>
                            </div>
                          <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Mortgage Fees</p>
                                 <div className="propertypricing-details">
                                   <h6>Varies</h6>
                                   <p className="border-paragraph">If applicable, consult with your lender for specific details</p>
                                 </div>
                                </div>
                              </div>
                              </div>
                          
                              <div className="list-pricedetail">
                            <div className="pricedetail-1">
                              <h5>Monthly Cost</h5>
                              <button>Learn More</button>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Property Taxes</p>
                                 <div className="propertypricing-details">
                                   <h6>$1,250</h6>
                                   <p className="border-paragraph">Approximate monthly property tax based on the sale price and local rates</p>
                                 </div>
                                </div>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Homeowners' Association Fee</p>
                                 <div className="propertypricing-details">
                                   <h6>$300</h6>
                                   <p className="border-paragraph">Monthly fee for common area maintenance and security</p>
                                 </div>
                                </div>
                            </div>
                            </div>

                         <div className="list-pricedetail">
                            <div className="pricedetail-1">
                              <h5>Total Initial Costs</h5>
                              <button>Learn More</button>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Listing Price</p>
                                 <div className="propertypricing-details">
                                   <h6>$1,250,000</h6>
                                 </div>
                                </div>
                                <div className="vl-1"></div>
                                <div className="property-tax">
                                  <p className="paragraph1">Additional Fees</p>
                                  <div className="propertypricing-details">
                                    <h6>$29,700</h6>
                                    <p className="border-paragraph">Property transfer tax, legal fees, inspection, insurance</p>
                                  </div>
                                </div>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Down Payment</p>
                                 <div className="propertypricing-details">
                                   <h6>$250,000</h6>
                                   <p className="border-paragraph">20%</p>
                                 </div>
                                </div>
                                <div className="vl-1"></div>
                                <div className="property-tax">
                                  <p className="paragraph1">Mortgage Amount</p>
                                  <div className="propertypricing-details">
                                    <h6>$1,000,000</h6>
                                    <p className="border-paragraph">If applicable</p>
                                  </div>
                                </div>
                            </div>
                            </div>
                               
                            <div className="list-pricedetail">
                            <div className="pricedetail-1">
                              <h5>Monthly Expenses</h5>
                              <button>Learn More</button>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Property Taxes</p>
                                 <div className="propertypricing-details">
                                   <h6>$1,250</h6>
                                 </div>
                                </div>
                                <div className="vl-1"></div>
                                <div className="property-tax">
                                  <p className="paragraph1">Homeowners' Association Fee</p>
                                  <div className="propertypricing-details">
                                    <h6>$300</h6>
                                  </div>
                                </div>
                            </div>
                            <div className="property-fees">
                              <div className="property-tax">
                                <p className="paragraph1">Mortgage Payment</p>
                                 <div className="propertypricing-details">
                                   <h6>Varies based on terms and interest rate</h6>
                                   <p className="border-paragraph">If applicable</p>
                                 </div>
                                </div>
                                <div className="vl-1"></div>
                                <div className="property-tax">
                                  <p className="paragraph1">Property Insurance</p>
                                  <div className="propertypricing-details">
                                    <h6>$100</h6>
                                    <p className="border-paragraph">Approximate monthly cost</p>
                                  </div>
                                </div>
                            </div>
                            </div>
                                 

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
    )
}
export default Properties;