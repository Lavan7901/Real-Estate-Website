import React from 'react';
import icon5 from "../asset/Icon (4).png";

interface ContainerProps {
  text: string;
  image: string;
}

const Container: React.FC<ContainerProps> = ({ image,text}) => {
  return (
    <div className='Container-box'>
        <div className="icon-item">
      <img className="img-1" src={icon5} alt=""/>
      <img className="img-container" src={image} alt="" />
      <div className="text">{text}</div>
      </div>
      </div>
  )
}
 export default Container;