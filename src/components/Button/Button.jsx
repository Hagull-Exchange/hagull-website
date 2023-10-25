import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, to, variant }) => {
    const className = `botton botton-${variant}`;
    return (
        <Link to={to} className={className}>
            {text}
        </Link>
    );
};

export default Button;
