import React from 'react';
import { microsoft, laudio, keller, memora_health, pingidentity, ucsf, phil, macmillan } from './imports';
import './Brand.css';

const Brand = () => {
     return (
          <div className="technology__brand brand__padding">
               <div className='container'>
                    <h2 className='title'>Trusted by 150 <span className='plus'>+</span> enterprises, scale-ups and startups.</h2>
                    <p class="fs-lead">In the realm of digital evolution,we lead the change pioneering the future of transformative solutions. </p>
               </div>
               <div className="image-container ">
                    <img src={microsoft} alt='microsoft' />
                    <img src={laudio} alt='laudio' />
                    <img src={keller} alt='keller' />
                    <img src={memora_health} alt='memora_health' />
                    <img src={pingidentity} alt='pingidentity' />
                    <img src={ucsf} alt='ucsf' />
                    <img src={phil} alt='phil' />
                    <img src={macmillan} alt='macmillan' />
               </div>
          </div>
     );
};

export default Brand;
