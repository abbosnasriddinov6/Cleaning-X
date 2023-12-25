import React from 'react';
import './Guideline.scss';
import { Opa, Oqcellphone  } from '../../assets';

const Guideline = () => {
  return (
    <div className='guideline'>
      <div className='covid'>
         <div className='opa'>
            <img className='tuvakchi' src={Opa} alt="" />
         </div>
         <div className='yoz'>
            <h3>Covid-19 sanitization</h3>
            <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
            <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
            <div className='bvt'>
                <button>Get a free quote</button>
                <div className='oq'>
                    <img className='cell' src={Oqcellphone} alt="" />
                </div>
            </div>
            </div>
            
         </div>
         <hr />
    </div>
  );
};

export default Guideline;