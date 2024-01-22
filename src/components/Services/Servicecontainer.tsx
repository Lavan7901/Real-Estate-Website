import React from 'react';

interface PageProps {
  image: string;
  title: string;
  content:string;
}

const Servicecontainer: React.FC<PageProps> = ({ image,title,content}) => {
  return (
    <div className='services-box'>
       <div className="a-service">
            <div className="a-b-service">
                <img className="service-image1" src={image} alt="" />
                   <h6>{title}</h6>
                </div>
                <div className="content-service">
                  <p>{content}</p>
                </div>
            </div>
            </div>
  );
};

export default Servicecontainer;