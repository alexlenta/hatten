import React from 'react';

import './Priority.scss';

export const Priority = ({ priority = {} }) => {
  return (
    <div
      className="Priority"
      style={{ color: priority.color, backgroundColor: priority.bgColor }}
    >
      {priority.name}
    </div>
  );
};
