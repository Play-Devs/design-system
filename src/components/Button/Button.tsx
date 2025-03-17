import React from 'react';
import './Button.scss';

interface ButtonProps {
  variant: 'solid' | 'subtle' | 'outline';  
  onClick: () => void;
  children: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <button 
      className={`button button--${variant}`} 
      onClick={onClick}
    >
      {children} {/* Exibindo o conteúdo passado para o botão */}
    </button>
  );
};

export default Button;
