import React from 'react';
import Domain from "./../../asset/Domain.png";
import Category from "./../../asset/Category.png";

interface Aboutcontainer4Props {
  title: string;
  year: any;
  paragraph: string;
  category:string;
}

const Aboutcontainer4: React.FC<Aboutcontainer4Props> = ({ year,title, paragraph,category}) => {
  return (
    <div className='about4-box'>
      <div className='about-clients'>
       <div className='row'>
        <div className='col-lg-8'>
            <p className='page-number1'>{year}</p>
            <h5>{title}</h5>
        </div>
        <div className='col-lg-4'>
            <button className='about-button'>Visit Website</button>
        </div>
       </div>
       <div className='about-type'>
         <div className='about-category'>
           <div className='domain-icon'>
             <img src={Domain} alt='' />
             <p className='page-number1'>Domain</p>
           </div>
           <div className='domain-para'>
             <p>Commercial Real Estate</p>
           </div>
        </div>
        <div className='about-category'>
           <div className='domain-icon'>
             <img src={Category} alt='' />
             <p className='page-number1'>Category</p>
           </div>
           <div className='category-para'>
             <p>{category}</p>
           </div>
        </div>
       </div>
        <div className='clients-about'>
            <p className='page-number1'>What They Sad</p>
            <p>{paragraph}</p>
        </div>
      </div>
    </div>
  )
}
 export default Aboutcontainer4;