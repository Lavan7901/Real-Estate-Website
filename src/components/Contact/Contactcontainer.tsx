import React from "react";
import icon20 from "./../../asset/Icon20.png";
import icon21 from "./../../asset/Icon21.png";
import Phone from "./../../asset/Phone.png";

interface PageProps {
    title: string;
    paragraph: string;
    content:string;
  }
  
const Contactcontainer: React.FC<PageProps> = ({ title, paragraph,content}) => {
    return(
          <div className="service-box1">
            <p>{content}</p>
            <h5>{title}</h5>
            <p className="paragraph1">{paragraph}</p>
            <div className="container-list1">
                <div className="list-flow">
                    <img src={icon21} alt=" " />
                    <p>info@estatein.com</p>
                </div>
                <div className="list-flow">
                    <img src={Phone} alt=" " />
                    <p>+1 (123) 456-7890</p>
                </div>
                <div className="list-flow">
                    <img src={icon20} alt=" " />
                    <p>Metropolis</p>
                </div>
            </div>
            <div className="contact-listbutton">
            <button className="style-button">Get Direction</button>
          </div>
          </div>
    )
}
export default Contactcontainer;