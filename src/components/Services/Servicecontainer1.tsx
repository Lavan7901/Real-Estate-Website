import React from 'react';

interface PageProps {
  title: string;
  content:string;
}

const Servicecontainer1: React.FC<PageProps> = ({ title,content}) => {
  return (
    <div className='services-box'>
       <div className="ab-service">
            <div className="b-service">
                   <h6>{title}</h6>
                   <button>Learn More</button>
                </div>
                <div className="content-service">
                  <p>{content}</p>
                </div>
            </div>
            </div>
  );
};

export default Servicecontainer1;