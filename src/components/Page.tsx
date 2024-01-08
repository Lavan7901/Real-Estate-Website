import React from 'react';
import Background1 from "../asset/Background(1).png";
import Background2 from "../asset/Background(2).png";
import Background3 from "../asset/Background(3).png";

interface PageProps {
  image: string;
  title: string;
  paragraph: string;
  list:number;
  list1:number;
}

const Page: React.FC<PageProps> = ({ image,title, paragraph,list,list1}) => {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={image} alt='' />
      </div>

      <div className='a-b-text'>
        <h5>{title}</h5>
         <p className="paragraph1">{paragraph}</p>
        <div className='b-box'>
          <div className='b-items'>
          <img src={Background1} alt='' />
          <div className='items'>{list}-Bedroom</div>
          </div>
          <div className='b-items'>
          <img src={Background2} alt='' />
          <div className='items'>{list1}-Bathroom</div>
          </div>
          <div className='b-items'>
          <img src={Background3} alt='' />
          <div className='items'>Villa</div>
          </div>
        </div> 
        </div>
        <div className='c-box'>
        <div className='price-box'>
          <h6 className='header2'>Price</h6>
          <p className='price-size'>$550,000</p>
        </div>
        <div className='button-box'>
          <button className='style-button'><span>View Property Details</span></button>
        </div>
        </div>
      </div>
  );
};

export default Page;
