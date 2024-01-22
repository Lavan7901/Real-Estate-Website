import React from 'react';

interface PageProps {
  image: string;
}

const Propertiescontainer3: React.FC<PageProps> = ({ image}) => {
  return (
    <div className="header1-pictures">
        <div className="pictures-villas">
            <img src={image} alt="" />
        </div>
    </div>
  );
};

export default Propertiescontainer3;
