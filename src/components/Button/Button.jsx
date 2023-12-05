import React from 'react';
import './Button.css';

const Button = ({ text, variant, ...props }) => {
    return (
      <button className={`botton botton-${variant}`} {...props}>
        {text}
      </button>
    );
  };


  

export default Button;
