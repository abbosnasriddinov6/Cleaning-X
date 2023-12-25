import React from 'react';
import './About.scss';
import { Blaknot, Plastik, Plisos } from '../../assets';


const About = () => {
  return (
    <div className="about">
      <div className='Us'>
        <div className='sagit'>
          <h1>About Us</h1>
        </div>
        <div className='nibh'>
          <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        </div>
        <div className='plastik'>
          <div className='cards'>
            <div className='schedule'>
              <img className='blok' src={Blaknot} alt="" />
            </div>
            <h1>1. Schedule online</h1>
            <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </div>
          <div className='cards'>
          <div className='schedule'>
              <img className='blok' src={Plastik} alt="" />
            </div>
            <h1>2. Pay online easily</h1>
            <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
          </div>
          <div className='cards'>
          <div className='schedule'>
              <img className='blok' src={Plisos} alt="" />
            </div>
            <h1>3. Get your house cleaned</h1>
            <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
          </div>
        </div>
        <div className='buton'>
          <button className='buton1'>Get a free quote</button>
          <button className='buton2'>Explore services</button>
        </div>
      </div>
    </div>  
  );
};

export default About;
