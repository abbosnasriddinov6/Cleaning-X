import React from 'react';
import FooterStyles from '../../Footer.module.scss';
import {  logo,  } from '../../assets';
import "./Footer.scss"


const Footer = () => {
  return (
    <div className={FooterStyles.boshlandi}>
      <div className={FooterStyles.ozqoldi}>
        <div className={FooterStyles.quality}>
          <h1>Quality cleaning for your home</h1>
          <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
          <div className={FooterStyles.buttonchalar}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className={FooterStyles.nick}>
          <h3>Contact us</h3>
          <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
        </div>
        <div className={FooterStyles.hours}>
          <h3>Hours</h3>
          <h4>Monday to Friday</h4>
          <p>6:00 AM - 9:00 PM</p>
          <h4>Saturday & Sunday</h4>
          <p>8:00 AM - 8:00 PM</p>
        </div>
        <div className={FooterStyles.get}>
          <h3>Get a free estimate</h3>
          <h1>(414) 567 - 2109</h1>
          <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
          <button className='lastbuton'>Request a free quote</button>
        </div>
        <hr />
      </div>

      <div className={FooterStyles.zzz}>
        <div className={FooterStyles.llogo}>
          <img src={logo} alt="" />
        </div>
        <div className={FooterStyles.aaa}>
          <p>Copyright © Cleaning X | Designed by</p>
          <a href="#">BRIX Templates</a>
          <p>- Powered by</p>
          <a href="#">Webflow</a>
          <a href="#">Licenses</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
