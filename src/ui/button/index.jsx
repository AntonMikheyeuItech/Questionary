import React from 'react';
import './index.css';

const Button = ({ type="button", label="Button", onClick=() => {} }) => {

  return <button className="button" type={type} onClick={onClick}>{label}</button>;
};

export default Button;
