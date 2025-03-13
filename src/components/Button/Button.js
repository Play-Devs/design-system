import React from 'react';
import './Button.scss';

const Button = ({ label, onClick, primary }) => {
  return (
    <button 
      className={`button ${primary ? 'button--primary' : 'button--secondary'}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;