import React from 'react';


const ShiningText = ({ text,size = 'large' }) => {
  return <div className={`shiningText text-${size}`}>{text}</div>;
};

export default ShiningText;
