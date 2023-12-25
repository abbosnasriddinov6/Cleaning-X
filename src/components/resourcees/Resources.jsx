import React from 'react';
import './Resources.scss';
import { Uy, Bino, Factory } from '../../assets';
const Resources = () => {
  return (
    <div className='service'>
      <div className='our'>
        <div className='buttonbn'>
          <div className='hh1'>
            <h1>Our Services</h1>
          </div>
          <div className='explore'>
            <button>Explore services</button>
          </div>
        </div>
        <div className='cardlar'>
          <div className="card">
            <div className='uy'>
              <img className='uycha' src={Uy} alt="" />
            </div>
            <h1>House cleaning</h1>
            <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
          </div>
          <div className="card">
          <div className='uy'>
              <img className='uycha' src={Bino} alt="" />
            </div>
            <h1>Office cleaning</h1>
            <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
          </div>
          <div className="card">
          <div className='uy'>
              <img className='uycha' src={Factory} alt="" />
            </div>
            <h1>Industrial cleaning</h1>
            <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;