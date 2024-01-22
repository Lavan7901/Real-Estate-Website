import React from 'react';

interface Aboutcontainer1Props {
  title: string;
  paragraph: string;
}

const Aboutcontainer1: React.FC<Aboutcontainer1Props> = ({ title, paragraph}) => {
  return (
    <div className='about-box'>
      <div className='z-title'>
        <p className='question-title'>{title}</p>
      </div>
      <div className='z-paragraph'>
        <p className='header2'>{paragraph}</p>
      </div>
      </div>
  )
}
 export default Aboutcontainer1;