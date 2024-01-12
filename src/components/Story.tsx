import React from 'react';
import star from "../asset/Shape.png";

interface StoryProps {
  title: string;
  paragraph: string;
  image: string;
  name: string;
  place: string;
}

const Story: React.FC<StoryProps> = ({ title, paragraph,image,name,place}) => {
  return (
    <div className='z-box'>
      <div className='z-image'>
        <img  className="star-image" src={star} alt='' />
        <img  className="star-image" src={star} alt='' />
        <img  className="star-image" src={star} alt='' />
        <img  className="star-image" src={star} alt='' />
        <img  className="star-image" src={star} alt='' />
      </div>
      <div className='z-title'>
        <h5>{title}</h5>
      </div>
      <div className='z-paragraph'>
        <p className='story-para'>{paragraph}</p>
      </div>
      <div className='profile-detail'>
      <div className='z-profile'>
        <img src={image} alt='' />
      </div>
      <div className='profile-name'>
          <h6 className='name-profile'>{name}</h6>
          <p className='header2'>{place}</p>
      </div>
      </div>
    </div>
  )
}
 export default Story;