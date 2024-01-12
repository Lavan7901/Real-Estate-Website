import React from 'react';

interface QuestionProps {
  title: string;
  paragraph: string;
}

const Question: React.FC<QuestionProps> = ({ title, paragraph}) => {
  return (
    <div className='z-box'>
      <div className='z-title'>
        <p className='question-title'>{title}</p>
      </div>
      <div className='z-paragraph'>
        <p className='header2'>{paragraph}</p>
      </div>
      <div className='z-button'>
        <button className='button-style'>Read More</button>
      </div>
      </div>
  )
}
 export default Question;