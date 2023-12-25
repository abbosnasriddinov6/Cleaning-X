import React from 'react';
import { cellphone } from '../../assets';

import './Contact.scss';

const Contact = () => {
  return (
    <div className='cantakt'>
      <div className='cont'>
          <div className='chizma'>
              <h1>Contact Us</h1>
              <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
              <div className='calling'>
                  <img className='call' src={cellphone} alt="" />
              </div>
              <hr />
              <h2>Not convinced yet?</h2>
              <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
              <button>Browse our packages</button>
          </div>
          <div className='inputlar'>
            <div className='name'>
            
                    <div className="div">
                        <h4>Full name</h4>
                        <input type="text" />
                    </div>

                    <div className="div">
                        <h4>Phone number</h4>
                        <input type="text" />
                    </div>

                    <div className="div">
                        <h4>Address</h4>
                        <input type="text" />
                    </div>


                    <div className="div">
                        <h4>Email</h4>
                        <input type="text" />
                    </div>


                    <div className="div">
                        <h4>Requested service</h4>
                        <input type="text" />
                    </div>


                    <div className="div">
                        <h4>Day of service</h4>
                        <input type="text" />
                    </div>


                    <div className="divv">
                        <h4>Add a note</h4>
                        <input className='inp' type="text" />
                    </div>
                    
                    <button className='boss'>Submit message</button>
                </div>
           
          </div>
      </div>
    </div>
  );
};

export default Contact;