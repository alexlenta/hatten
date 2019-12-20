import React from 'react';

import './Card.scss';

export const Card = ({ className, ...props }) => {
  return <div className={`Card ${className}`} {...props} />;
};
