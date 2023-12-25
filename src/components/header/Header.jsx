import React from 'react';
import { Group, logo, cellphone } from '../../assets';



import appStyles from '../../App.module.scss';
// import './Header.scss';

const Header = () => {
  return (
    <div className={appStyles.header}>
      <div className={appStyles.navbar}>
        <div className={appStyles.nav}>
          <div className={appStyles.Logo}>
            <div className={appStyles.logo}>
              <img src={logo} alt="" />
            </div>
            <ul className={appStyles.Ul}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Articles</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={appStyles.Button}>
            <ul>
              <li>Cart (0)</li>
              <button className={appStyles.button1}>Get a free quote</button>
            </ul>
          </div>
        </div>
        <div className={appStyles.yozuv}>
          <div className={appStyles.yozuvlar}>
            <h1>Quality cleaning <br /> for your home</h1>
            <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            <div className={appStyles.telvabut}>
              <button>Get a free quote</button>
              <div className={appStyles.tel}>
                <img className={appStyles.tele} src={cellphone} alt="chiqyapsiz" />
              </div>
            </div>
          </div>
          <div className={appStyles.rasm}>
            <img className={appStyles.opahon} src={ Group } alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;