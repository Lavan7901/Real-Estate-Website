import React from 'react';

interface PageProps {
  image: string;
  title: string;
  paragraph: string;
  price:any;
  content:string;
}

const Propertiescontainer1: React.FC<PageProps> = ({ image,title, paragraph,price,content}) => {
  return (
    <div className='properties-box'>
      <div className='a-b-img'>
        <img src={image} alt='' />
      </div>
       <div className='a-b-content'>
        <p className='props-content'>{content}</p>
       </div>
      <div className='a-b-text'>
        <h5>{title}</h5>
         <p className="profile-title">{paragraph}</p>
        </div>
        <div className='c-box'>
        <div className='price-box'>
          <h6 className='header2'>Price</h6>
          <p className='price-size'>{price}</p>
        </div>
        <div className='button-box'>
          <button className='style-button'><span>View Property Details</span></button>
        </div>
        </div>
      </div>
  );
};

export default Propertiescontainer1;