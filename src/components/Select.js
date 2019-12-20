import React from 'react';

import './Select.scss';

export const Select = ({ selected = false, onClick = null }) => {
  return (
    // eslint-disable-next-line
    <div className="Select" onClick={onClick}>
      <div className={`bulb ${selected ? 'show' : ''}`} />
    </div>
  );
};
