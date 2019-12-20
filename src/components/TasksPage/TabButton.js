import React from 'react';
import { NavLink } from 'react-router-dom';

import './TabButton.scss';

export const TabButton = ({ tab }) => {
  return (
    <NavLink className="TabButton" to={tab.path}>
      {tab.name}
    </NavLink>
  );
};
