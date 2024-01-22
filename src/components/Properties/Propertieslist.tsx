import React from 'react';

interface PageProps {
  option: string;
  image: string;
}

const Propertieslist: React.FC<PageProps> = ({ image,option}) => {
  return (
    <div className='properties1-list'>
      <div className='properties1-select'>
        <select className='select-values'><option value={option}><img src={image} alt="" />{option}</option></select>
      </div>
    </div>
  );
};

export default Propertieslist;
