import React from 'react';

import './BarLogo.scss';
import BarLogoSrc from '../assets/img/mock_bar_logo.png';

export const BarLogo = () => {
  return (
    <div className="BarLogo">
      <div className="bar-logo-container">
        <img src={BarLogoSrc} alt="Bar logo" />
      </div>
    </div>
  );
};
