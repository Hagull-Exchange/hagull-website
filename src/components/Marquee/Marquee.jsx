import React from 'react';
import { data } from './data';
import './Marquee.css';

const Marquee = () => {
  return (
    <>
    <div className="marquee bg1">
        <div className="marquee-content">
          {data.map((item, index) => (
            <span key={index} style={{marginRight: '2em'}}>{item}</span>
          ))}
        </div>
      </div>
      <div className="marquee bg2">
        <div className="marquee-content">
        </div>
      </div>
      </>
  );
};

export default Marquee;
