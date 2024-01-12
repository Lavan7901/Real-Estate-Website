import React from 'react';
import Send from "./../../asset/Send.png";
import Twit from "./../../asset/Twit.png";

interface Aboutcontainer3Props {
  image: string;
  title: string;
  name: string;
}

const Aboutcontainer3: React.FC<Aboutcontainer3Props> = ({ image,title,name}) => {
  return (
    <div className='about3-box'>
      <div className='about-b-img'>
        <img src={image} alt='' />
      </div>
      <div className='about-twitter'>
      <img className="profile-twitter" src={Twit} alt='' />
      </div>
      <div className='about-b-text'>
        <h5>{name}</h5>
         <p className='profile-title'>{title}</p>
      </div>
      <div className='about-input'>
        <div className='input-name'>
          <p className='name-box'>Say Hello</p>
          <img className="input-send" src={Send} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Aboutcontainer3;
