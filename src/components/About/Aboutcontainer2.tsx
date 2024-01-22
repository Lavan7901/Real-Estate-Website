import React from 'react';

interface Aboutcontainer2Props {
  title: string;
  paragraph: string;
  stepnumber:any;
}

const Aboutcontainer2: React.FC<Aboutcontainer2Props> = ({ stepnumber,title, paragraph}) => {
  return (
    <div className='step-container'>
       <div className='step-number'>
        <h6>{stepnumber}</h6>
      </div>
    <div className='about1-box'>
      <div className='z-title'>
        <p className='question-title'>{title}</p>
      </div>
      <div className='z-paragraph'>
        <p className='header2'>{paragraph}</p>
      </div>
    </div>
    </div>
  )
}
 export default Aboutcontainer2;