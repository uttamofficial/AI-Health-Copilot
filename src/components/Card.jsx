import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  const hoverClass = hover ? 'card-hover' : '';
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;